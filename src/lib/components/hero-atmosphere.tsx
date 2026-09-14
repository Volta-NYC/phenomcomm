"use client";

import { useEffect, useRef } from "react";

const vertexShader = `
attribute vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }
`;

const fragmentShader = `
precision highp float;

uniform vec2 resolution;
uniform vec2 pointer;
uniform float time;

float hash(vec2 point) {
  return fract(sin(dot(point, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 point) {
  vec2 cell = floor(point);
  vec2 local = fract(point);
  local = local * local * (3.0 - 2.0 * local);
  return mix(
    mix(hash(cell), hash(cell + vec2(1.0, 0.0)), local.x),
    mix(hash(cell + vec2(0.0, 1.0)), hash(cell + vec2(1.0)), local.x),
    local.y
  );
}

float field(vec2 point) {
  float value = 0.0;
  float amplitude = 0.58;
  for (int i = 0; i < 5; i++) {
    value += amplitude * noise(point);
    point = mat2(1.57, 1.22, -1.22, 1.57) * point;
    amplitude *= 0.5;
  }
  return value;
}

void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec2 aspect = vec2(resolution.x / resolution.y, 1.0);
  vec2 centered = (uv - 0.5) * aspect;
  vec2 cursor = (pointer - 0.5) * aspect;
  float drift = time * 0.12;
  vec2 flow = centered * 1.18;
  float softField = field(flow + vec2(drift, -drift * 0.68) + field(flow * 1.7 - drift) * 0.56);
  float secondaryField = field(flow * 1.9 + softField * 1.8 + vec2(-drift * 0.5, drift));
  float pointerWave = sin(length(centered - cursor * 0.62) * 13.0 - time * 1.25) * 0.5 + 0.5;
  float focus = exp(-3.9 * length(centered - vec2(0.38, -0.04)));
  float pointerGlow = exp(-5.5 * length(centered - cursor)) * 0.26;

  vec3 paper = vec3(0.965, 0.945, 0.885);
  vec3 cobalt = vec3(0.10, 0.31, 0.83);
  vec3 coral = vec3(0.95, 0.31, 0.19);
  vec3 mint = vec3(0.12, 0.64, 0.52);
  vec3 color = mix(paper, cobalt, smoothstep(0.38, 0.76, softField) * 0.92);
  color = mix(color, coral, smoothstep(0.52, 0.88, secondaryField) * 0.72);
  color = mix(color, mint, smoothstep(0.66, 0.96, softField + secondaryField * 0.22) * 0.56);
  color = mix(color, paper, pointerWave * focus * 0.16);
  color += cobalt * pointerGlow * 0.2;

  float edge = smoothstep(1.15, 0.16, length(centered * vec2(0.76, 1.0)));
  float alpha = (0.18 + softField * 0.42 + focus * 0.2 + pointerGlow) * edge;
  gl_FragColor = vec4(color, alpha);
}
`;

export default function HeroAtmosphere() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const element = canvas.current;
    if (!element) return;
    const gl = element.getContext("webgl", { alpha: true, antialias: false, powerPreference: "low-power" });
    if (!gl) return;

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };
    const vertex = compile(gl.VERTEX_SHADER, vertexShader);
    const fragment = compile(gl.FRAGMENT_SHADER, fragmentShader);
    if (!vertex || !fragment) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    if (!buffer) return;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const resolution = gl.getUniformLocation(program, "resolution");
    const pointerUniform = gl.getUniformLocation(program, "pointer");
    const clock = gl.getUniformLocation(program, "time");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: 0.74, y: 0.49 };
    const target = { ...pointer };
    let frame = 0;
    let visible = true;
    const started = performance.now();

    const draw = (now: number) => {
      const scale = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.max(1, Math.round(element.clientWidth * scale));
      const height = Math.max(1, Math.round(element.clientHeight * scale));
      if (element.width !== width || element.height !== height) {
        element.width = width;
        element.height = height;
        gl.viewport(0, 0, width, height);
      }
      pointer.x += (target.x - pointer.x) * 0.022;
      pointer.y += (target.y - pointer.y) * 0.022;
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform2f(resolution, width, height);
      gl.uniform2f(pointerUniform, pointer.x, pointer.y);
      gl.uniform1f(clock, reducedMotion.matches ? 8 : (now - started) / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const animate = (now: number) => {
      if (!visible || document.hidden || reducedMotion.matches) {
        frame = 0;
        return;
      }
      draw(now);
      frame = requestAnimationFrame(animate);
    };
    const start = () => {
      draw(performance.now());
      if (!frame && visible && !document.hidden && !reducedMotion.matches) frame = requestAnimationFrame(animate);
    };
    const move = (event: PointerEvent) => {
      const bounds = element.getBoundingClientRect();
      target.x = (event.clientX - bounds.left) / bounds.width;
      target.y = 1 - (event.clientY - bounds.top) / bounds.height;
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });
    const resize = new ResizeObserver(start);

    observer.observe(element);
    resize.observe(element);
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("visibilitychange", start);
    reducedMotion.addEventListener("change", start);
    start();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resize.disconnect();
      window.removeEventListener("pointermove", move);
      document.removeEventListener("visibilitychange", start);
      reducedMotion.removeEventListener("change", start);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
    };
  }, []);

  return <canvas ref={canvas} className="hero-atmosphere" aria-hidden="true" />;
}
