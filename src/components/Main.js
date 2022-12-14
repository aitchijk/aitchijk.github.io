import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogs from './Blogs';
import BlogPage, {loader as blogPageLoader} from './BlogPage';
import Home from './Home';
import Legal from './Legal';
import Page404 from './Page404';
import ServicePage, {loader as servicePageLoader} from './ServicePage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Page404 />
    },
    {
        path: '/blogs',
        element: <Blogs />,
    },
    {
        path: '/blogs/:blogSlug',
        loader: blogPageLoader,
        element: <BlogPage />
    },
    {
        path: '/legal',
        element: <Legal />
    },
    {
        path: '/services/:serviceSlug',
        loader: servicePageLoader,
        element: <ServicePage />
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