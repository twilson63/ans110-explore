const esbuild = require('esbuild')
const sveltePlugin = require("esbuild-svelte")
esbuild.build({
  entryPoints: ['src/main.js'],
  mainFields: ["svelte", "browser", "module", "main"],
  bundle: true,
  outfile: 'dist/bundle.js',
  plugins: [sveltePlugin()],
})
  .catch(() => process.exit(1))