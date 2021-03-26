const showcaseModalData = {
  "battleshipJS": {
    "title": "Battleship.js",
    "path": "assets/images/battleship.gif",
    "live": "https://heyapricot.github.io/battleship.js",
    "repo": "https://github.com/heyapricot/battleship.js"
  },
  "ticTacToeJS": {
    "title": "TicTacToe.js",
    "path": "assets/images/tic_tac_toe.gif"
  },
  "toDoJS": {
    "title": "ToDo.js",
    "path": "assets/images/to_do.gif"
  },
  "weatherJS": {
    "title": "Weateher.js",
    "path": "assets/images/weather.gif",
    "description": ""
  }
}
const projectShowcaseModal = document.getElementById('projectShowcaseModal');
projectShowcaseModal.addEventListener('show.bs.modal', function (event){
  let button = event.relatedTarget
  let key = button.getAttribute('data-bs-key')
  let modalTitle = projectShowcaseModal.querySelector('.modal-title')
  let modalScreenshot = projectShowcaseModal.querySelector('.project-screenshot')
  let modalLive = projectShowcaseModal.querySelector('.modal-live')
  let modalRepo = projectShowcaseModal.querySelector('.modal-repo')

  modalTitle.textContent = showcaseModalData[key]['title']
  modalScreenshot.src = showcaseModalData[key]['path']
  modalLive.href = showcaseModalData[key]['live']
  modalRepo.href = showcaseModalData[key]['repo']
})