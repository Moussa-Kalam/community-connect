import { NavLink, NavLinkProps } from "react-router-dom";
import { ReactNode } from "react";

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
        className="flex items-center gap-5 p-4 text-lg"
        {...props}
      >
        <span>{children}</span>
        <span>{text}</span>
      </NavLink>
    </li>
  );
}
