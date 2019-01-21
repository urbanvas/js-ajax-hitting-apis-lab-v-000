function getRepositories() {
  const req = new XMLHttpRequest
  req.addEventListener('load', showRepositories)
  req.open('GET', 'https://api.github.com/users/octocat/repos')
  req.send()
}

function showRepositories() {
  const repo = JSON.parse(this.responseText)
  console.log(repo[2]['name'])
  let repoList = `<ul>`
  for (const item of repo ) {
    console.log(item["name"])
  }
}

getRepositories()
