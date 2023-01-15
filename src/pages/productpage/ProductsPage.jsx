import React, { useState } from "react";
import Aside from "../../components/aside/Aside";
import AsideMobile from "../../components/aside/AsideMobile";
import Main from "../../components/main/Main";
import "./ProductsPage.css";
export default function ProductsPage() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="flipcart-product-page">
      {<Aside />}
      {showSideBar && <AsideMobile />}
      <Main setShowSideBar={setShowSideBar} />
    </div>
  );
}
