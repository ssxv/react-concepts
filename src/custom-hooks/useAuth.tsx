/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { AuthContext } from "./Auth";

const useAuth = (): any => {
    const authContext = useContext(AuthContext);
    if (!authContext) {
        throw new Error('AuthContext not set');
    }
    return authContext;
}

export default useAuth;
