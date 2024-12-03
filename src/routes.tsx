import { createBrowserRouter } from "react-router-dom";

// pages
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import History from "./pages/History/History";
import Collaborators from "./pages/Collaborators/Collaborators";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/history",
        element: <History />
      },
      {
        path: "/collaborators",
        element: <Collaborators />
      }
    ],
  },
]);


export default router