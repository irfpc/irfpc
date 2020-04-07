const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'gitpage',
    repo: 'https://github.com/irfpc/irfpc',
  },
  () => {
    console.log('Deploy Complete branch !')
  }
)
