import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Roots from '../Pages/Book/Root/Rooots';
import Navber from '../Componants/Header/Navber';
import Error from '../Pages/Book/Root/Errorpage/Error';
import Home from '../Componants/Home/Home';
import Aboutapp from '../Componants/About/Aboutapp';
import Readlist from '../Componants/Readlist/Readlist';
export const router = createBrowserRouter([
  {
    path: "/",
   Component: Navber,
   errorElement: <Error></Error> ,

children: [
  {
    index: true,
    path: "/",
    Component: Home,
  },

  {
    path: "/readlist/:id",
    loader: () => fetch(`/players2.json`),
    Component: Readlist,
  },

{


  path: "/about",
  Component: Aboutapp,
}


],



  },



]);



export default router
