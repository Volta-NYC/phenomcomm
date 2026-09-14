"use client";
import { useEffect, useRef, useState } from "react";

// A small native WebGL scene: no scene graph, textures, or rendering dependency.
const vertexShader = `
attribute vec3 aPosition;
attribute vec3 aNormal;
attribute vec3 aColor;
uniform float uTime;
uniform float uAspect;
uniform vec2 uPointer;
varying vec3 vNormal;
varying vec3 vColor;
varying vec3 vPosition;
void main() {
  float ax = 0.43 + uPointer.y * 0.07;
  float az = -0.28 + uPointer.x * 0.07;
  float ay = 0.3 + sin(uTime * 0.22) * 0.16;
  mat3 rx = mat3(1.,0.,0., 0.,cos(ax),sin(ax), 0.,-sin(ax),cos(ax));
  mat3 ry = mat3(cos(ay),0.,-sin(ay), 0.,1.,0., sin(ay),0.,cos(ay));
  mat3 rz = mat3(cos(az),sin(az),0., -sin(az),cos(az),0., 0.,0.,1.);
  mat3 rotation = rz * rx * ry;
  vec3 pos = rotation * aPosition;
  pos.y += sin(uTime * 0.42) * 0.035;
  float depth = 4.8 - pos.z;
  gl_Position = vec4(pos.x * 3.1 / uAspect, pos.y * 3.1, -pos.z * 0.12, depth);
  vNormal = normalize(rotation * aNormal);
  vColor = aColor;
  vPosition = pos;
}`;
const fragmentShader = `
precision mediump float;
varying vec3 vNormal;
varying vec3 vColor;
varying vec3 vPosition;
void main() {
  vec3 n = normalize(vNormal);
  vec3 light = normalize(vec3(-2.,4.,5.));
  vec3 eye = normalize(vec3(0.,0.,5.) - vPosition);
  float diffuse = max(dot(n, light), 0.);
  float specular = pow(max(dot(n, normalize(light + eye)), 0.), 45.);
  float rim = pow(1. - max(dot(n, eye), 0.), 3.);
  vec3 color = vColor * (0.42 + diffuse * 0.66) + vec3(0.95,0.85,0.68) * specular * 0.35 + vColor * rim * 0.16;
  gl_FragColor = vec4(color,1.);
}`;

