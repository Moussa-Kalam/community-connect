import {Navigate, Outlet} from "react-router-dom";
import {PATHS} from "../utils";
import {NavigationBar} from "../components";
import {useAuth} from "../hooks";

export default function PrivateLayout() {
    const {token} = useAuth();

    if (!token) return <Navigate to={PATHS.LOGIN}/>;

    return (
        <div className='grid lg:grid-cols-12 min-h-screen'>
            <header className='border col-span-3'>
                <NavigationBar/>
            </header>
            <section className='border col-span-9'>
                <main>
                    <Outlet/>
                </main>
                <footer>
                    <p>This is the footer</p>
                </footer>
            </section>
        </div>
    );
}
