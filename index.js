const body = document.getElementsByTagName("body")[0]
const navRightDiv = document.getElementById("nav-right-div")
const menu = document.getElementById("menu")
const menuButton = document.getElementById("menu-button")
const menuExitButton = document.getElementById("menu-exit-button")
const a = document.getElementsByTagName("a")

function onMenuEnter(){
  menu.classList.remove("deactive")
  
  menuButton.classList.remove("active")
  menuButton.classList.add("deactive")
  
  menuExitButton.classList.remove("deactive")
  menuExitButton.classList.add("active")
  
  navRightDiv.classList.add("active")
  
  body.style.overflow = "hidden"
  body.style.height = "100%"
}
function onMenuExit(){
  menu.classList.add("deactive")
  
  menuButton.classList.remove("deactive")
  menuButton.classList.add("active")
  
  menuExitButton.classList.remove("active")
  menuExitButton.classList.add("deactive")
  
  navRightDiv.classList.remove("active")
  
  body.style.overflow = "auto"
  body.style.height = "auto"
}

menuButton.addEventListener('click', onMenuEnter)
menuExitButton.addEventListener('click', onMenuExit)
for (let i = 0; i < a.length; i++)
  a.item(i).addEventListener('click', onMenuExit)