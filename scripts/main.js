import { themeSwitcher } from '../vendor/theme-switcher/theme-switcher.js'
new themeSwitcher()

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.main-menu ul');

menuBtn.addEventListener('click', function() {
    this.classList.toggle('active')
    menu.classList.toggle('active')
})

// document.body.hidden = true // test
