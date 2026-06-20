import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.jsx";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <header>
        <Header></Header>
      </header>
    </BrowserRouter>
    <RouterProvider router={routes} />
      <footer>
        <Footer></Footer>
      </footer>
  </React.StrictMode>,
);
