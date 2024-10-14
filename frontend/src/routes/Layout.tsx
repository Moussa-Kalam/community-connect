import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <nav>This is the navigation</nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>This is the footer</p>
      </footer>
    </>
  );
}
