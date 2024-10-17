import {useLocalStorage} from "usehooks-ts";
import {jwtDecode, JwtPayload} from "jwt-decode";
import {useState} from "react";
import {toast} from "react-toastify";
import axiosInstance from "../services/api-client.ts";
import {LoginData, SignUpData} from "../utils/api.ts";
import axios from "axios";


const useAuth = () => {
    const [token, setToken, removeToken] = useLocalStorage('token', '')
    const [user, setUser] = useState<JwtPayload | null>(null)
    const [isSignUpLoading, setIsSignUpLoading] = useState(false)
    const [isLoginLoading, setIsLoginLoading] = useState(false)

    const signUp = async (data: SignUpData): Promise<void> => {
        try {
            setIsSignUpLoading(true)
            await axiosInstance.post('authentication/sign-up', {
                firstName: data.firstName,
                lastName: data.lastName,
                username: data.username,
                email: data.email,
                phoneNumber: data.phoneNumber,
                password: data.passwordData.password,
                accountType: data.accountType
            })

            toast.success('Account created successfully')
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Account creation failed');
            }
        } finally {
            setIsSignUpLoading(false)
        }
    }


    const login = async (data: LoginData): Promise<void> => {
        try {
            setIsLoginLoading(true)
            const response = await axiosInstance.post('authentication/sign-in', {
                ...data
            });

            const accessToken: string = response.data.accessToken;

            // Store the JWT in localstorage
            setToken(accessToken);

            // Decode token to extract user info
            const decodedUser: JwtPayload = jwtDecode(accessToken)
            setUser(decodedUser)

        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Login failed');
            }
        } finally {
            setIsLoginLoading(false)
        }
    }

    const logout = () => {
        removeToken()
        setUser(null)
    }

    return {token, user, isLoginLoading, isSignUpLoading, login, signUp, logout}
}


export default useAuth;
