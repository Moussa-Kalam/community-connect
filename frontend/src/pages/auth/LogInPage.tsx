import { Input } from "../../components/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../../schemas";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "../../utils";

export default function LogInPage() {
  type LoginData = z.infer<typeof LoginSchema>;

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginData>({ resolver: zodResolver(LoginSchema) });

  const onSubmit: SubmitHandler<LoginData> = (data) => {
    console.log(data);
    navigate(PATHS["CREATE-PROFILE"]);
    reset();
  };

  return (
    <div className="flex justify-center items-center w-3/5 mx-auto overflow-scroll p-10 h-screen">
      <section className="flex flex-col gap-10 py-16 px-10 justify-center shadow-lg bg-white rounded">
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold mb-4">
            Log in into your account
          </h1>
          <p className="text-gray-600 mb-4">
            Fill in the form to access your account
          </p>
        </div>

        <div className="flex flex-col space-y-10">
          <form
            className="flex flex-col space-y-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              label="Username"
              name="username"
              errors={errors.username?.message}
              register={register}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              errors={errors.password?.message}
              register={register}
            />
            <div className="space-y-3">
              <button className="btn btn-primary w-full" type="submit">
                Log In
              </button>
              <p className="text-gray-500 text-sm">
                Don't have an account?{" "}
                <Link
                  className="hover:underline hover:underline-offset-4 text-secondary"
                  to={PATHS.REGISTER}
                >
                  Create one
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
