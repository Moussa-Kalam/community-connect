import {isRouteErrorResponse, Link, useRouteError} from "react-router-dom";
import PATHS from "../utils/paths.ts";

export default function NotFoundPage() {
    const error = useRouteError();
    console.log(error);

    return isRouteErrorResponse(error) ? (
        <div className="flex h-screen flex-col items-center justify-center gap-10">
            <h1 className="text-6xl font-bold">Oops!</h1>
            <h2
                className="text-4xl font-medium text-primary
      "
            >
                {error.status}
            </h2>
            <p className="text-2xl">{error.statusText}!</p>

            <Link
                to={PATHS.HOME}
                className="btn btn-primary"
            >
                Back to Home
            </Link>
        </div>
    ) : (
        <h1 className="text-4xl font-medium text-primary">
            Oops, Something when wrong!
        </h1>
    );
};
