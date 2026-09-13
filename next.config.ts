import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  poweredByHeader:false,
  async redirects(){return [
    {source:"/pages/about",destination:"/about-us",permanent:true},
    {source:"/pages/contact",destination:"/get-started",permanent:true},
    {source:"/pages/template",destination:"/",permanent:true},
    {source:"/home",destination:"/",permanent:true},
    {source:"/contact",destination:"/get-started",permanent:true},
    {source:"/about",destination:"/about-us",permanent:true},
  ];},
};
export default nextConfig;
