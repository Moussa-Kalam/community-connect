import {Navigate, Outlet} from "react-router-dom";
import {PATHS} from "../utils";
import {useAuth} from "../hooks";

export default function Layout() {
    const {token} = useAuth()

    if (token) return <Navigate to={PATHS["CREATE-PROFILE"]}/>;

    return (
        <>
            <header>
                <nav>This is the navigation</nav>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <p>This is the footer</p>
            </footer>
        </>
    );
}
