import React from "react";
import FormInput from "./Inputs/FormInput";

const GetInTouch = () => {
  return (
    <section className="min-h-[50vh] py-5 px-5  py-4  ">
      <div className="flex  gap-2 my-20">
        <p className="bg-[#e41315]">&nbsp;</p>
        <p className="text-3xl font-black text-[#e41315]">Get In Touch</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-auto ">
        <div className="py-5 flex flex-col gap-4">
          <div>
            <p className="font-bold text-blue-400">Mail</p>
            <a className="text-gray-400" href="mailto:Info@vitalskillsda.com">
              Info@vitalskillsda.com
            </a>
          </div>
          <div>
            <p className="font-bold text-blue-400">Phone </p>
            <a className="text-gray-400" href="tel:+234(0)8026393322">
              +234(0)8026393322
            </a>
          </div>
          <div>
            <p className="font-bold text-blue-400">Office Address </p>
            <p className="text-gray-400">
              18 Trans Woji Road, Opposite NNPC Filling Station, Rivers State,
              Port Harcourt
            </p>
          </div>
        </div>

        <div>
          <p className="my-10">&nbsp;</p>
          <form action="" className="w-full flex  flex-col   gap-5 px-3">
            <FormInput
              className="  "
              title={"Name"}
              placeholder={"Full Name"}
              id={"name"}
              type={"text"}
            />
            <FormInput
              className="  "
              title={"Email Address"}
              placeholder={"Email Address"}
              id={"email"}
              type={"email"}
            />
            <FormInput
              title={"Phone Number"}
              placeholder={"Phone Number"}
              id={"phonenumber"}
              type={"text"}
            />

            <textarea
              className="outline-none w-full min-h-min"
              id="message"
              placeholder="Enter message"
            />

            <button className=" self-center bg-[#e41315]  py-3 text-white font-bold rounded-full w-2/6">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
