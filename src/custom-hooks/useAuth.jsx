import { useContext } from "react";
import { AuthContext } from "./Auth";

const useAuth = () => {
    const authContext = useContext(AuthContext);
    if (!authContext) {
        throw new Error('AuthContext not set');
    }
    return authContext;
}

export default useAuth;
