(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function() {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#sideNav"
  });
})(jQuery); // End of use strict

//parte 1, add the event listener
/*document
  .querySelector(".nav-link.js-scroll-trigger")
  .addEventListener("click", getLisaRepos);

function getLisaRepos(repoName) {
  let ulElement = document.querySelector("#repos-list"); //get the ul Element

  fetch(`https://api.github.com/users/${repoName}/repos`)
    .then(response => response.json())
    .then(repos => {
      return repos.forEach(rep => {
        const myLiElement = document.createElement("li"); //new li element
        //const myText = document.createElement("p");
        //myText.innerText = rep; codigo solo con los nombres de los repos

        const url = rep.html_url; //tratando de hacerlos links

        const a = document.createElement("a");
        a.setAttribute("href", url);

        let linkText = document.createTextNode(rep.name);

        ulElement.appendChild(myLiElement);
        myLiElement.appendChild(a);
        a.appendChild(linkText);

        //ulElement.appendChild(myLiElement);
        //myLiElement.appendChild(myText);
      });
    });
}
const myRepos = getLisaRepos("Elir25");*/
