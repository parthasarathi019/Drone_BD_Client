import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Header from "./Components/Header/Header";
import Main_Page from "./Components/Main_Page/Main_Page";
import All_Toys from "./Components/All_Toys/All_Toys";
import My_Toys from "./Components/My_Toys/My_Toys";
import Blogs from "./Components/Blogs/Blogs";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Add_A_Toy from "./Components/Add_A_Toy/Add_A_Toy";
import AuthProviders from "./Components/Providers/AuthProviders";
import Private_Route from "./Components/Private_Route/Private_Route";
import View_Toy_Data from "./Components/View_Toy_Data/View_Toy_Data";
import Not_Found_Page from "./Components/Not_Found_Page/Not_Found_Page";
import Update_Drone from "./Components/Update_Drone/Update_Drone";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: "/",
        element: <Main_Page></Main_Page>,
      },
      {
        path: "/All_Toys",
        element: <All_Toys></All_Toys>,
        loader : () => fetch("https://drone-bd-server.vercel.app/drones")
      },
      {
        path: "/My_Toys",
        element: <My_Toys></My_Toys>,
      },
      {
        path: "/Blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
      {
        path: "/Add_A_Toy",
        element: <Add_A_Toy></Add_A_Toy>,
      },
      {
        path: "/View_Toy_Data/:id",
        element: <Private_Route><View_Toy_Data></View_Toy_Data></Private_Route>,
        loader: ({params}) => fetch(`https://drone-bd-server.vercel.app/drones/${params.id}`)
      },
      {
        path: "/Update_Drone/:id",
        element: <Update_Drone></Update_Drone>,
        loader : ({params}) => fetch(`https://drone-bd-server.vercel.app/drones/${params.id}`)
      },
    ],
  },
  {
    path: "*",
    element:<Not_Found_Page></Not_Found_Page> 
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
 <section className="">
   <React.StrictMode>
   <AuthProviders> <RouterProvider router={router} /></AuthProviders>
  </React.StrictMode>
 </section>
);