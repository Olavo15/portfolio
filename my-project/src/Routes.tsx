import React from "react";
import { Route, createBrowserRouter } from "react-router-dom";

import Home from "./routes/Home";
import Project from "./routes/Project";


export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/projeto',
        element: <Project/>
    },
])