import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import "./App.css";
import OurBusinesses from "./pages/OurBusinesses";
import About from "./pages/About";
import Newsroom from "./pages/Newsroom";
import Community from "./pages/Community";
import ContactPage from "./pages/ContactPage";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/our-businesses",
          element: <OurBusinesses />,
        },
        {
          path: "/about-aviakul",
          element: <About />,
        },
        {
          path: "/newsroom",
          element: <Newsroom />,
        },
        {
          path: "/community-outreach",
          element: <Community />,
        },
        {
          path: "/contact-us",
          element: <ContactPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
