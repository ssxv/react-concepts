import { ReactElement, createContext, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider: React.FC<{ children: ReactElement }> = ({ children }) => {
    const [authenicated, setAuthenticated] = useState<boolean>(false);

    return <AuthContext.Provider value={{ authenicated, setAuthenticated }}>
        <h1>Auth Provider</h1>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;
