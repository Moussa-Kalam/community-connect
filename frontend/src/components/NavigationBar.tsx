import {NavigationLink} from "./ui";
import {PATHS} from "../utils";
import {IoHome} from "react-icons/io5";
import {BsFillPersonFill} from "react-icons/bs";
import {MdOutlineWork} from "react-icons/md";
import {FaFileCirclePlus} from "react-icons/fa6";
import {useActiveUser, useAuth} from "../hooks";

const links = [
    {to: PATHS.HOME, text: "Home", icon: <IoHome/>},
    {to: PATHS.SERVICES, text: "Services", icon: <MdOutlineWork/>},
    {
        to: PATHS.BOOKINGS,
        text: "Bookings",
        icon: <FaFileCirclePlus/>,
    },
];

export default function NavigationBar() {
    const {logout} = useAuth();
    const {userRole} = useActiveUser();
    return (
        <nav className="flex flex-col h-screen py-10 px-4">
            <ul className="space-y-3">
                {links.map((link) => (
                    <NavigationLink key={link.text} text={link.text} to={link.to}>
                        {link.icon}
                    </NavigationLink>
                ))}
                {userRole !== "Consumer" && (
                    <NavigationLink text="Profile" to={PATHS.PROFILE}>
                        <BsFillPersonFill/>
                    </NavigationLink>
                )}
            </ul>
            <button className="btn bg-red-500 text-white mt-auto" onClick={logout}>
                Logout
            </button>
        </nav>
    );
}
