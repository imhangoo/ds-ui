class App {
    constructor(root, state) {
        this.root = root;
        this.state = state;
        this.wrapper = null;
        this.listeners = [
            {
                type: 'click',
                handler: this.onClick.bind(this),
            }
        ];
    }

    onClick(event) {
        // Event Delegation
        if (event.target.dataset.tab == null) return;
        const index = +event.target.dataset.tab;
        this.state = {
            ...this.state,
            activeIndex: index,
        };
        this.render();
    }

    render() {
        // destroy old
        if (this.wrapper) {
            for (const {type, handler} of this.listeners) {
                this.wrapper.removeEventListener(type, handler);
            }
            this.wrapper.remove();
        }

        // create new parent element
        this.wrapper = document.createElement('div');

        // add event listeners to parent, event delegation
        for (const {type, handler} of this.listeners) {
            this.wrapper.addEventListener(type, handler);
        }

        // build inner html
        this.wrapper.innerHTML = this.toHTML(this.state);
        
        // append to root
        this.root.appendChild(this.wrapper);
    }

    toHTML({tabs, activeIndex}) {
        const tabElements = tabs.map(({name}, index) => {
            const active = activeIndex === index ? 'tabs__list__item--active': '';
            return `<div data-tab="${index}"
                class="tabs__list__item ${active}"
                role="tab"
                aria-selected="${!!active}">
                ${name}
            </div>`;
        }).join('');

        return `
            <div class="tabs__list">
                ${ tabElements }
            </div>
            <div class="tabs__content">
                ${ tabs[activeIndex].content }
            </div>
        `;
    }
}

const content = (i) => `
<section>
    <h1>Hello from content ${i}</h1>
    <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of 
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
        like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
</section>
`;

const tabs = [1, 2, 3, 4].map(x => ({
    name: `Tab${x}`, content: content(x)
}));

const state = {
    tabs: tabs,
    activeIndex: 0,
}

const component = new App(document.getElementById('root'), state);
component.render();