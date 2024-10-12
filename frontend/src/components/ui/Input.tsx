import {ComponentProps} from "react";
import {FieldValues, Path, UseFormRegister} from "react-hook-form";
import Error from "./Error.tsx";

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
                                                         name, errors, register,
                                                         ...props
                                                     }: InputProps<T>) {
    return (
        <div className="flex flex-col">
            <label className="font-semibold label">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="input input-bordered w-full"
                {...register(name, {valueAsNumber: type === "number"})}
                {...props}
            />
            {errors && <Error>{errors}</Error>}
        </div>
    );
}
