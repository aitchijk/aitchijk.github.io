import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home';
import Legal from './Legal';
import Page404 from './Page404';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Page404 />
    },
    {
        path: '/legal',
        element: <Legal />
    }
])

const Main = () => {
    return (
        <div style={{minHeight: '100vh'}}>
            <RouterProvider router={router} />
        </div>
    )
};

export default Main;