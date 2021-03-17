const showcaseModalData = {
  "dataDashboardHealthcare": {
    "title": "Data Dashboard Healthcare",
    "path": 'assets/images/project1.jpg'
  },
  "multiPostStories": {
    "title": "Multi-Post Stories",
    "path": 'assets/images/project2.jpg'
  }
}
const projectShowcaseModal = document.getElementById('projectShowcaseModal');
projectShowcaseModal.addEventListener('show.bs.modal', function (event){
  let button = event.relatedTarget
  let key = button.getAttribute('data-bs-key')
  let modalTitle = projectShowcaseModal.querySelector('.modal-title')
  let modalScreenshot = projectShowcaseModal.querySelector('.project-screenshot')

  modalTitle.textContent = showcaseModalData[key]['title']
  modalScreenshot.src = showcaseModalData[key]['path']
})