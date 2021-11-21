    var body = document.body
    var header = document.querySelector('.header');
    var btn = document.querySelector('.header__button-toggler');
    btn.addEventListener('click', () => {
        header.classList.toggle('header--open');
    });
    body.classList.remove("body--nojs")
    header.classList.remove("header--nojs")