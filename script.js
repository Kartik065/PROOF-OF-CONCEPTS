const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar')[0]

toggleButton.addEventListener('click', () => {

    navbarLinks.style.backgroundColor = 'green';
    navbarLinks.classList.toggle('active')
})