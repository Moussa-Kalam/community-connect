import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import axiosInstance from "../services/api-client.ts";
import { ProfileData } from "../utils/api.ts";
import useAuth from "./useAuth.ts";

const useProfile = () => {
  const [isCreatingProfile, setIsCreatingProfile] = useState(false);
  const { token } = useAuth();

  const createProfile = async (data: ProfileData): Promise<void> => {
    console.log(data);
    try {
      setIsCreatingProfile(true);
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
      setIsCreatingProfile(false);
    }
  };

  return { isCreatingProfile, createProfile };
};

export default useProfile;
