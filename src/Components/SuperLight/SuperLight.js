

import './SuperLight.scss';
import {FeatureCard} from "../FeatureCard/FeatureCard.js";

export function SuperLight() {
    const html = document.createElement('section');
    html.classList.add('super-light');
    html.classList.add('slide');

    html.id = "slide-2";

    html.innerHTML = `
        <div class="G-container">
            <img src="/assets/img/gradient-3.png" alt="gradient-3" class="super-light__gradient" />
            <div class="content">
                <div class="content__wrapper-text">
                    <span class="content__text">Не тяжелее чашки кофе</span>
                </div>
                
                <picture class="content__picture">
                    <source class="content__super-light" media="(max-width: 340px)" srcset="/assets/img/super-light-mobile2.png">
                    <source class="content__super-light" media="(max-width: 750px)" srcset="/assets/img/super-light-mobile.png">
                    <img src="/assets/img/super-light.png" alt="super-light" class="content__super-light" />
                </picture>
                
                <h2 class="content__title">супер-лёгкий</h2>
                <h2 class="content__title-mob">суперлёгкий</h2>

                <p class="content__description">
                    Уменьшает усталость рук <br />  при сушке волос, 
                    делая процедуру <br /> удобной и приятной даже после
                    <br /> напряжённого рабочего дня.
                </p>
                
                <div class="content__weight">
                    500 г
                </div>
            </div>
        </div>
    `;

    const content = html.querySelector('.content');

    content.append(FeatureCard(
        'super-light',
        'лёгкость <br /> и комфорт <br /> в руке')
    )

    return html
}
