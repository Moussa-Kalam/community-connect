import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "../utils";
import { NavigationBar } from "../components";
import { useAuth } from "../hooks";

export default function PrivateLayout() {
  const { token } = useAuth();

  if (!token) return <Navigate to={PATHS.LOGIN} />;

  return (
    <div className="grid md:grid-cols-8 min-h-screen">
      <header className="border md:col-span-2 hidden md:block">
        <NavigationBar />
      </header>
      <section className="border col-span-6">
        <main className="px-16 py-10">
          <Outlet />
        </main>
        {/*<footer>*/}
        {/*  <p>This is the footer</p>*/}
        {/*</footer>*/}
      </section>
    </div>
  );
}
