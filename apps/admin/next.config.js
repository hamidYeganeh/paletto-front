import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "../../");

const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root,
  },
};
export default nextConfig;
