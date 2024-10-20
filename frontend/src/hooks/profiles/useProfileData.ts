import axiosInstance from "../../services/api-client.ts";
import axios from "axios";
import {toast} from "react-toastify";
import {useState} from "react";
import useAuth from "../useAuth.ts";

const useProfileData = <T>() => {
    const [isLoading, setIsLoading] = useState(false)
    const {token} = useAuth()

    const getProfileData = async (userId: number) => {
        try {
            setIsLoading(true);
            const response = await axiosInstance.get<T>(`profiles/user?id=${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return response.data
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Failed to get profile data");
            }
        } finally {
            setIsLoading(false);
        }
    }

    return {isLoading, getProfileData};
}

export default useProfileData;