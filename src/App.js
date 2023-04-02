import logo from './logo.svg';
import './App.css';

import Login from './component/Login';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Logininput from './component/Logininput';
import Signup from './component/Signup';
import Main from './component/MainComponent/main';
import Home from './component/MainComponent/sideBar/SideBarOptions/Home';
import Notification from './component/MainComponent/sideBar/SideBarOptions/Notification';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    children: [
      {
        path: "/",
        element: <Logininput />
      },
      {
        path: "/signUp",
        element: <Signup />
      }

    ]

  },
  {
    path: "/main",
    element: <Main />,
    children : [
      {
      path: "/main/",
      element: <Home />
      },
      {
        path:"/main/Notification",
        element: <Notification/>
      }
      
    ]
  }
]);
function App() {

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
