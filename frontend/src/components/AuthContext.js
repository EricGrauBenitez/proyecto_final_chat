import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const login = () => {
        // Lógica para iniciar sesión aquí
        setIsLoggedIn(true);
    };

    const logout = () => {
        // Lógica para cerrar sesión aquí
        setIsLoggedIn(false);
    };

    const userData = useSelector(state => state.user.userData);

    return (
        <AuthContext.Provider value={{ userData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
