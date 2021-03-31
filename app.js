const expandsMore = document.querySelectorAll('[expand-more]');
const burgerMenu = document.querySelector('.burger-menu');
const linesBugerMenu = document.querySelector('.lines-burger')
const overlayMenu = document.querySelector('.overlay-menu');
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