import React, { useState } from 'react';
import './style.css';

const Tabs: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const tabs = [1, 2, 3, 4].map(x => ({
        name: `Tab${x}`, header: `Hello from content ${x}`, content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of 
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
        like Aldus PageMaker including versions of Lorem Ipsum.`
    }));
    return <div className='tabs'>
        <nav className="tabs__list">
            {tabs.map(({name}, index) => {
                const activeClass = activeIndex === index ? 'tabs__list__item--active': '';
                return <div key={index.toString()} onClick={() => setActiveIndex(index)} className={`tabs__list__item ${activeClass}`} role="tab" aria-selected={!!activeClass}>{name}</div>;
            })}
        </nav>
        <section className="tabs__content">
            <h1>{tabs[activeIndex].header}</h1>
            <p>{tabs[activeIndex].content}</p>
        </section>
    </div>
}

export default Tabs;