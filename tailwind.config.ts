import type { Config } from "tailwindcss";
const config:Config={content:["./src/**/*.{js,ts,jsx,tsx}"],theme:{extend:{colors:{canvas:"var(--canvas)",navy:"var(--navy)",clay:"var(--clay)",sage:"var(--sage)",ink:"var(--ink)"},fontFamily:{sans:["var(--font-sans)","sans-serif"],serif:["var(--font-serif)","serif"]}}},plugins:[]};
export default config;
