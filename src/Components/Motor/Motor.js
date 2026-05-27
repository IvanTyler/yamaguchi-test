
import './Motor.scss';
import {FeatureCard} from "../FeatureCard/FeatureCard.js";

export function Motor() {
    const html = document.createElement('section');
    html.classList.add('motor');
    html.classList.add('slide');

    html.id = "slide-3";

    html.innerHTML = `
        <section class="motor" id="3">
            <div class="G-container">
                <h2 class="motor__title">
                    <span>Для ценителей</span>
                        комфорта <br />и качества 
                    <span>в уходе за волосами</span>
                </h2>
                
                <div class="motor__wrapper-title">
                    <h3 class="motor__sub-title">Бесщеточный мотор BLDC</h3>
                    <picture class="motor__picture">
                        <source class="motor__img" media="(max-width: 750px)" srcset="/assets/img/motor-mobile.png">
                        <img src="" alt="motor" class="motor__img" />
                    </picture>
                </div>
                
                <div class="motor__wrapper-text">
                    <span class="motor__text">Салонная мощность</span>
                </div>
            </div>
        </section>
    `;

    const content = html.querySelector('.G-container');

    content.prepend(FeatureCard(
        'motor',
        'Инновационный <br /> японский мотор')
    )

    return html;
}
