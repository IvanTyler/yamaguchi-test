import './MenuNavigation.scss';

export function MenuNavigation() {
    const html = document.createElement('nav');
    html.classList.add('menu-navigation');

    const menuItems = [
        {
            id: 1,
            class: 'fen',
            desc: 'фен-стайлер <br/> 2 в 1',
            active: true
        },
        {
            id: 2,
            class: 'super-light',
            desc: 'суперлёгкий',
            active: false
        },
        {
            id: 3,
            class: 'motor',
            desc: 'Инновационный японский мотор',
            active: false
        },
    ];

    html.innerHTML = `
        <div class="circle">
            <ul class="menu-navigation-list">
                ${menuItems.map((item, index) =>
                    `<li class="menu-navigation-list__item ${item.active ? 'active' : ''}" data-index="${index}" id="${item.id}">
                        <i class="icon ${item.class}"></i>
                        <span class="desc ${item.class}">${item.desc}</span>
                    </li>`).join('')}
            </ul>
        </div>
    `;

    const items = html.querySelectorAll('.menu-navigation-list__item');
    const circle = html.querySelector('.circle');

    let isManualSwitch = false;

    document.addEventListener('scroll', function () {
        if (isManualSwitch) return;

        const slides = document.querySelectorAll('.slide');
        slides.forEach((slide, index) => {
            const offset = index === slides.length - 1 ? -120 : 0;

            if (slide.getBoundingClientRect().top + offset <= 0 && slide.getBoundingClientRect().bottom >= 0) {
                activateItem(index);
            }
        });
    });

    const centerIndex = Math.floor(menuItems.length / 2);
    activateItem(0);

    items.forEach(item => {
        item.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.dataset.index);

            isManualSwitch = true;
            moveToSlide(item.id);
            activateItem(index);

        });
    });

    function activateItem(activeIndex) {
        items.forEach(item => item.classList.remove('active'));
        items[activeIndex].classList.add('active');

        const totalItems = menuItems.length;
        const startAngle = -20;
        const endAngle = 20;
        const angleStep = (endAngle - startAngle) / (totalItems - 1);

        const currentActiveAngle = startAngle + angleStep * activeIndex;
        const targetRotation = 0 - currentActiveAngle;

        circle.style.transform = `rotate(${targetRotation}deg)`;

        items.forEach((item, index) => {
            const elementAngle = startAngle + angleStep * index;
            const compensation = -targetRotation;
            item.style.transform = `translate(15%, -75%) rotate(${elementAngle}deg) translate(303px) rotate(${compensation}deg)`;
        });
    }

    function moveToSlide(id = 2) {
        const slide = document.querySelector(`#slide-${id}`);
        if (slide) {
            const elementPosition = slide.getBoundingClientRect().top + window.scrollY;
            const offset = id === 3 ? -120 : -30;

            window.scrollTo({
                top: elementPosition + offset,
                behavior: 'smooth'
            });

            const onScrollEnd = () => {
                isManualSwitch = false;
                window.removeEventListener('scrollend', onScrollEnd);
            };
            window.addEventListener('scrollend', onScrollEnd, { once: true });

        }
    }



    return html;
}
