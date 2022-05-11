import React from 'react';
import './style.css';

const Tabs: React.FC = () => {
    return <div className='tabs'>
        <nav className="tabs__list">
            <div data-tab="0" className="tabs__list__item tabs__list__item--active" role="tab" aria-selected="true">
                Tab1
            </div>
            <div data-tab="1" className="tabs__list__item " role="tab" aria-selected="false">
                Tab2
            </div>
            <div data-tab="2" className="tabs__list__item " role="tab" aria-selected="false">
                Tab3
            </div>
            <div data-tab="3" className="tabs__list__item " role="tab" aria-selected="false">
                Tab4
            </div>
        </nav>
        <section className="tabs__content">
            <h1>Hello from content 1</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software
                like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </section>
    </div>
}

export default Tabs;