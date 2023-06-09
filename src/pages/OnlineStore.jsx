import React from "react";
import ProductModel from "../components/view-models/ProductModel";

const OnlineStore = () => {
  return (
    <section
      className="min-h-[80vh] px-5 py-10"
      // style={{
      //   backgroundImage: `linear-gradient(to bottom, rgba(97,165,250, 0.52), rgba(0,0,0, 0.53)),
      //   url('images/background.jpg') ,url(${require("../assets/images/pattern.jpeg")})`,
      // }}
    >
      <div className="grid grid-cols-4 gap-10 ">
        <ProductModel />
        <ProductModel />
        <ProductModel />
        <ProductModel />
        <ProductModel />
        <ProductModel />
        <ProductModel />
        <ProductModel />
        <ProductModel />
      </div>
    </section>
  );
};

export default OnlineStore;
