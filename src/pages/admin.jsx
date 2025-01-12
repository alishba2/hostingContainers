import React, { useEffect, useState } from 'react';
import Product from './product';
import Blogs from './blogs';
import { FaBars } from 'react-icons/fa'; // Import a menu icon
import "../style/pages/_admin.scss";
import { Spinner } from 'react-bootstrap'; // Ensure Bootstrap is installed and imported
import { useNavigate } from 'react-router-dom';

export default function Admin() {
    const [activeComponent, setActiveComponent] = useState('product');
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(true); // Add loading state for 30-second delay
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if the user is logged in
    const [password, setPassword] = useState(''); // Track the entered password
    const [error, setError] = useState(''); // Track login error
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); // Stop loading after 30 seconds
        }, 30000); // 30 seconds = 30000 ms

        return () => clearTimeout(timer); // Clear the timer when the component unmounts
    }, []);

    // Render the login form if not logged in
    const handleLogin = () => {
        const hardcodedPassword = "admin123"; // Hardcoded password

        if (password === hardcodedPassword) {
            setIsLoggedIn(true);
            setError(''); // Clear any previous error
        } else {
            setError('Incorrect password. Please try again.');
        }
    };

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

    if (!isLoggedIn) {
        return (
            <div className="login-container">
                <h2>Admin Login</h2>
                <input
                    type="password"
                    placeholder="Enter Admin Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
                {error && <p className="error-message">{error}</p>}
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
