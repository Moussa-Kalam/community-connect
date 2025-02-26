import {Input, Select} from "../../components/ui";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {ProfileSchema} from "../../schemas";
import {ProfileData} from "../../utils/api.ts";
import {ActivityCategories, PATHS} from "../../utils";
import {useActiveUser} from "../../hooks";
import {useNavigate} from "react-router-dom";
import {useCreateProfile} from "../../hooks/profiles";

export default function CreateProfilePage() {
    const {isLoading, createProfile} = useCreateProfile();
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<ProfileData>({resolver: zodResolver(ProfileSchema)});

    const navigate = useNavigate();

    const {userId} = useActiveUser();
    console.log(userId);

    const onSubmit: SubmitHandler<ProfileData> = async (data) => {
        await createProfile(data);

        navigate(PATHS.PROFILE)
        reset();
    };

    return (
        <div>
            <h1>My profile</h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label="Activity Name"
                    name="activityName"
                    errors={errors.activityName?.message}
                    register={register}
                />
                <Input
                    label="Bio"
                    name="bio"
                    errors={errors.bio?.message}
                    register={register}
                />
                <Input
                    label="Location"
                    name="location"
                    errors={errors.location?.message}
                    register={register}
                />
                <Input
                    label="Phone Number"
                    name="phoneNumber"
                    errors={errors.phoneNumber?.message}
                    register={register}
                />
                <Select
                    label="Activity Category"
                    name="activityCategory"
                    errors={errors.activityCategory?.message}
                    register={register}
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
                />
                <button className="btn btn-primary mt-6">
                    {isLoading ? "Creating..." : "Create Profile"}
                </button>
            </form>
        </div>
    );
}
