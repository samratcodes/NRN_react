import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';

import Main from "./components/main/Main";
import Subpage from "./Subpage/Subpage";
import Ecommerce from "./components/Ecommerce/Ecommerce";
import ProductPage from "./components/Ecommerce/Productpage/productPage";
import ExecutiveBoards from "./Subpage/ExecutiveBoards";
import Advisors from "./Subpage/Advisors";
import Login from "./components/login/Login";
import ContentForm from "./components/ContentForm/ContentForm";
import Header from "./components/header";
import Footer from "./components/Footer";
import Map from "./components/Map";
import Update from './UpdateForm/Update';

const App = () => {
  const [fetchLinkData, setFetchLinkData] = useState(null);
  const [headerArray, setHeaderArray] = useState([]);
  const [HomeData, setHomeData]= useState({});
  const FetchLink = (data,elementObject,array) => {
    setFetchLinkData(data);
    setHeaderArray(elementObject);
    setHomeData(array);
  };

  return (
    <div>
      <Router>
        <Header handleLinkinAPP={FetchLink} />
        <Routes>
          <Route path="/content" element={<ContentForm />} />
          <Route path="/Update" element={<Update/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Main   HomeData={HomeData}/>} />
          <Route path="/Subpage" element={<Subpage  fetchLinkData={fetchLinkData} headerArray={headerArray}/>} />
          <Route path="/meetings" element={<Subpage  fetchLinkData={fetchLinkData} />} />
          <Route path="/women-affairs"   element={<Subpage  fetchLinkData={fetchLinkData} />} />
          <Route path="/youth-affairs"   element={<Subpage  fetchLinkData={fetchLinkData} />}/>
          <Route path="/objectives-goals"   element={<Subpage  fetchLinkData={fetchLinkData} />} />
          <Route path="/executive-boards" element={<ExecutiveBoards />} />
          <Route path="/projects"   element={<Subpage  fetchLinkData={fetchLinkData} />} />
          <Route path="/contact"   element={<Subpage  fetchLinkData={fetchLinkData} />} />
          <Route
            path="/members"
            element={<Subpage  fetchLinkData={fetchLinkData} />}
          />
          <Route path="/advisors"   element={<Subpage  fetchLinkData={fetchLinkData} />} />
          <Route path="/Ecommerce" element={<Ecommerce />} />
          <Route path="/oneProduct" element={<ProductPage />} />
          <Route path="" element={<Main HomeData={HomeData}/>} />
          <Route path="*" element={<Main  HomeData={HomeData} />} />
        </Routes>
      </Router>
      <Footer />
      <Map />
    </div>
  );
};

export default App;
