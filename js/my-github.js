// Write code here to communicate with Github
//part 1, add the event listener
document
  .querySelector(".nav-link.js-scroll-trigger")
  .addEventListener("click", getLisaRepos);

function setRepoNumber(number) {
  let numOfRepos = document.querySelector("#repos-count"); //get the subheading (repos num)
  numOfRepos.textContent = number;
  console.log(numOfRepos.textContent);
}

function buildRepoList(repos) {
  let ulElement = document.querySelector("#repos-list"); //get the ul Element

  return repos.forEach(rep => {
    const myLiElement = document.createElement("li");

    const url = rep.html_url;

    const a = document.createElement("a");
    a.setAttribute("href", url);

    let linkText = document.createTextNode(rep.name);

    ulElement.appendChild(myLiElement);
    myLiElement.appendChild(a);
    a.appendChild(linkText);
  });
}

function getLisaRepos(repoName) {
  fetch(`https://api.github.com/users/${repoName}/repos`)
    .then(response => response.json())
    .then(repos => {
      //show the number of repos
      setRepoNumber(repos.length);

      //get the repos inside the list element and create the links
      buildRepoList(repos);
    });
}

let myRepos = getLisaRepos("Elir25");
