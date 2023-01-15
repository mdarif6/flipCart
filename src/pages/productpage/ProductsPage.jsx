import React, { useState } from "react";
import Aside from "../aside/Aside";
import AsideMobile from "../aside/AsideMobile";
import Main from "../main/Main";
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
