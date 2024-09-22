import React, { useState } from 'react';
import Product from './product';
import Blogs from './blogs';
import { FaBars } from 'react-icons/fa'; // Import a menu icon
import "../style/pages/_admin.scss";

export default function Admin() {
    const [activeComponent, setActiveComponent] = useState('product');
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const renderComponent = () => {
        switch (activeComponent) {
            case 'product':
                return <Product />;
            case 'blog':
                return <Blogs />;
            default:
                return <Product />;
        }
    };

    return (
        <div className="admin-page">
            {isSidebarVisible && (
                <div className="sidebar">
                    <ul>
                        <li className={activeComponent === 'product' ? 'active' : ''} onClick={() => setActiveComponent('product')}>
                            Product
                        </li>
                        <li className={activeComponent === 'blog' ? 'active' : ''} onClick={() => setActiveComponent('blog')}>
                            Blog
                        </li>
                    </ul>
                </div>
            )}
            <div className="content">
                {/* <button className="toggle-button" onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
                    {isSidebarVisible ? 'Hide Menu' : 'Show Menu'}
                </button> */}
                {/* Menu icon for mobile view */}
                {/* <button className="menu-icon" onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
                    <FaBars />
                </button> */}
                {renderComponent()}
            </div>
        </div>
    );
}
