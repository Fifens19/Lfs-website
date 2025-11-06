function changeTheme(themeName) {
    document.body.className = '';
    document.body.classList.add(themeName);
}
function navigateWithTheme(event, themeName) {
    event.preventDefault(); // Блокируем стандартный переход по ссылке
    changeTheme(themeName); // Запускаем смену темы
    
    // Ждём окончания анимации (0.7s) и тогда переходим
    setTimeout(() => {
        window.location.href = event.target.href;
    }, 5000);
}

// Автоматически выделяет текущую страницу в навигации
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navTabs = document.querySelectorAll('.nav-tab');
    
    navTabs.forEach(tab => {
        if (tab.getAttribute('href') === currentPage) {
            tab.classList.add('active');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navTabs = document.querySelectorAll('.nav-tabls');
    
    navTabs.forEach(tab => {
        if (tab.getAttribute('href') === currentPage) {
            tab.classList.add('active');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navTabs = document.querySelectorAll('.nav-tabls');
    
    navTabs.forEach(tab => {
        if (tab.getAttribute('href') === currentPage) {
            tab.classList.add('actives');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const secretText = document.getElementById('secret-text');
    const testButton = document.getElementById('test-button');
    
    // Временная функция для теста
    testButton.addEventListener('click', function() {
        secretText.classList.add('revealed');
        testButton.style.display = 'none'; // Прячем кнопку после нажатия
    });

    // Вот сюда потом добавишь код для отслеживания конца видео
    // (нужно использовать YouTube Iframe API)
});
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

// Автопереключение каждые 5 секунд (опционально)
setInterval(() => changeSlide(1), 5000);