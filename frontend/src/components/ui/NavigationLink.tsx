import {NavLink, NavLinkProps} from "react-router-dom";
import {ReactNode} from "react";

interface NavigationLinkProps extends NavLinkProps {
    text: string;
    children: ReactNode;
}

export default function NavigationLink({
                                           text,
                                           to,
                                           children,
                                           ...props
                                       }: NavigationLinkProps) {
    return (
        <li>
            <NavLink
                to={to}
                className={({isActive}) => `flex items-center gap-5 p-4 text-lg rounded-md ${isActive ? "bg-gray-200" : ""}`}
                {...props}
            >
                <span>{children}</span>
                <span>{text}</span>
            </NavLink>
        </li>
    );
}
