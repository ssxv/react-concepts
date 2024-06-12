/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [authenicated, setAuthenticated] = useState(false);

    return <AuthContext.Provider value={{ authenicated, setAuthenticated }}>
        <h1>Auth Provider</h1>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;
