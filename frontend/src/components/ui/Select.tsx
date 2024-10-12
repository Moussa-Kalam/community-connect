import {ComponentProps, PropsWithChildren} from "react";
import {FieldValues, Path, UseFormRegister} from "react-hook-form";
import Error from "./Error.tsx";

interface SelectProps<T extends FieldValues> extends ComponentProps<"select">, PropsWithChildren {
    label: string;
    name: Path<T>;
    errors?: string;
    register: UseFormRegister<T>
}

export default function Select<T extends FieldValues>({
                                                          label,
                                                          name,
                                                          errors,
                                                          register,
                                                          children,
                                                          ...props
                                                      }: SelectProps<T>) {
    return (
        <div className="flex flex-col">
            <label className="font-semibold label">{label}</label>
            <select className="select select-bordered w-full" {...register(name)} {...props}>
                {children}
            </select>
            {errors && <Error>{errors}</Error>}
        </div>
    );
}
