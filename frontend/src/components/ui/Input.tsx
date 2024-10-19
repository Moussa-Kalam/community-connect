import {ComponentProps, useState} from "react";
import {FieldValues, Path, UseFormRegister} from "react-hook-form";
import Error from "./Error.tsx";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";

interface InputProps<T extends FieldValues> extends ComponentProps<"input"> {
    label: string;
    name: Path<T>;
    register: UseFormRegister<T>;
    errors?: string;
}

export default function Input<T extends FieldValues>({
                                                         label,
                                                         type = "text",
                                                         placeholder,
                                                         name,
                                                         errors,
                                                         register,
                                                         ...props
                                                     }: InputProps<T>) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    return (
        <div className="flex flex-col">
            <label className="font-semibold label">{label}</label>
            <div className='flex items-center relative'>
                <input
                    type={type === 'password' ? (isPasswordVisible ? "text" : "password") : type}
                    placeholder={placeholder}
                    className="input input-bordered w-full pr-12"
                    {...register(name, {valueAsNumber: type === "number"})}
                    {...props}
                />
                {type === 'password' && <div className="absolute right-3 text-gray-500 hover:cursor-pointer">
                    {isPasswordVisible ? <FaRegEyeSlash onClick={() => {
                            setIsPasswordVisible(false)
                        }}/> :
                        <FaRegEye onClick={() => setIsPasswordVisible(true)}/>}
                </div>}
            </div>
            {errors && <Error>{errors}</Error>}
        </div>
    );
}
