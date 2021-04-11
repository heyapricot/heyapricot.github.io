const getShowcaseModalData = async function () {
  try {
    const request = "https://alvarosanchez.dev/data/projects.json";
    const response = await fetch(request, { mode: "cors" });
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log(error);
  }
};

const linkNodes = (dataArray, classNames) => {
  return dataArray.map((dataObj) => {
    const column = document.createElement("div");
    const node = document.createElement("a");
    column.setAttribute("class", "col-auto");
    node.setAttribute("class", classNames.join(" "));
    const caption = document.createTextNode(dataObj["caption"]);
    node.target = "_blank";
    node.href = dataObj["link"];
    node.appendChild(caption);
    column.appendChild(node);
    return column;
  });
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
  let projectDescription = projectShowcaseModal.querySelector(
    ".project-description"
  );
  let badgesContainer = projectShowcaseModal.querySelector(
    ".skill-badges-container"
  );
  let linksContainer = projectShowcaseModal.querySelector(".links-container");

  getShowcaseModalData().then((data) => {
    if (typeof data === "undefined") {
      alert(
        "Could not grab the project data. Please verify your connection and try again"
      );
    } else {
      let showcaseModalData = { ...data }[key];
      modalTitle.textContent = showcaseModalData["title"];
      modalScreenshot.src = showcaseModalData["path"];
      projectDescription.textContent = showcaseModalData["description"];
      appendNodes(
        badgesContainer,
        textToBadgeNodes(showcaseModalData["tags"], [
          "btn",
          "project-skills-showcase",
          "me-1",
        ])
      );
      appendNodes(
        linksContainer,
        linkNodes(showcaseModalData["links"], [
          "btn",
          "project-modal-trigger",
          "modal-repo",
        ])
      );
    }
  });

  badgesContainer.innerHTML = "";
  linksContainer.innerHTML = "";
});
