import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Error from "./Pages/404/Error";
import Profil from "./Pages/Profil/Profil"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profil",
    element: <Profil />
  },
  {
    path: "/*",
    element: <Error />,
  },
]);

export default routes;
