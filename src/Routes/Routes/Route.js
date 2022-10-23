import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Cetagory from "../../Pages/Cetagory/Cetagory";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import SingUp from "../../Pages/Login/Login/SingUp";
import News from "../../Pages/News/News/News";
import Profile from "../../Pages/Others/Profile/Profile";
import ThramsAndCondition from "../../Pages/Others/ThramsAndCondition/ThramsAndCondition";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://dragon-news-server-new.vercel.app/news')


            },
            {
                path: '/cetagory/:id',
                element: <Cetagory></Cetagory>,
                loader: ({ params }) => fetch(`https://dragon-news-server-new.vercel.app/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivetRoute>
                    <News></News>
                </PrivetRoute>,
                loader: ({ params }) => fetch(`https://dragon-news-server-new.vercel.app/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/singUp',
                element: <SingUp></SingUp>
            },
            {
                path: '/thrams',
                element: <ThramsAndCondition></ThramsAndCondition>
            },
            {
                path: '/profile',
                element: <PrivetRoute>
                    <Profile></Profile>
                </PrivetRoute>
            }
        ]
    }

])
