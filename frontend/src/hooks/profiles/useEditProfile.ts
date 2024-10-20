import {ProfileData} from "../../utils/api.ts";
import axiosInstance from "../../services/api-client.ts";
import {toast} from "react-toastify";
import axios from "axios";
import useAuth from "../useAuth.ts";
import {useState} from "react";

const useEditProfile = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {token} = useAuth();

    const editProfile = async (data: ProfileData, userId: number): Promise<void> => {
        try {
            setIsLoading(true);

            console.log("Data updated", data)
            await axiosInstance.patch(`profiles/user?id=${userId}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            toast.success("Profile updated successfully");
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Profile update failed");
                console.error(error)
            }
        } finally {
            setIsLoading(false);
        }
    };


    return {
        isLoading,
        editProfile,
    }

}

export default useEditProfile