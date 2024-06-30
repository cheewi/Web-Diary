const hamburger = document.getElementById('hamburger');
const sideBar = document.getElementById('side-bar');
const sideBarCloseButton = document.getElementById('side-bar-close')

const sideBarResize = () => { 
    if (window.innerWidth >= 1024) { 
        sideBar.style.left = '0';
    }
    else { 
        sideBar.style.left = '-100%';
    }
}

hamburger.addEventListener('click', ()=>{
    sideBar.style.left = '0%'
});

sideBarCloseButton.addEventListener('click', () => { 
    sideBar.style.left = '-100%'
});

window.addEventListener('resize' , sideBarResize)
document.addEventListener('DOMContentLoaded' , sideBarResize )