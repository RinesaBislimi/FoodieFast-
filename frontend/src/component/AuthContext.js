import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem('isLoggedIn') === 'true';
    });
    const [userName, setUserName] = useState(() => {
        return localStorage.getItem('userName') || '';
    });

    useEffect(() => {
        localStorage.setItem('isLoggedIn', isLoggedIn);
        if (isLoggedIn) {
            localStorage.setItem('userName', userName);
        } else {
            localStorage.removeItem('userName');
        }
    }, [isLoggedIn, userName]);

    const login = (username) => {
        setIsLoggedIn(true);
        setUserName(username);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserName('');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userName, login, logout, setUserName }}>
            {children}
        </AuthContext.Provider>
    );
};
