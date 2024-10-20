import {useActiveUser, useAuth} from "../../hooks";
import {ProfileData} from "../../utils/api.ts";
import {useEffect, useState} from "react";
import axiosInstance from "../../services/api-client.ts";
import {toast} from "react-toastify";
import axios from "axios";
import {EditProfile, Profile} from "../../components";
import {Link} from "react-router-dom";
import {PATHS} from "../../utils";

export default function ProfilePage() {
    const [isEditable, setIsEditable] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [profileData, setProfileData] = useState<ProfileData>()
    const {userId} = useActiveUser();
    const {token} = useAuth();

    const updateProfileData = (data: ProfileData) => {
        setProfileData(data)
    }

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                setIsLoading(true)
                const response = await axiosInstance.get(`profiles/user?id=${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                setProfileData(response.data)
            } catch (error) {
                if (axios.isAxiosError(error) && error.response) {
                    toast.error('You need to create a profile');
                } else {
                    toast.error("Account creation failed");
                }
            } finally {
                setIsLoading(false)
            }
        }

        fetchProfileData()
    }, [userId, token]);

    return <div className='flex flex-col gap-10'>

        {!profileData && isLoading && <p>Loading...</p>}

        <h1 className='text-2xl font-semibold'>My profile</h1>
        {!profileData && !isLoading && <div className='flex flex-col justify-center items-center h-[80vh] gap-16'>
            <p className='text-3xl font-semibold'>Profile not found!</p>
            <Link to={PATHS.CREATE_PROFILE} className='btn btn-primary'>Create a profile</Link>
        </div>}

        {!isEditable && profileData && <Profile profileData={profileData}/>}

        {isEditable && <EditProfile profileData={profileData} userId={userId} setIsEditable={setIsEditable}
                                    updateProfileData={updateProfileData}/>}

        {!isEditable && profileData &&
            <button className='btn btn-secondary mt-10' onClick={() => setIsEditable(true)}>Edit Profile</button>}
    </div>

}

