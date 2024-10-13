import { ComponentProps, PropsWithChildren } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import Error from "./Error.tsx";

interface TextAreaProps<T extends FieldValues>
  extends ComponentProps<"textarea">,
    PropsWithChildren {
  label: string;
  name: Path<T>;
  errors?: string;
  register: UseFormRegister<T>;
}

export default function TextArea<T extends FieldValues>({
  label,
  placeholder,
  name,
  errors,
  children,
  register,
  ...props
}: TextAreaProps<T>) {
  return (
    <div className="flex flex-col space-y-1">
      <label className="font-semibold">{label}</label>
      <textarea
        placeholder={placeholder}
        className="textarea textarea-bordered w-full"
        {...register(name)}
        {...props}
      >
        {children}
      </textarea>
      {errors && <Error>{errors}</Error>}
    </div>
  );
}
