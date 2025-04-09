import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layout/MainLayout.tsx";
import Home from "./routes/home.tsx";
import { LetterList } from "./components/LetterList.tsx";
import { LetterView } from "./components/LetterView.tsx";
import { ToastContainer } from "react-toastify";
import About from "./routes/about.tsx";

// Create a router
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                children: [
                    {
                        index: true,
                        element: <LetterList />,
                    },
                    {
                        path: "/view/:id",
                        element: <LetterView />,
                    },
                ],
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <>
        <RouterProvider router={router} />
        <ToastContainer
            position="bottom-right"
            autoClose={3000}
            theme="colored"
        />
    </>
);
