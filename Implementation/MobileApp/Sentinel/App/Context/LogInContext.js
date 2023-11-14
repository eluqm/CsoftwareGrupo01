import React, { createContext, useContext, useState } from 'react';

const LogInContext = createContext();

const LogInProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [profile, setProfile] = useState(null);

    return (
        <LogInContext.Provider
            value = {{ isLoggedIn, setIsLoggedIn, profile, setProfile }}
        >
            {children}
        </LogInContext.Provider>
    );
};

export const useLogIn = () => useContext(LogInContext);

export default LogInProvider;