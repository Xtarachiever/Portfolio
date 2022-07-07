const navBar = document.querySelector('#navbar');
const navContent = document.querySelector('#nav-content')

navBar.addEventListener('click', ()=>{
    if(navContent.className === "nav-content"){
        navContent.className += " hidden"
    }
    else{
        navContent.className = "nav-content"
    }
})