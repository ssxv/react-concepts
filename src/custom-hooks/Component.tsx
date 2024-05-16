/* eslint-disable @typescript-eslint/no-explicit-any */
import useHover from "./useHover";
import useAuth from "./useAuth";

const AuthUserComponent = () => {

    const { authenicated, setAuthenticated } = useAuth();
    const [ref, isHovering] = useHover();

    const toggleAuthentication = () => {
        setAuthenticated((prev: boolean) => !prev);
    }

    return <div ref={ref}>
        <h4>Component uses useAuth</h4>
        <h4>{isHovering ? 'Hovering' : 'Component using useHover'}</h4>

        <button type="button" onClick={() => toggleAuthentication()}>
            {authenicated ? 'Unauthenticate' : 'Authenticate'}
        </button>
    </div>
}

export default AuthUserComponent;
