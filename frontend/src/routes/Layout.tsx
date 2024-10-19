import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../hooks";
import {PATHS} from "../utils";

export default function Layout() {
    const {token} = useAuth();

    if (token) return <Navigate to={PATHS.HOME}/>;

    return (
        <main>
            <Outlet/>
        </main>
    );
}
