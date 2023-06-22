import React, { useEffect, useState } from "react";
import ProductModel from "../components/view-models/ProductModel";
import { GET_ALL_PRODUCTS } from "../services/store";
import PageLoader from "../components/Loaders/PageLoader";
import Modal1 from "../components/Modal/Modal1";
import FullModal from "../components/Modal/FullModal";
import FormInput from "../components/Inputs/FormInput";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const OnlineStore = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selected, setSelected] = useState({});
  const [values, setValues] = useState({
    fullname: "",
    address: "",
    email: "",
    phoneNumber: "",
    product: "",
    extra: "",
  });

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

  async function handleSubmitRequest() {}

  const handleFormOnChange = (e) => {
    const { value, id } = e.target;
    setValues({ ...values, [id]: value });
  };

  return (
    <section className="min-h-[80vh] px-5 py-10 w-full  ">
      <div className="grid gap-10 md:grid-cols-4 grid-cols-2    ">
        {products && products.length >= 1 ? (
          products.map((product, index) => {
            return (
              <ProductModel
                key={index}
                payload={product}
                onClick={() => {
                  setSelected(product);
                  setValues({ ...values, product: product.product_name });
                  // setModal(true);
                  navigate("/request-form", {
                    state: {
                      id: "ll",
                      payload: JSON.stringify(product),
                    },
                  });
                }}
              />
            );
          })
        ) : (
          <section>
            <p>No Product is available at the moment</p>
          </section>
        )}
      </div>

      <FullModal onClose={() => setModal(false)} visible={modal}>
        <div className="relative flex md:flex-row justify-center gap-2 h-[100%] flex-col ">
          <XMarkIcon
            id="master"
            className="w-6 text-gray-400 hover:text-red-600  absolute top-3 right-3 "
            onClick={() => setModal(false)}
          />
          <div className="bg-blue-50  w-full h-full px-5 py-10 flex flex-col gap-5 ">
            <p className="text-2xl font-bold">{selected.product_name}</p>
            <p className="font-light"> Product Specification:</p>

            <div className="flex flex-col gap-2 py-5">
              {selected && selected.product_specification
                ? selected.product_specification
                    .split(",")
                    .map((spec, index) => {
                      return <p className="font-semibold"> {spec}</p>;
                    })
                : null}
            </div>
          </div>
          <div className="flex w-full flex-col py-10">
            <p className="font-extrabold text-gray-600">Request Form</p>
            <form
              className="flex flex-col  md:px-10 px-3 gap-4"
              onSubmit={handleSubmitRequest}
            >
              <FormInput
                id={"fullname"}
                placeholder={"Fullname"}
                value={values.fullname}
                onChange={handleFormOnChange}
              />
              <FormInput
                id={"address"}
                placeholder={"address"}
                value={values.address}
                onChange={handleFormOnChange}
              />
              <FormInput
                id={"email"}
                placeholder={"email"}
                value={values.email}
                onChange={handleFormOnChange}
              />
              <FormInput
                id={"phoneNumber"}
                placeholder={"phoneNumber"}
                value={values.phoneNumber}
                onChange={handleFormOnChange}
              />
              <FormInput
                className={"text-blue-400 "}
                id={"product"}
                placeholder={"Product"}
                disabled
                value={values.product}
                onChange={handleFormOnChange}
              />
              <FormInput
                id={"extra"}
                placeholder={"Additional Info"}
                value={values.extra}
                onChange={handleFormOnChange}
              />

              <button className="mt-5 btn w-2/5 self-center bg-blue-400 border-none rounded-md">
                {" "}
                Submit
              </button>
            </form>
          </div>
        </div>
      </FullModal>
    </section>
  );
};

export default OnlineStore;
