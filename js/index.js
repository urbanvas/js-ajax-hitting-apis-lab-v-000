function getRepositories() {
  const req = new XMLHttpRequest
  req.addEventListener('load', showRepositories)
  req.open('GET', 'https://api.github.com/users/octocat/repos')
  req.send()
}

function showRepositories() {
  const repos = JSON.parse(this.responseText)
  console.log(repos[2]['name'])
  const repoList = `<ul>${repos.map(r => {`<li>${r.name}</li>`}).join('')}</ul>`
  console.log(repos[1]['name'])
  console.log(repos.map(r => {console.log(repos.map(r => {`<li>${r.name}</li>`}).join(''))})
}

getRepositories()
