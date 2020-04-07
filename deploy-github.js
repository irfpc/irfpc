const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'page',
    repo: 'https://github.com/irfpc/irfpc.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
