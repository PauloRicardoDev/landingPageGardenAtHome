window.addEventListener('scroll', function() {
    const header = document.getElementById('cover__header');
    const scrollPosition = window.scrollY || window.pageYOffset;

    // Defina a posição de rolagem na qual a cor do header deve mudar
    const changeColorPosition = 100;

    if (scrollPosition >= changeColorPosition) {
        header.classList.add('header__color-change');
    } else {
        header.classList.remove('header__color-change');
    }
});
