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
import Map from "../src/components/Map"
let body = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "/Subpage",
    element: <Subpage/>,
  },
  {
    path: "/ExecutiveBoards",
    element: <ExecutiveBoards/>,
  },
  {
    path: "/Advisors",
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
  }
  
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
