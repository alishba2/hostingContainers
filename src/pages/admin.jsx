import React, { useEffect, useState } from 'react';
import Product from './product';
import Blogs from './blogs';
import { FaBars } from 'react-icons/fa'; // Import a menu icon
import "../style/pages/_admin.scss";
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap'; // Ensure Bootstrap is installed and imported
import { useAdmin } from '../Context/appContext';

export default function Admin() {
    const [activeComponent, setActiveComponent] = useState('product');
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(true); // Add loading state for 30-second delay
    const navigate = useNavigate();
    const { isAdmin } = useAdmin(); // Fetch isAdmin from context

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); // Stop loading after 30 seconds
        }, 30000); // 30 seconds = 30000 ms


        console.log(isAdmin, "isAdmin");
        if (isAdmin) {
            setIsLoading(false); // Stop loading immediately if admin status is already available
        }

        return () => clearTimeout(timer); // Clear the timer when the component unmounts
    }, [isAdmin]);

    useEffect(() => {
        if (!isAdmin && !isLoading) {
            // If not admin and loading has completed, redirect to home page
            navigate('/');
        }
    }, [isAdmin, isLoading, navigate]);

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

    // Show loading spinner if isLoading is true
    if (isLoading) {
        return (
            <div className="spinner-container">
                <Spinner animation="border" role="status">
                    {/* <span className="sr-only">Loading...</span> */}
                </Spinner>
            </div>
        );
    }

    return (
        <div className="admin-page">
            {isSidebarVisible && (
                <div className="sidebar">
                    <ul>
                        <li
                            className={activeComponent === 'product' ? 'active' : ''}
                            onClick={() => setActiveComponent('product')}
                        >
                            Product
                        </li>
                        <li
                            className={activeComponent === 'blog' ? 'active' : ''}
                            onClick={() => setActiveComponent('blog')}
                        >
                            Blog
                        </li>
                    </ul>
                </div>
            )}
            <div className="content">
                {renderComponent()}
            </div>
        </div>
    );
}
