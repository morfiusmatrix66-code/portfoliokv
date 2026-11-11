// Ждем полной загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Логика калькулятора
    const calcBtn = document.querySelector('.btn-secondary');
    if (calcBtn) {
        calcBtn.addEventListener('click', calculate);
    }

    function calculate() {
        const areaInput = document.getElementById('area');
        const typeSelect = document.getElementById('type');
        const totalSpan = document.getElementById('total');

        const area = parseFloat(areaInput.value);
        const price = parseFloat(typeSelect.value);

        if (area && area > 0) {
            const total = area * price;
            totalSpan.innerText = total.toLocaleString('ru-RU');
        } else {
            alert('Пожалуйста, введите корректную площадь квартиры');
        }
    }

    // 2. Плавный скролл для кнопки в Hero-секции
    const heroBtn = document.querySelector('.btn-primary');
    if (heroBtn) {
        heroBtn.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToSection('calculator');
        });
    }

    // 3. Плавный скролл для меню
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Функция плавного скролла с учетом хедера
    function scrollToSection(id) {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    // 4. Обработка формы
    const form = document.querySelector('.form-box');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const btn = this.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = "Отправка...";
            btn.disabled = true;

            setTimeout(() => {
                alert("Спасибо! Заявка успешно отправлена.");
                this.reset();
                btn.innerText = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }
});
// Функция прокрутки наверх при клике на логотип
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}