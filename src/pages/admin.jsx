import React, { useState } from 'react';
import Product from './product';
import "../style/pages/_admin.scss";

export default function Admin() {
    const [activeComponent, setActiveComponent] = useState('product');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'product':
                return <Product />;
            default:
                return <Product />; // default is product
        }
    }

    return (
        <div className="admin-page">
            <div className="sidebar">
                <ul>
                    <li className={activeComponent === 'product' ? 'active' : ''} onClick={() => setActiveComponent('product')}>Product</li>
                    {/* Add more items for other sections if needed */}
                </ul>
            </div>
            <div className="content">
                {renderComponent()}
            </div>
        </div>
    );
}
