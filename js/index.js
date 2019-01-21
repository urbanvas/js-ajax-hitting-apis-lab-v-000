function getRepositories() {
  const req = new XMLHttpRequest
  req.addEventListener('load', showRepositories)
  req.open('GET', 'https://api.github.com/users/octocat/repos')
  req.send()
}

function showRepositories() {
  const repos = JSON.parse(this.responseText)
  console.log(repos[0]["html_url"])
  // const repoList = `<ul>${repos
  //   .map(r => '<li>' + r.name + '<a href=' + r.html_url + '>' + '</li>')
  //   .join('')}</ul>`
    const repoList = `<ul>${repos.map(r => `<li>${r.name}<a href=${r.html_url}></li>`).join('')}</ul>`

  document.getElementById('repositories').innerHTML = repoList
}

getRepositories()