export default function GrowthSculpture() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);
  const [available, setAvailable] = useState(false);
  const pausedRef = useRef(false);
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);
  useEffect(() => {
    const element = canvas.current;
    if (!element) return;
    const gl = element.getContext("webgl", { alpha: true, antialias: true, powerPreference: "low-power" });
    if (!gl) return;
    const shaders: WebGLShader[] = [];
    function compile(type: number, code: string) {
      const shader = gl!.createShader(type);
      if (!shader) return null;
      gl!.shaderSource(shader, code);
      gl!.compileShader(shader);
      if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) {
        gl!.deleteShader(shader);
        return null;
      }
      shaders.push(shader);
      return shader;
    }
    const vertex = compile(gl.VERTEX_SHADER, vertexShader),
      fragment = compile(gl.FRAGMENT_SHADER, fragmentShader);
    if (!vertex || !fragment) {
      shaders.forEach((shader) => gl.deleteShader(shader));
      return;
    }
    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      shaders.forEach((shader) => gl.deleteShader(shader));
      return;
    }
    gl.useProgram(program);
    const data: number[] = [];
    const colors = [
      [0.78, 0.41, 0.29],
      [0.66, 0.73, 0.59],
      [0.84, 0.69, 0.42],
    ];
    for (let ring = 0; ring < 3; ring++) {
      const radius = 0.84 + ring * 0.075,
        tube = 0.15;
      function point(u: number, v: number) {
        const x = Math.cos(u),
          z = Math.sin(u),
          cv = Math.cos(v),
          sv = Math.sin(v);
        data.push(
          (radius + tube * cv) * x,
          (ring - 1) * 0.63 + tube * sv,
          (radius + tube * cv) * z,
          cv * x,
          sv,
          cv * z,
          ...colors[ring],
        );
      }
      for (let u = 0; u < 100; u++)
        for (let v = 0; v < 18; v++) {
          const a = (u / 100) * Math.PI * 2,
            b = ((u + 1) / 100) * Math.PI * 2;
          const c = (v / 18) * Math.PI * 2,
            d = ((v + 1) / 18) * Math.PI * 2;
          point(a, c);
          point(b, c);
          point(a, d);
          point(a, d);
          point(b, c);
          point(b, d);
        }
    }
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
    ["aPosition", "aNormal", "aColor"].forEach((name, index) => {
      const location = gl.getAttribLocation(program, name);
      gl.enableVertexAttribArray(location);
      gl.vertexAttribPointer(location, 3, gl.FLOAT, false, 36, index * 12);
    });
    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0, 0, 0, 0);
    const time = gl.getUniformLocation(program, "uTime"),
      aspect = gl.getUniformLocation(program, "uAspect"),
      pointer = gl.getUniformLocation(program, "uPointer");
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0,
      visible = true,
      elapsed = 0,
      last = 0,
      width = 1,
      height = 1;
    const mouse = { x: 0, y: 0 };
    function draw() {
      if (!gl || gl.isContextLost()) return;
      gl.viewport(0, 0, width, height);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.uniform1f(time, elapsed);
      gl.uniform1f(aspect, width / height);
      gl.uniform2f(pointer, preference.matches ? 0 : mouse.x, preference.matches ? 0 : mouse.y);
      gl.drawArrays(gl.TRIANGLES, 0, data.length / 9);
    }
    function animate(now: number) {
      if (!visible || document.hidden || preference.matches || gl!.isContextLost()) {
        frame = 0;
        last = 0;
        return;
      }
      if (last && !pausedRef.current) elapsed += Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!pausedRef.current) draw();
      frame = requestAnimationFrame(animate);
    }
    function start() {
      if (!frame && visible && !document.hidden && !preference.matches) frame = requestAnimationFrame(animate);
      else if (preference.matches) draw();
    }
    const resize = new ResizeObserver(() => {
      const bounds = element!.getBoundingClientRect(),
        ratio = Math.min(window.devicePixelRatio, 1.6);
      width = element!.width = Math.max(1, Math.round(bounds.width * ratio));
      height = element!.height = Math.max(1, Math.round(bounds.height * ratio));
      draw();
    });
    resize.observe(element);
    const observer = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      if (visible) start();
    });
    observer.observe(element);
    const move = (event: PointerEvent) => {
      if (pausedRef.current || preference.matches) return;
      const bounds = element.getBoundingClientRect();
      mouse.x = (event.clientX - bounds.left) / bounds.width - 0.5;
      mouse.y = (event.clientY - bounds.top) / bounds.height - 0.5;
    };
    const lost = (event: Event) => {
      event.preventDefault();
      setAvailable(false);
      cancelAnimationFrame(frame);
      frame = 0;
    };
    element.addEventListener("pointermove", move);
    element.addEventListener("webglcontextlost", lost);
    document.addEventListener("visibilitychange", start);
    preference.addEventListener("change", start);
    setAvailable(true);
    draw();
    start();
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      observer.disconnect();
      element.removeEventListener("pointermove", move);
      element.removeEventListener("webglcontextlost", lost);
      document.removeEventListener("visibilitychange", start);
      preference.removeEventListener("change", start);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      shaders.forEach((shader) => gl.deleteShader(shader));
    };
  }, []);
  return (
    <div className="sculpture">
      <div className={`sculpture-fallback ${available ? "is-hidden" : ""}`} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <canvas ref={canvas} aria-hidden="true" className={available ? "is-ready" : ""} />
      <div className="sculpture-caption">
        <span>
          Individual growth.
          <br />
          <strong>Collective performance.</strong>
        </span>
        {available && (
          <button
            className="motion-control"
            onClick={() => setPaused(!paused)}
            aria-label={paused ? "Play sculpture animation" : "Pause sculpture animation"}
            aria-pressed={paused}
          >
            {paused ? "Play motion" : "Pause motion"}
            <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
          </button>
        )}
      </div>
    </div>
  );
}
