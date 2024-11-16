import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Error from "../components/Error";
import Career from "../Pages/Career";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout> </MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
        },
        {
            path: "/career",
            element:<Career></Career>
      }
    ],
    },
    {
        path: "*",
        element: <Error></Error>
    }
]);

export default router;
