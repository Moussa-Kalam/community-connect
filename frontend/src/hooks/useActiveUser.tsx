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
    // const [user, setUser] = useState<DecodedToken | null>(null)

    const user = jwtDecode<DecodedToken>(token);

    // useEffect(() => {
    //     if (token) {
    //         try {
    //             const decodedToken = jwtDecode<DecodedToken>(token);
    //             setUser(decodedToken);
    //         } catch (error) {
    //             console.error("Invalid token:", error);
    //             setUser(null)
    //         }
    //     } else {
    //         setUser(null)
    //     }
    // }, [token]);


    return {
        username: user?.username,
        userId: user?.sub,
        userRole: user?.role
    };
}

export default useActiveUser;