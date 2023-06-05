import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "../pages/AboutPage";
import Menu from "../components/Menu";
import ContactsPage from "../pages/ContactsPage";

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
        ],
    },

]);

export default router