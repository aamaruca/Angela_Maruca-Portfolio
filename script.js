const projectSection = document.querySelector(".project-section");
console.log(projects);
console.log(projectSection);

function displayProjects() {
  for (let i = 0; i < projects.length; i++) {
  
    let projectContainer = document.createElement("div");
    projectContainer.classList.add("project-card")
    let project = document.createElement("div");
    project.classList.add("project")
    let projectTitle = document.createElement('p')
    projectTitle.classList.add("project-title")
    let projectImage = document.createElement('img')
    projectImage.classList.add("project-image")
    let projectDescription = document.createElement('p')
    projectDescription.classList.add("project-description")

    projectSection.appendChild(projectContainer);
    projectContainer.appendChild(projectTitle)
    projectContainer.appendChild(projectImage)
    projectContainer.appendChild(projectDescription)
    
    // projectContainer.style.backgroundImage = `url(${projects[i].img_url})`
    projectTitle.innerText = projects[i].title
    projectImage.setAttribute("src", projects[i].img_url)
    projectDescription.innerText = projects[i].description
    

  }
}
displayProjects()
// console.log(projects[i]);