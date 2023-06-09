import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Main from '../layout/Main/Main';
import Login from '../in-out/Login';



const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>
        }
      ]
    },
  ]);


export default router;