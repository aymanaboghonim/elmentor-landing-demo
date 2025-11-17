import { defineConfig } from 'vite'
// Use React plugin if available. If esbuild cannot load the ESM plugin in some
// environments, fall back to no plugin so builds can still succeed. For full
// JSX/fast refresh, ensure `@vitejs/plugin-react` is installed and available.
export default defineConfig(async () => {
  let reactPlugin
  try {
    // dynamic import inside async function to avoid top-level await
    const mod = await import('@vitejs/plugin-react')
    reactPlugin = mod.default
  } catch (e) {
    reactPlugin = null
  }
  return {
    // Set base for GitHub Pages production builds so assets load under
    // https://<username>.github.io/<repo>/
    base: process.env.NODE_ENV === 'production' ? '/elmentor-landing-demo/' : '/',
    plugins: reactPlugin ? [reactPlugin()] : [],
    build: {
    chunkSizeWarningLimit: 600
    }
  }
})
