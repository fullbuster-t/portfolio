const flagsElement = document.getElementById('header__flags');
const textsToChange = document.querySelectorAll('[data-section]');
const headerNav = document.querySelector('#header__nav');
const headerOpen = document.querySelector('#header__open');
const headerClose = document.querySelector('#header__close');
const headerLinks = document.querySelectorAll('.header__links a');
const languageButtons = document.querySelectorAll('.header__language');

/** Desplegar y ocultar menu hamburguesa **/
headerOpen.addEventListener("click", () => {
    headerNav.classList.add("visible");
})

headerClose.addEventListener("click", () => {
    headerNav.classList.remove("visible");
})

headerLinks.forEach(link => {
    link.addEventListener('click', () => {
        headerNav.classList.remove("visible");
    });
});

languageButtons.forEach(button => {
    button.addEventListener('click', () => {
        headerNav.classList.remove("visible");
    });
});


/** Cambio de idioma **/
const changeLanguage = async language => {
    const requestJson = await fetch(`./assets/languages/${language}.json`);
    const texts = await requestJson.json();

    for(const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
}

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
})

/** Botón ir arriba **/
window.onscroll = function() {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.go-top-container').classList.add('show');
    }
    else {
        document.querySelector('.go-top-container').classList.remove('show');
    }
}

document.querySelector('.go-top-container').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

