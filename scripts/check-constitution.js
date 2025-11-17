const fs = require('fs')
// optional environment var for future checks
// Basic verify: ensure docs/quickstart.md exists and i18n.md present
if(!fs.existsSync('docs/quickstart.md')){
  console.error('Missing docs/quickstart.md — update documentation');
  process.exit(1)
}
if(!fs.existsSync('docs/i18n.md')){
  console.error('Missing docs/i18n.md — update documentation for translations');
  process.exit(1)
}

// Ensure modern GitHub Pages action is used instead of gh-pages branch approach
const pagesWorkflow = fs.readFileSync('.github/workflows/pages-deploy.yml','utf8')
if(!pagesWorkflow.match(/actions\/deploy-pages@(v\d+)/)){
  console.error('Pages workflow not using `actions/deploy-pages@v*`. Please update pages-deploy.yml to pin a major release.')
  process.exit(1)
}
if(!pagesWorkflow.match(/actions\/upload-pages-artifact@(v\d+)/)){
  console.error('Pages workflow not using `actions/upload-pages-artifact@v*`. Please update pages-deploy.yml to pin a major release.')
  process.exit(1)
}
// Warn if old gh-pages branch deployers are present
if(pagesWorkflow.includes('peaceiris/actions-gh-pages') || pagesWorkflow.includes('JamesIves/github-pages-deploy-action')){
  console.error('Pages workflow uses deprecated branch-based deploy action. Use `upload-pages-artifact` + `deploy-pages` instead.')
  process.exit(1)
}
console.log('Constitution docs present')
// Ensure Dependabot exists
if(!fs.existsSync('.github/dependabot.yml')){
  console.error('Missing Dependabot config (.github/dependabot.yml) — add to keep Actions and packages up to date')
  process.exit(1)
}
process.exit(0)
