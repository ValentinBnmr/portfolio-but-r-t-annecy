const expandsMore = document.querySelectorAll('[expand-more]');
const burgerMenu = document.querySelector('.burger-menu');
const linesBugerMenu = document.querySelector('.lines-burger')
const overlayMenu = document.querySelector('.overlay-menu');
const menuLinks = document.querySelectorAll('.menu-links');
const goTop = document.querySelector(".goTop");
const scrollDown = document.querySelector(".scrolldown")
const totalHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener("scroll", ()=>{

    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    if(progressHeight > 0.5) {
    burgerMenu.classList.add('burger-bg-active');
    goTop.style.display="flex";
    }
    else {
        burgerMenu.classList.remove('burger-bg-active')
        goTop.style.display="none";
    }
    
})

goTop.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})
// Partie gestion du menu "burger"
menuLinks.forEach(links =>{
    links.addEventListener('click', ()=>{
        overlayMenu.classList.remove('open-overlay-menu')
        burgerMenu.classList.remove('cross-burger-menu')
    })
})

let menuOpen = false;
burgerMenu.addEventListener('click',()=>{
    if(!menuOpen) {
        overlayMenu.classList.add('open-overlay-menu');
        burgerMenu.classList.add('cross-burger-menu')
        menuOpen = true;
    }
    else {
        overlayMenu.classList.remove('open-overlay-menu')
        burgerMenu.classList.remove('cross-burger-menu')
        menuOpen = false;
    }
    
})



function newFunction() {
    console.log("Scroll");
}

// Partie cads (voir plus/voir moins)

function expand(){
    const showContent = document.getElementById(this.dataset.target);

    if(showContent.classList.contains('expand-active')) {
        this.innerHTML = this.dataset.showtext;

    } else {
        this.innerHTML = this.dataset.hidetext;
        
    }
    showContent.classList.toggle('expand-active');

}

expandsMore.forEach(more => {
    more.addEventListener('click', expand)
})

