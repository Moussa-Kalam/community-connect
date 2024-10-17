import {Link} from "react-router-dom";
import {PATHS} from "../../utils";

export default function NavLink() {
    return <Link to={PATHS["CREATE-PROFILE"]}>Profile</Link>
}