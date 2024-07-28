import { RouterProvider } from "react-router-dom";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import RedirectIfLogged from "../components/RedirectIfLogged";
import ProtectedRoute from "../features/authentication/components/ProtectedRoute";
import ProfilePage from "../pages/ProfilePage";
import ProductPage from "../pages/ProductPage";
import ShapePage from "../pages/ShapePage";
import AllCusPage from "../pages/AllCusPage";
import OrderSummaryPage from "../pages/OrderSummaryPage";
import RoleProtectedRoute from "../features/authentication/components/RoleProtectedRoute";
import AuthContextProvider from "../contexts/AuthContext";
import EditUserProfilePage from "../pages/EditUserProfilePage";
import EditShapePage from "../pages/EditShapePage";
import AdminMainContainer from "../layouts/AdminMainContainer";
import UserContextProvider from "../contexts/UserContext";
import { OrderContextProvider } from "../contexts/OrderContext";
import AllOrderPage from "../pages/AllOrderPage";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const MainContainer = lazy(() => import("../layouts/MainContainer"));

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "*", element: <HomePage /> },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainContainer />
      </ProtectedRoute>
    ),
    children: [
      { path: "profile", element: <ProfilePage /> },
      { path: "products", element: <ProductPage /> },
      { path: "order_summary", element: <OrderSummaryPage /> },
      { path: "shape", element: <ShapePage /> },
    ],
  },
  {
    path: "/login",
    element: (
      <RedirectIfLogged>
        <LoginPage />
      </RedirectIfLogged>
    ),
  },
  {
    path: "/admin",
    element: (
      <RoleProtectedRoute requiredRole="ADMIN">
        <AdminMainContainer />
      </RoleProtectedRoute>
    ),
    children: [
      { path: "userData", element: <AllCusPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "shape/:userId", element: <EditShapePage /> },
      { path: "order", element: <AllOrderPage /> },
    ],
  },
]);

export default function Router() {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <OrderContextProvider>
          <RouterProvider router={router} />
        </OrderContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  );
}
