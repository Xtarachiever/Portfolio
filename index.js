const navBar = document.querySelector('#navbar');
const navContent = document.querySelector('#nav-content');
const sections = document.querySelector('.sections');

navBar.addEventListener('click', ()=>{
    if(navContent.className === "nav-content"){
        navContent.className += " hidden";
        sections.className += 'sections';
    }
    else{
        navContent.className = "nav-content";
        sections.className += ' small-screen';
    }
})