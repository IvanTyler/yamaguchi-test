import './FeatureCard.scss';

export function FeatureCard(iconName, text) {
    const html = document.createElement('div');
    html.classList.add('feature-card');

    html.innerHTML = `
        <div class="feature-card__wrapper-icon">
            <i class="icon ${iconName}"></i>
        </div>
        
        <span class="feature-card__text">${text}</span>
    `;

    return html

}
