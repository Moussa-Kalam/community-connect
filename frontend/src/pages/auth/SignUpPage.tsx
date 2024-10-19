import {SubmitHandler, useForm} from "react-hook-form";
import {Input, Select, Stepper} from "../../components/ui";
import {AccountTypes, PATHS} from "../../utils";
import {useState} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {SignUpSchema} from "../../schemas";
import {z} from "zod";
import {Link, useNavigate} from "react-router-dom";
import {SignUpData} from "../../utils/api.ts";
import {useAuth} from "../../hooks";

export default function SignUpPage() {
    const {isSignUpLoading: isLoading, signUp} = useAuth();
    const [currentStep, setCurrentStep] = useState(1);

    const navigate = useNavigate();

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
        1: ["firstName", "lastName", "username"],
        2: ["email", "phoneNumber"],
        3: ["accountType"],
        4: ["passwordData.password", "passwordData.confirmPassword"],
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

    const onSubmit: SubmitHandler<SignUpData> = async (data) => {
        // Create a new user
        await signUp(data);

        navigate(PATHS.LOGIN);
        reset();
    };

    return (
        <div className="flex justify-center items-center w-3/4 mx-auto overflow-scroll p-10 h-screen">

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
                                <Input
                                    label="Username"
                                    placeholder="Enter your username"
                                    name="username"
                                    errors={errors.username?.message}
                                    register={register}
                                />
                            </>
                        )}

                        {/* Contact Information */}
                        {currentStep === 2 && (
                            <>
                                {" "}
                                <Input
                                    label="Phone number"
                                    placeholder="Enter your phone number"
                                    name="phoneNumber"
                                    errors={errors.phoneNumber?.message}
                                    register={register}
                                />
                                <Input
                                    label="Email"
                                    placeholder="Enter your email"
                                    type="email"
                                    name="email"
                                    errors={errors.email?.message}
                                    register={register}
                                />
                            </>
                        )}

                        {/* Account Type */}
                        {currentStep === 3 && (
                            <Select
                                label="Account Type"
                                name="accountType"
                                errors={errors.accountType?.message}
                                register={register}
                                defaultValue=""
                            >
                                <option disabled value="">
                                    Choose a type
                                </option>
                                {AccountTypes.map((type) => (
                                    <option key={type}>{type}</option>
                                ))}
                            </Select>
                        )}

                        {/* Account security */}
                        {currentStep === 4 && (
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

                        <div className="flex w-full justify-between mt-10">
                            {currentStep < 4 && (
                                <button
                                    className="btn btn-secondary w-1/3"
                                    type="button"
                                    onClick={handlePreviousStep}
                                    disabled={currentStep <= 1}
                                >
                                    Previous
                                </button>
                            )}
                            {currentStep < 4 && (
                                <button
                                    className="btn btn-primary w-1/3"
                                    type="button"
                                    onClick={handleNextStep}
                                >
                                    Next
                                </button>
                            )}
                        </div>
                        {currentStep < 2 && (
                            <p className="text-gray-500 text-sm mt-6">
                                Already have an account?{" "}
                                <Link
                                    className="hover:underline hover:underline-offset-4 text-secondary"
                                    to={PATHS.LOGIN}
                                >
                                    Log In
                                </Link>
                            </p>
                        )}

                        {currentStep === 4 && (
                            <div className="flex w-full justify-between mt-10">
                                <button
                                    className="btn btn-secondary w-1/3"
                                    type="button"
                                    onClick={handlePreviousStep}
                                    disabled={currentStep <= 1}
                                >
                                    Previous
                                </button>
                                <button className="btn btn-primary w-1/3" type="submit">
                                    {isLoading ? "Creating..." : "Create Account"}
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </section>
        </div>
    );
}
