document.body.innerHTML = '<button>Reproduce</button>'
document.querySelector('button').addEventListener('click', () => {
  // Once the HTTP request for `dep` is sent, the patched Vite version will simulate an event loop delay for this request
  // until the `missing-dep` pre-bundling process begins and the cache folder is empty
  import('dep')

  // Cause Vite to start re-bundling because `missing-dep` is considered missing.
  const script = document.createElement('script')
  script.src = './load-missing-dep.js'
  script.type = 'module'
  document.body.appendChild(script)

  // See `[vite] Failed to load source map for .../.vite/dep.js?v=...` warning in the terminal.
})
