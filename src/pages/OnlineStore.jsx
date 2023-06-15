import React, { useEffect, useState } from "react";
import ProductModel from "../components/view-models/ProductModel";
import { GET_ALL_PRODUCTS } from "../services/store";
import PageLoader from "../components/Loaders/PageLoader";

const OnlineStore = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchALlProducts = async () => {
    const res = await GET_ALL_PRODUCTS();
    console.log(res);

    if (!res || res.length <= 0) {
      setLoading(false);
      setProducts([]);

      return;
    }

    setProducts(res);
    setLoading(false);
  };

  useEffect(() => {
    fetchALlProducts();
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <section className="min-h-[80vh] px-5 py-10">
      <div className="grid grid-cols-4 gap-10 ">
        {products && products.length >= 1
          ? products.map((product, index) => {
              return <ProductModel key={index} payload={product} />;
            })
          : null}
      </div>
    </section>
  );
};

export default OnlineStore;
