const expandsMore = document.querySelectorAll('[expand-more]');
const burgerMenu = document.querySelector('.burger-menu');
const linesBugerMenu = document.querySelector('.lines-burger')
const overlayMenu = document.querySelector('.overlay-menu');
const menuLinks = document.querySelectorAll('.menu-links');
const goTop = document.querySelector(".goTop");
const scrollDown = document.querySelector(".scrolldown")
const totalHeight = document.body.scrollHeight - window.innerHeight;


// Partie écoute du scroll de la page :

    // f : Écoute le scroll de la fenètre en cours. La variable ProgressHeight permets de transformer la progression du scroll utilisateur en pourcentage.
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


// Partie boutons scoll vers le haut (flèche) :

    // f : Permets de scroller vers le haut de la page au click du bouton ayant la classe 'goTop'.
goTop.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})


// Partie gestion du menu "burger" :

    //f : Permets d'enlerver l'overlay du menu quand l'utilisateur clique sur un lien appartenant à celui-ci      
menuLinks.forEach(links =>{
    links.addEventListener('click', ()=>{
        overlayMenu.classList.remove('open-overlay-menu')
        burgerMenu.classList.remove('cross-burger-menu')
    })
})

    //f : Ajoute ou enlève la classe 'open-overlay-menu' sur le menu overlay en fonction du type de bouléen attribué à la variable menuOpen + ajoute la classe 'cross-burger-menu' sur le menu burger qui le change en croix.
let menuOpen = false;
burgerMenu.addEventListener('click',()=>{
    
    if(!menuOpen) {
        overlayMenu.classList.add('open-overlay-menu');
        burgerMenu.classList.add('cross-burger-menu')
        goTop.style.display="none";
        menuOpen = true;
    }
    else {
        overlayMenu.classList.remove('open-overlay-menu')
        burgerMenu.classList.remove('cross-burger-menu')
        menuOpen = false;
        goTop.style.display="flex";
    }
    
})


// Partie cards  :

    // f : Gère l'ajoue de la classe 'expand-active', qui permet de voir le contenu de chaque cartes par rapport aux datas html. Cette fonction est appelé via une fonction forEach.

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

