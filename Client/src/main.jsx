import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ProjectList from "./Pages/ProjectList";
import UserList from "./Pages/UserList";
import Form from "./Pages/Form";
import Dashbord from "./Pages/Dashbord";
import ProtectedRoute from "./components/ProtectedRoute";
import { Provider } from "react-redux";
import { store } from "./app/store";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "error message for component",
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/project-list/:id",
        element: <ProjectList />,
      },
      {
        path: "/user-list",
        element: <UserList />,
      },
      {
        path: "/form",
        element: (
          <ProtectedRoute>
            <Form />
          </ProtectedRoute>
        ),
      },
      {
        path: "/form/:id",
        element: (
          <ProtectedRoute>
            <Form />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashbord",
        element: (
          <ProtectedRoute>
            <Dashbord />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
