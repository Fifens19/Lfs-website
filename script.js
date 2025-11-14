
function changeTheme(themeName) {
    document.body.className = '';
    document.body.classList.add(themeName);
}

function navigateWithTheme(event, themeName) {
    event.preventDefault();
    changeTheme(themeName);
    setTimeout(() => {
        window.location.href = event.target.href;
    }, 5000);
}

// ВСЯ логика ниже должна быть внутри DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // 1. Навигационные табы
    const currentPage = window.location.pathname.split('/').pop();
    
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
        if (tab.getAttribute('href') === currentPage) {
            tab.classList.add('active');
        }
    });
    
    const navTabsLS = document.querySelectorAll('.nav-tabls');
    navTabsLS.forEach(tab => {
        if (tab.getAttribute('href') === currentPage) {
            tab.classList.add(tab.classList.contains('nav-tabls') ? 'active' : 'active');
        }
    });

    // 2. Секретная кнопка (если есть на странице)
    const secretText = document.getElementById('secret-text');
    const testButton = document.getElementById('test-button');
    
    if (testButton && secretText) { // Проверка на существование!
        testButton.addEventListener('click', function() {
            secretText.classList.add('revealed');
            testButton.style.display = 'none';
        });
    }

    // 3. СЛАЙДЕР (самая проблемная часть)
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    
    if (slides.length > 0) {
        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            currentSlide = (n + slides.length) % slides.length;
            if (slides[currentSlide]) {
                slides[currentSlide].classList.add('active');
            }
        }

        function changeSlide(n) {
            showSlide(currentSlide + n);
        }

        // Вешаем обработчики на кнопки
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('next-btn')) {
                changeSlide(1);
            }
            if (e.target.classList.contains('prev-btn')) {
                changeSlide(-1);
            }
        });

        showSlide(0);
        setInterval(() => changeSlide(1), 5000);
    }
});