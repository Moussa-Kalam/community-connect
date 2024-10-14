import {SubmitHandler, useForm} from "react-hook-form";
import {Input, Select, Stepper, TextArea} from "../../components/ui";
import {AccountTypes, PATHS} from "../../utils";
import {useState} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {SignUpSchema} from "../../schemas";
import {z} from "zod";
import {Link, useNavigate} from "react-router-dom";

export default function SignUpPage() {
    const [currentStep, setCurrentStep] = useState(1);

    const navigate = useNavigate()

    type SignUpData = z.infer<typeof SignUpSchema>;

    const {
        register,
        handleSubmit,
        trigger,
        reset,
        clearErrors,
        formState: {errors},
    } = useForm<SignUpData>({resolver: zodResolver(SignUpSchema)});

    type PasswordData = z.infer<typeof SignUpSchema.shape.passwordData>;

    const stepFields: Record<
        number,
        Array<keyof SignUpData | `passwordData.${keyof PasswordData}`>
    > = {
        1: ["firstName", "lastName"],
        2: ["username", "phoneNumber"],
        3: ["email", "location"],
        4: ["accountType"],
        5: ["passwordData.password", "passwordData.confirmPassword"],
        6: ["bio"],
    };

    const handleNextStep = async () => {
        const valid = await trigger(stepFields[currentStep]);

        if (valid) {
            clearErrors(stepFields[currentStep]);
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handlePreviousStep = () => {
        setCurrentStep((prev) => prev - 1);
    };

    const onSubmit: SubmitHandler<SignUpData> = (data) => {
        console.log(data);
        navigate(PATHS.LOGIN)
        reset();

    };

    return (
        <div className="flex justify-center items-center w-3/5 mx-auto overflow-scroll p-10 h-screen">
            <section className="flex flex-col gap-10  py-16 px-10 justify-center shadow-lg bg-white rounded">
                <div className="space-y-3">
                    <h1 className="text-4xl font-semibold mb-4">Create an account</h1>
                    <p className="text-gray-600 mb-4">
                        Fill in the form to create an account
                    </p>
                </div>

                <div className="flex flex-col space-y-10">
                    <Stepper step={currentStep}/>
                    <form
                        className="flex flex-col gap-2"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        {/* Personal Information */}
                        {currentStep === 1 && (
                            <>
                                <Input
                                    label="First Name"
                                    placeholder="Enter your first name"
                                    name="firstName"
                                    errors={errors.firstName?.message}
                                    register={register}
                                />
                                <Input
                                    label="Last Name"
                                    placeholder="Enter your last name"
                                    name="lastName"
                                    errors={errors.lastName?.message}
                                    register={register}
                                />
                            </>
                        )}

                        {/* Account Details */}
                        {currentStep === 2 && (
                            <>
                                {" "}
                                <Input
                                    label="Username"
                                    placeholder="Enter your username"
                                    name="username"
                                    errors={errors.username?.message}
                                    register={register}
                                />
                                <Input
                                    label="Phone number"
                                    placeholder="Enter your phone number"
                                    name="phoneNumber"
                                    errors={errors.phoneNumber?.message}
                                    register={register}
                                />
                            </>
                        )}

                        {/* Contact Information */}
                        {currentStep === 3 && (
                            <>
                                {" "}
                                <Input
                                    label="Email"
                                    placeholder="Enter your email"
                                    type="email"
                                    name="email"
                                    errors={errors.email?.message}
                                    register={register}
                                />
                                <Input
                                    label="Location"
                                    placeholder="Enter your location"
                                    name="location"
                                    errors={errors.location?.message}
                                    register={register}
                                />
                            </>
                        )}

                        {/* Account Type */}
                        {currentStep === 4 && (
                            <Select
                                label="Account Type"
                                name="accountType"
                                register={register}
                            >
                                <option disabled selected>
                                    Choose a type
                                </option>
                                {AccountTypes.map((type) => (
                                    <option key={type}>{type}</option>
                                ))}
                            </Select>
                        )}

                        {/* Account security */}
                        {currentStep === 5 && (
                            <>
                                <Input
                                    label="Password"
                                    type="password"
                                    placeholder="Enter your password"
                                    name={"passwordData.password"}
                                    errors={errors.passwordData?.password?.message}
                                    register={register}
                                />
                                <Input
                                    label="Confirm Password"
                                    type="password"
                                    placeholder="Confirm your password"
                                    name={"passwordData.confirmPassword"}
                                    errors={errors.passwordData?.confirmPassword?.message}
                                    register={register}
                                />
                            </>
                        )}

                        {/* Bio */}
                        {currentStep === 6 && (
                            <TextArea
                                label="Bio"
                                placeholder="Tell us about yourself"
                                name="bio"
                                errors={errors.bio?.message}
                                register={register}
                            />
                        )}

                        <div className="flex w-full justify-between mt-10">
                            {currentStep < 6 && (
                                <button
                                    className="btn btn-secondary w-1/3"
                                    type="button"
                                    onClick={handlePreviousStep}
                                    disabled={currentStep <= 1}
                                >
                                    Previous
                                </button>
                            )}
                            {currentStep < 6 && (
                                <button
                                    className="btn btn-primary w-1/3"
                                    type="button"
                                    onClick={handleNextStep}
                                >
                                    Next
                                </button>
                            )}
                        </div>
                        <p className='text-gray-500 text-sm mt-6'>Already have an account? <Link
                            className='hover:underline hover:underline-offset-4 text-secondary'
                            to={PATHS.LOGIN}>Log
                            In</Link></p>

                        {currentStep === 6 && (
                            <button className="btn btn-primary w-full" type="submit">
                                Create your account
                            </button>
                        )}
                    </form>
                </div>
            </section>
        </div>
    );
}
