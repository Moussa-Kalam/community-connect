import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "../utils";
import { BookingsPage, HomePage, NotFoundPage, ServicesPage } from "../pages";
import { LogInPage, SignUpPage } from "../pages/auth";
import PrivateLayout from "./PrivateRoutes.tsx";
import { CreateProfilePage, ManageProfilePage } from "../pages/profile";
import Layout from "./Layout.tsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: PATHS.LOGIN, element: <LogInPage /> },
      { path: PATHS.REGISTER, element: <SignUpPage /> },
    ],
  },

  {
    path: PATHS.HOME,
    element: <PrivateLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: PATHS["CREATE-PROFILE"], element: <CreateProfilePage /> },
      { path: PATHS["MANAGE-PROFILE"], element: <ManageProfilePage /> },
      { path: PATHS.SERVICES, element: <ServicesPage /> },
      { path: PATHS.BOOKINGS, element: <BookingsPage /> },
    ],
  },
]);

export default router;
