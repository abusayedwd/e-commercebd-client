import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../home/home/Home";
import Login from "../shared/Login";
import SignUp from "../shared/SignUp"; 
import Products from "../home/Products";
import DetailsProduct from "../home/DetailsProduct";
import Errorelement from "../shared/Errorelement";

 export const router = createBrowserRouter([
    {
      path:"/",
      element: <Main></Main>,
      errorElement:<Errorelement></Errorelement>,
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
         },
         {
            path:'details/:id',
            element: <DetailsProduct></DetailsProduct>,
            loader:({params}) => fetch(`https://e-commercebd-server.vercel.app/products/${params.id}`)
    },
          
      ]
    }
 ])