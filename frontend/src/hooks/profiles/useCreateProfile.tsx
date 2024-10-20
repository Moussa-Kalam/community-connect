import {ProfileData} from "../../utils/api.ts";
import axiosInstance from "../../services/api-client.ts";
import {toast} from "react-toastify";
import axios from "axios";
import {useState} from "react";
import useAuth from "../useAuth.ts";

const useCreateProfile = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {token} = useAuth();

    const createProfile = async (data: ProfileData): Promise<void> => {
        try {
            setIsLoading(true);
            await axiosInstance.post("profiles", data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            toast.success("Profile created successfully");
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Profile creation failed");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return {isLoading, createProfile};
}

export default useCreateProfile;