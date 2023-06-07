import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "../pages/AboutPage";
import Menu from "../pages/MenuPage";
import ContactsPage from "../pages/ContactsPage";
import MenuItemPage from "../pages/MenuItemPage";
import RecallPage from "../pages/RecallPage";
import OneItemPage from "../pages/OneItemPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Menu />
            },
            {
                path: "/catalog/:id",
                element: <MenuItemPage />,
            },
            {
                path: "about",
                element: <Outlet />,
                children: [
                    {
                        path: "",
                        element: <AboutPage />,
                    },
                    {
                        path: "contacts",
                        element: <ContactsPage />                            
                    }
                ]
            },
            {
                path: "recall",
                element: <RecallPage />
            },
            {
                path: "oneitem",
                element: <OneItemPage />
            },
        ],
    },

]);

export default router