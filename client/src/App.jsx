import Footer from "./components/Footer"
import Header from "./components/header"
import * as React from "react";
import ExecutiveBoards from "./Subpage/ExecutiveBoards";
import Advisors from "./Subpage/Advisors";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'leaflet/dist/leaflet.css';
import Main from "./components/main/Main";
import Subpage from "./Subpage/Subpage";
import Ecommerce from "./components/Ecommerce/Ecommerce";
import ProductPage from "./components/Ecommerce/Productpage/productPage";
import Map from "../src/components/Map";
import Login from "./components/login/Login";
import ContentForm from "./components/ContentForm/ContentForm";
let body = createBrowserRouter([
  {
    path: "/content",
    element: <ContentForm/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <Main/>,
  },
  {
    path: "/about-us",
    element: <Subpage/>,
  },
  {
    path: "/women-affairs",
    element: <Subpage/>,
  },
  {
    path: "/youth-affairs",
    element: <Subpage/>,
  },
  {
    path: "/objectives-goals",
    element: <Subpage/>,
  },
  {
    path: "/executive-boards",
    element: <ExecutiveBoards/>,
  },
  {
    path: "/members",
    element: <ExecutiveBoards/>,
  },
  {
    path: "/advisors",
    element: <Advisors/>,
  },
  {
    path: "",
    element: <Main/>,
  },
  {
    path: "/Ecommerce",
    element: <Ecommerce/>,
  },
  {
    path: "/oneProduct",
    element: <ProductPage/>,
  },
  {
    path: "*", // Match any unknown path
    element: <Main />,
  },
]);


const App = () => {
  
  return (
    <div>  
<Header/>
<RouterProvider router={body} />
<Footer/>
<Map/>
    </div>
  )
}


export default App
