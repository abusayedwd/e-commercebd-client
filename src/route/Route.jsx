import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../home/home/Home";
import Login from "../shared/Login";
import SignUp from "../shared/SignUp"; 
import Products from "../home/Products";

 export const router = createBrowserRouter([
    {
      path:"/",
      element: <Main></Main>,
      children: [
         {
            path:'/',
            element: <Home></Home>
         },
         {
            path:'login',
            element:<Login></Login>
         },
         {
            path:'signup',
            element:<SignUp></SignUp>
         },
         {
            path:'products',
            element:<Products></Products>
         }
          
      ]
    }
 ])