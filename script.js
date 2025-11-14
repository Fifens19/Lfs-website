
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
    console.log('=== ДИАГНОСТИКА ===');
    
    // Проверяем, какие элементы нашёл скрипт
    console.log('Найдено элементов .nav-tab:', document.querySelectorAll('.nav-tab').length);
    console.log('Найдено элементов .nav-tabls:', document.querySelectorAll('.nav-tabls').length);
    console.log('Найдено элементов .slide:', document.querySelectorAll('.slide').length);
    
    // Текущая страница
    console.log('Текущая страница:', window.location.pathname.split('/').pop());
   
  
   
    const currentPage = window.location.pathname.split('/').pop();
    
    document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    console.log('🔍 ТЕКУЩАЯ СТРАНИЦА:', currentPage);
    
    const allTabs = document.querySelectorAll('.nav-tab, .nav-tabls');
    console.log('📋 ВСЕГО ТАБОВ:', allTabs.length);
    
    allTabs.forEach((tab, index) => {
        const tabHref = tab.getAttribute('href');
        console.log(`Таб ${index}:`, {
            href: tabHref,
            classes: tab.classList.value,
            matches: tabHref === currentPage
        });
        
        if (tabHref === currentPage) {
            console.log('🎯 ДОБАВЛЯЕМ КЛАСС!');
            if (tab.classList.contains('nav-tabls')) {
                tab.classList.add('actives');
            } else {
                tab.classList.add('active');
            }
        }
    });
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