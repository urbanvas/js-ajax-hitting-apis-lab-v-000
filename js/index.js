function getRepositories() { // add in user
  const name = document.getElementById('username').value
  const req = new XMLHttpRequest
  req.addEventListener('load', showRepositories)
  req.open('GET', `https://api.github.com/users/${name}/repos`) //add in user
  req.send()
}

function showRepositories() {
  const repos = JSON.parse(this.responseText)
  const repoList = `<ul>${repos.map(r => `<li>${r.name}<a href=${r.html_url}></li>`).join('')}</ul>`
  document.getElementById('repositories').innerHTML = repoList
}

getRepositories()
