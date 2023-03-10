import Main from "../../Layout/Main";
import Allreview from "../../Pages/AllReview/Allreview";
import AllServices from "../../Pages/AllServices/AllServices";
import Blog from "../../Pages/Blog/Blog";
import Details from "../../Pages/Details/Details";
import EveryReview from "../../Pages/EveryReview/EveryReview";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Review from "../../Pages/Review/Review";
import Singup from "../../Pages/Singup/Singup";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allServices',
                element: <AllServices></AllServices>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/singup',
                element: <Singup></Singup>
            },
            {
                path: '/review/:id',
                element: <PrivetRoute><Review></Review></PrivetRoute>,
                loader: ({ params }) => fetch(`https://lets-tour-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://lets-tour-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/allReview',
                element: <PrivetRoute><Allreview></Allreview></PrivetRoute>
            },
            {
                path: '/everyReview',
                element: <EveryReview></EveryReview>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
]);

export default router;