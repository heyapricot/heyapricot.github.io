const showcaseModalData = {
  battleshipJS: {
    title: "Battleship.js",
    path: "assets/images/battleship.gif",
    tags: ["html", "css", "bootstrap", "javascript", "webpacker"],
    description:
      "Implementation of the classic Battleship game with a minimalist colorful interface. Built with plain Javascript.",
    live: "https://heyapricot.github.io/battleship.js",
    repo: "https://github.com/heyapricot/battleship.js",
  },
  ticTacToeJS: {
    title: "TicTacToe.js",
    path: "assets/images/tic_tac_toe.gif",
    tags: ["html", "css", "bootstrap", "javascript", "webpacker"],
    description:
      "A minimalist version of Tic Tac Toe with a dark mode interface. Built with plain Javascript and Bootstrap.",
    live: "https://heyapricot.github.io/tictactoe.js/",
    repo: "https://github.com/heyapricot/tictactoe.js",
  },
  toDoJS: {
    title: "ToDo.js",
    path: "assets/images/to_do.gif",
    tags: ["html", "css", "bootstrap", "javascript", "webpacker"],
    description:
      "Mobile-first To-Do list web application with a dark and minimalist interface built using plain Javascript and Bootstrap.",
    live: "https://heyapricot.github.io/ToDo.js/",
    repo: "https://github.com/heyapricot/ToDo.js",
  },
  weatherJS: {
    title: "Weather.js",
    path: "assets/images/weather.gif",
    tags: [
      "html",
      "css",
      "bootstrap",
      "javascript",
      "webpacker",
      "api",
      "openweather",
    ],
    description:
      "Interface for the OpenWeather API. Write the name of the city to get the current temperature. Allows display in Celsius or Fahrenheit. The thermometer icon changes according to how hot the current temperature is. Built with Javascript and Bootstrap.",
    live: "https://heyapricot.github.io/weather.js/",
    repo: "https://github.com/heyapricot/weather.js",
  },
};

const textToBadgeNodes = (textArry, classNames) => {
  return textArry.map((label) => {
    const column = document.createElement("div");
    const node = document.createElement("span");
    column.setAttribute("class", "col-auto");
    node.setAttribute("class", classNames.join(" "));
    const caption = document.createTextNode(label);
    node.appendChild(caption);
    column.appendChild(node);
    return column;
  });
};

const appendNodes = (parentNode, children) => {
  children.forEach((child) => parentNode.appendChild(child));
};

const projectShowcaseModal = document.getElementById("projectShowcaseModal");
projectShowcaseModal.addEventListener("show.bs.modal", function (event) {
  let button = event.relatedTarget;
  let key = button.getAttribute("data-bs-key");
  let modalTitle = projectShowcaseModal.querySelector(".modal-title");
  let modalScreenshot = projectShowcaseModal.querySelector(
    ".project-screenshot"
  );
  let modalLive = projectShowcaseModal.querySelector(".modal-live");
  let modalRepo = projectShowcaseModal.querySelector(".modal-repo");
  let projectDescription = projectShowcaseModal.querySelector(
    ".project-description"
  );
  let badgesContainer = projectShowcaseModal.querySelector(
    ".skill-badges-container"
  );

  badgesContainer.innerHTML = "";
  modalTitle.textContent = showcaseModalData[key]["title"];
  modalScreenshot.src = showcaseModalData[key]["path"];
  modalLive.href = showcaseModalData[key]["live"];
  modalRepo.href = showcaseModalData[key]["repo"];
  projectDescription.textContent = showcaseModalData[key]["description"];
  appendNodes(
    badgesContainer,
    textToBadgeNodes(showcaseModalData[key]["tags"], [
      "btn",
      "project-skills-showcase",
      "me-1",
    ])
  );
});
