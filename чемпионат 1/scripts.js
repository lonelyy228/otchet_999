document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-theme'); // Переключаем класс в body
    document.body.classList.toggle('dark-theme'); // Переключаем класс в body
    // Также переключаем класс для заголовка и подвала, если требуется
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    header.classList.toggle('light-theme');
    footer.classList.toggle('light-theme');
});
