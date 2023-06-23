import React, { useState } from "react";
import FormInput from "./Inputs/FormInput";
import { COMPOSE_EMAIL } from "../services/mailServices";

const GetInTouch = () => {
  const [values, setValue] = useState({
    fullname: "",
    email: "",
    phone_number: "",
    message: "",
  });
  const sendEmail = async (e) => {
    e.preventDefault();

    const { fullname, email, phone_number, message } = values;

    //petty validation
    if (
      fullname === "" ||
      email === "" ||
      phone_number === "" ||
      message === ""
    )
      return;

    const response = await COMPOSE_EMAIL({
      to: "info@vitalskillsda.com",
      // from: "goodluckcanhelp@gmail.c",
      message: `${message} \n Details: \r  Name: ${fullname} \r email: ${email} \r Mobile: ${phone_number}  `,
      subject: `Contact Mail from: ${fullname} - ${email}`,
    });

    // console.log(response);
  };

  const handleOnChnage = (e) => {
    const { value, id } = e.target;

    setValue({ ...values, [id]: value });
  };

  return (
    <section className="min-h-[50vh] py-5 mx-auto  w-4/5  ">
      <div className="flex  gap-2 my-20">
        <p className="bg-[#e41315]">&nbsp;</p>
        <p className="text-5xl font-[700] text-[45px] text-[#e41315]">
          Get In Touch
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-auto ">
        <div className="py-5 flex flex-col gap-4 ">
          <div className="">
            <p className="font-[600] text-[22px]  text-[#20247b]">Mail</p>
            <a
              className="text-[#666666] text-[18px] leading-[30px]"
              href="mailto:Info@vitalskillsda.com"
            >
              Info@vitalskillsda.com
            </a>
          </div>
          <div>
            <p className="font-[600] text-[22px]  text-[#20247b]">Phone </p>
            <a
              className=" text-[#666666] text-[18px] leading-[30px]"
              href="tel:+234(0)8026393322"
            >
              +234(0)8026393322
            </a>
          </div>
          <div>
            <p className="font-[600] text-[22px]  text-[#20247b]">
              Office Address{" "}
            </p>
            <p className=" text-[#666666] text-[18px] leading-[30px]">
              18 Trans Woji Road, Opposite NNPC Filling Station, Rivers State,
              Port Harcourt
            </p>
          </div>
        </div>

        <div className="mt-20">
          {/* <p className="my-1">&nbsp;</p> */}
          <form
            action=""
            className="w-full flex  flex-col   gap-5 px-3"
            onSubmit={sendEmail}
          >
            <div className="flex  gap-5">
              <FormInput
                className=" leading-normal"
                title={"Fullname"}
                placeholder={"Full Name"}
                id={"fullname"}
                value={values.fullname}
                type={"text"}
                onChange={handleOnChnage}
              />
              <FormInput
                className=" leading-normal"
                title={"Email Address"}
                placeholder={"Email Address"}
                id={"email"}
                type={"email"}
                value={values.email}
                onChange={handleOnChnage}
              />
            </div>

            <FormInput
              title={"Phone Number"}
              placeholder={"Phone Number"}
              id={"phone_number"}
              type={"text"}
              value={values.phone_number}
              onChange={handleOnChnage}
              className=" leading-normal"
            />

            <textarea
              className="outline-none w-full min-h-min font-semibold"
              id="message"
              placeholder="Enter message"
              value={values.message}
              onChange={handleOnChnage}

              // onChange={handleOnChnage}
            />

            <button className=" self-center bg-[#e41315]  py-3 text-white font-semibold rounded-full w-2/6">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
