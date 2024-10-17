import useAuth from "./useAuth.ts";
import {jwtDecode} from "jwt-decode";
import {AccountType} from "../utils";

interface DecodedToken {
    username: string;
    role: AccountType;
    sub: number;
}

const useActiveUser = () => {
    const {token} = useAuth();
    const {username, role, sub: userId} = jwtDecode<DecodedToken>(token);

    return {username, role, userId};
}

export default useActiveUser;