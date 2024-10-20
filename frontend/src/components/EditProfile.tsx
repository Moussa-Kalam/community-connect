import {Input, Select} from "./ui";
import {ActivityCategories} from "../utils";
import {SubmitHandler, useForm} from "react-hook-form";
import {ProfileData} from "../utils/api.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {ProfileSchema} from "../schemas";
import {useEditProfile} from "../hooks/profiles";
import {Dispatch, SetStateAction} from "react";

export default function EditProfile({profileData, userId, setIsEditable, updateProfileData}: {
    profileData?: ProfileData,
    userId: number,
    setIsEditable: Dispatch<SetStateAction<boolean>>
    updateProfileData: (data: ProfileData) => void
}) {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<ProfileData>({resolver: zodResolver(ProfileSchema)});

    const {editProfile, isLoading} = useEditProfile()


    const onSubmit: SubmitHandler<ProfileData> = async (data) => {
        await editProfile(data, userId)
        updateProfileData(data)
        setIsEditable(false);

        reset();
    };

    return <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <Input
            label="Activity Name"
            name="activityName"
            errors={errors.activityName?.message}
            register={register}
            defaultValue={profileData?.activityName}
        />
        <Input
            label="Bio"
            name="bio"
            errors={errors.bio?.message}
            register={register}
            defaultValue={profileData?.bio}
        />
        <Input
            label="Location"
            name="location"
            errors={errors.location?.message}
            register={register}
            defaultValue={profileData?.location}
        />
        <Input
            label="Phone Number"
            name="phoneNumber"
            errors={errors.phoneNumber?.message}
            register={register}
            defaultValue={profileData?.phoneNumber}
        />
        <Select
            label="Activity Category"
            name="activityCategory"
            errors={errors.activityCategory?.message}
            register={register}
            defaultValue={profileData?.activityCategory}
        >
            <option disabled selected value="">
                Select an activity category
            </option>
            {ActivityCategories.map((category) => (
                <option key={category}>{category}</option>
            ))}
        </Select>
        <Input
            label="Website"
            name="website"
            errors={errors.website?.message}
            register={register}
            defaultValue={profileData?.website}
        />

        <div className='flex justify-between mt-6'>
            <button className='btn btn-secondary w-1/3' onClick={() => setIsEditable(false)}>Cancel</button>
            <button className='btn btn-primary w-1/3'>{isLoading ? 'Submitting...' : 'Submit'}</button>
        </div>
    </form>
}