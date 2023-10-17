/*
import { createContext } from "react";

export const UserLocationContext = createContext(null);
*/

import React, { createContext, useState } from "react";

const UserLocationContext = createContext({
    location: null,
    setLocation: () => {},
    onChangeLocation: () => {},
});

const UserLocationProvider = ({ children }) => {
    const [location, setLocation] = useState(null);

    return (
        <UserLocationContext.Provider value={{ location, setLocation, onChangeLocation }}>
            {children}
        </UserLocationContext.Provider>
    );
};

export { UserLocationContext, UserLocationProvider };