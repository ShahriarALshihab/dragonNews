import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../components/MainLayout";

import Error from "../components/Error";
import CategoryNews from "../Pages/CategoryNews";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout> </MainLayout>,
    children: [
      {
        path: "",
        element:<Navigate to={"/category/01"} replace></Navigate>
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
      }
      
    ],
    },
    {
        path: "*",
        element: <Error></Error>
    }
]);

export default router;
