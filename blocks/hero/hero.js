function html( content ) {
    return `
        ${content.image.outerHTML}

        <div class="overlay">
            ${content.text.outerHTML}
            <a class="cta button" href="${content.cta.link}" class="cta">${content.cta.label}</a>
        </div>
    `;
}


export default function decorate(block) {
    const content = {
        image: block.querySelector('picture'),
        text: block.querySelector('div:nth-child(2)'),
        cta: { 
            label: block.querySelector('div:nth-child(3)').textContent,
            link: block.querySelector('div:nth-child(4)').textContent,
        }
    }

    block.innerHTML = html(content);
}