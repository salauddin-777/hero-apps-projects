import { createBrowserRouter } from "react-router";
import Root from "./Root/Root";
import Home from "./Pages/Home";
import Apps from "./Pages/Apps";
import Installation from "./Pages/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
        {
            index:true,
            path: '/',
            Component: Home
        },
        {
            path: '/apps',
            Component: Apps
        },
        {
            path: 'installation',
            Component: Installation
        }
    ]
  },
]);
export default router;