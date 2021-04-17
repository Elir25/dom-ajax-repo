// Write code here to communicate with Github
//parte 1, add the event listener
document
  .querySelector(".nav-link.js-scroll-trigger")
  .addEventListener("click", getLisaRepos);

function getLisaRepos(repoName) {
  let ulElement = document.querySelector("#repos-list"); //get the ul Element

  fetch(`https://api.github.com/users/${repoName}/repos`)
    .then(response => response.json())
    .then(repos => {
      return repos.forEach(rep => {
        const myLiElement = document.createElement("li"); //new li element

        const url = rep.html_url;

        const a = document.createElement("a");
        a.setAttribute("href", url);

        let linkText = document.createTextNode(rep.name);

        ulElement.appendChild(myLiElement);
        myLiElement.appendChild(a);
        a.appendChild(linkText);
      });
    });
}
const myRepos = getLisaRepos("Elir25");
