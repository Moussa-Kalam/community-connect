import useAuth from "./useAuth.ts";
import {jwtDecode} from "jwt-decode";
import {AccountType} from "../utils";
import {useEffect, useState} from "react";

interface DecodedToken {
    username: string;
    role: AccountType;
    sub: number;
}

const useActiveUser = () => {
    const {token} = useAuth();
    const [user, setUser] = useState<DecodedToken | null>(null)

    useEffect(() => {
        if (token) {
            try {
                const decodedToken = jwtDecode<DecodedToken>(token);
                setUser(decodedToken);
            } catch (error) {
                console.error("Invalid token:", error);
                setUser(null)
            }
        } else {
            setUser(null)
        }
    }, [token]);


    return {
        username: user?.username,
        userId: user?.sub,
        userRole: user?.role
    };
}

export default useActiveUser;