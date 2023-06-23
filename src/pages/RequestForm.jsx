import React, { useState } from "react";
import FormInput from "../components/Inputs/FormInput";
import { useLocation, useNavigate } from "react-router-dom";
import { COMPOSE_EMAIL } from "../services/mailServices";
import { ToastContainer, toast } from "react-toastify";
import Modal1 from "../components/Modal/Modal1";
import greenTick from "../assets/Lotties/lottie-success.json";

import Lottie from "lottie-react";
const RequestForm = ({}) => {
  //   const { product } = props.location.state;

  const navigate = useNavigate();
  const location = useLocation();
  const payload = JSON.parse(location.state.payload);

  const [success, setSuccess] = useState(false);
  const [values, setValues] = useState({
    fullname: "",
    address: "",
    email: "",
    phoneNumber: "",
    product: payload.product_name,
    extra: "",
  });

  async function handleSubmitRequest(e) {
    e.preventDefault();

    const { fullname, email, address, phoneNumber, product, extra } = values;

    //petty validation
    if (
      fullname === "" ||
      email === "" ||
      address === "" ||
      phoneNumber === "" ||
      product === ""
    ) {
      toast.warn("Please fill all information");
      return;
    }

    const response = await COMPOSE_EMAIL({
      to: "info@vitalskillsda.com",
      // from: "goodluckcanhelp@gmail.c",
      message: `${product} \n Details: \r  Name: ${fullname} \r email: ${email} \r Mobile: ${phoneNumber}  \r Address: ${address} `,
      subject: `Product Request  ${product} -  From: ${fullname} ${email}`,
    });

    console.log(response);
    if (response.isOk) {
      setSuccess(true);
      navigate(0);
    }

    //
  }

  const handleFormOnChange = (e) => {
    const { value, id } = e.target;
    setValues({ ...values, [id]: value });
  };

  return (
    <>
      {payload ? (
        <div className="relative flex md:flex-row justify-center gap-2 h-[100vh] flex-col ">
          <div className="bg-blue-50  w-full h-full px-5 py-10 flex flex-col gap-5  md:flex hidden">
            <p className="text-2xl font-bold">{payload.product_name}</p>
            <p className="font-bold text-lg"> Product Specification:</p>

            <div className="flex flex-col gap-2 ">
              {payload && payload.product_specification
                ? payload.product_specification
                    .split(",")
                    .map((spec, index) => {
                      return <p className="font-semibold"> {spec}</p>;
                    })
                : null}
            </div>
          </div>
          <div className="flex w-full flex-col ">
            <div className="px-10 py-10">
              <p className="font-extrabold text-2xl text-gray-600 ">
                Request Form
              </p>
              <p>Fill the form and you'll be contacted shortly</p>
            </div>
            <form
              className="flex flex-col  md:px-10 px-10 gap-4"
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
      ) : (
        <p> No Content to display</p>
      )}

      <Modal1 visible={success} onClose={() => setSuccess(false)}>
        <div className="min-h-[300px] h-full justify-center flex flex-col items-center">
          <Lottie className="w-[100px]" animationData={greenTick}></Lottie>
          <p className="font-bold text-2xl ">Message sent</p>
          <p className="text-center">Your message was sent successfully</p>
        </div>
      </Modal1>

      <ToastContainer />
    </>
  );
};

export default RequestForm;
