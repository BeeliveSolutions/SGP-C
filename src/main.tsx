import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import DashboardPage from "./Pages/DashboardPage";
import "./main.css";
import ClientesPage from "./Pages/ClientsPage";
import EventsPage from "./Pages/EventsPage";

import { SideBarProvider } from "./context/sidebarContext";

const AuthenticateRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  if (children.type === LoginPage && token) {
    navigate("/Dashboard");
    return null;
  }

  if (!token && children.type !== LoginPage) {
    navigate("/");
    return null;
  }

  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/Dashboard/*",
    element: (
      <AuthenticateRoute>
        <DashboardPage />
      </AuthenticateRoute>
    ),
  },
  {
    path: "/Clients/*",
    element: (
      <AuthenticateRoute>
        <ClientesPage />,
      </AuthenticateRoute>
    ),
  },
  {
    path: "/Events/*",
    element: (
      <AuthenticateRoute>
        <EventsPage />,
      </AuthenticateRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SideBarProvider>
      <RouterProvider router={router} />
    </SideBarProvider>
  </React.StrictMode>
);
