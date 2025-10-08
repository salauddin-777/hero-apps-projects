import { createBrowserRouter } from "react-router";
import Root from "./Root/Root";
import Home from "./Pages/Home";
import Apps from "./Pages/Apps";
import Installation from "./Pages/Installation";
import ErrorPage from "./Pages/ErrorPage";
import DetailsCard from "./Pages/DetailsCard";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
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
        },
        {
            path: 'details/:id',
            Component: DetailsCard
        }
    ]
  },
]);
export default router;