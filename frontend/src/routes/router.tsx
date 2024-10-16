import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "../utils";
import { NotFoundPage } from "../pages";
import { LogInPage, SignUpPage } from "../pages/auth";
import Layout from "./Layout.tsx";
import PrivateLayout from "./PrivateRoutes.tsx";
import { CreateProfilePage, ManageProfilePage } from "../pages/profile";

const router = createBrowserRouter([
  { path: PATHS.LOGIN, element: <LogInPage /> },
  { path: PATHS.REGISTER, element: <SignUpPage /> },

  {
    path: PATHS.HOME,
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      // {index: true, element: <HomePage/>},
    ],
  },

  {
    element: <PrivateLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: PATHS["CREATE-PROFILE"], element: <CreateProfilePage /> },
      { path: PATHS["MANAGE-PROFILE"], element: <ManageProfilePage /> },
    ],
  },
]);

export default router;
