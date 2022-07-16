
const intro = document.querySelector('.intro').clientHeight;
console.log(intro)


function fixedNav() {
    const nav = document.querySelector('#fixed-nav')

    if(window.scrollY >= intro) {
        nav.classList.add('fixed__nav')
    } else {
        nav.classList.remove('fixed__nav')
    }
}

window.addEventListener('scroll', fixedNav)

const hamburger = document.querySelector('#hamburger');
const overlay = document.querySelector('.overlay');
const navLink = document.querySelectorAll('.nav__link-mobile');
const anchors = document.querySelectorAll('a[href*="#"]');
const btn = document.getElementById('btn');
const modal = document.getElementById('modal');


// btn.addEventListener('click', () => {
//     document.body.style.overflow = 'hidden';
// })

// modal.addEventListener('click', () => {
//     document.body.style.overflow = '';
// })

hamburger.addEventListener('click', () =>{
overlay.classList.toggle('active')
if (overlay.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
    hamburger.classList.add('open')
    } else {
        document.body.style.overflow = '';
        hamburger.classList.remove('open')

    }
})

navLink.forEach(link => {
    link.addEventListener('click', () => {
        document.body.style.overflow = ''
        hamburger.classList.remove('open')
        overlay.classList.remove('active')
    })
})

anchors.forEach(anchor => {
    anchor.addEventListener('click', (event) => {
        event.preventDefault();

        const blockId =anchor.getAttribute('href').substring(1);

        document.getElementById(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})




















// const elem = document.getElementById('overlay');
// console.log(elem);

// const style = document.getComputedStyle(elem, null);
// console.log(style);

// function set() {
//     var sendMess = document.getElementById('overlay');
//     console.log(sendMess);
//     var styleIdSendMess = window.getComputedStyle(sendMess, null).getPropertyValue("display");
//     // var displaySendMess = styleIdSendMess.display;
//     alert(styleIdSendMess);       
// }

// set();
    
    



