import React, { createContext, useState, useEffect, useContext } from 'react';

const AdminContext = createContext();

// Create a provider component
export const AdminProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Loading state to track fetching

    const checkIfAdmin = async (value) => {
        setIsAdmin(value);
    }



    return (
        <AdminContext.Provider value={{ isAdmin, checkIfAdmin, isLoading }}>
            {children}
        </AdminContext.Provider>
    );
};

// Custom hook to use the admin context
export const useAdmin = () => {
    return useContext(AdminContext);
};
