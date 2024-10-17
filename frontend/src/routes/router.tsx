import {createBrowserRouter, Navigate} from "react-router-dom";
import {PATHS} from "../utils";
import {NotFoundPage} from "../pages";
import {LogInPage, SignUpPage} from "../pages/auth";
import PrivateLayout from "./PrivateRoutes.tsx";
import {CreateProfilePage, ManageProfilePage} from "../pages/profile";
import Layout from "./Layout.tsx";

const router = createBrowserRouter([
    {
        path: PATHS.HOME,
        element: <Layout/>,
        errorElement: <NotFoundPage/>,
        children: [
            {index: true, element: <Navigate to={PATHS.LOGIN}/>},
            {path: PATHS.LOGIN, element: <LogInPage/>},
            {path: PATHS.REGISTER, element: <SignUpPage/>},
        ],
    },

    {
        element: <PrivateLayout/>,
        errorElement: <NotFoundPage/>,
        children: [
            {path: PATHS["CREATE-PROFILE"], element: <CreateProfilePage/>},
            {path: PATHS["MANAGE-PROFILE"], element: <ManageProfilePage/>},
        ],
    },
]);

export default router;
