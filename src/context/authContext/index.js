

import { createContext, useEffect, useState } from "react";

import data from '../../data/db.json'
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
    let users = data.users;

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = (inputs) => {
        const user = users.find(
            (u) => u.username === inputs.username && u.password === inputs.password
        );
        if (user) {
            document.cookie = "access_token=valid_token";
            setCurrentUser(user);
            return {
                status: 200,
                message: "Correct user!"
            }
        } else {
            return {
                status: 404,
                message: "Not found!"
            };
        }
    };

    const logout = () => {
        var now = new Date();
        now.setMonth(now.getMonth() - 1);
        document.cookie = `access_token=;expires=${now.toUTCString()};Secure;`;
        setCurrentUser(null);
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
