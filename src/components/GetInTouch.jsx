import React from "react";
import FormInput from "./Inputs/FormInput";

const GetInTouch = () => {
  return (
    <section className="min-h-[50vh] py-5 px-5 ">
      <p className="text-3xl font-bold">GetInTouch</p>
      <div className="grid grid-cols-1 md:grid-cols-2 w-auto ">
        <div className="py-5 flex flex-col gap-4">
          <div>
            <p className="font-bold text-blue-400">Mail</p>
            <a className="text-gray-400" href="mailto:support@vitalskills.com">
              support@vitalskills.com
            </a>
          </div>
          <div>
            <p className="font-bold text-blue-400">Phone </p>
            <a className="text-gray-400" href="tel:08172020202">
              08172020202
            </a>
          </div>
        </div>

        <div>
          <form
            action=""
            className="w-full flex md:flex-wrap   flex-col  gap-5"
          >
            <FormInput
              className=" md:max-w-[40%]    "
              title={"Name"}
              placeholder={"enter name"}
              id={"name"}
              type={"text"}
            />
            <FormInput
              className=" md:max-w-[40%] "
              title={"Email Address"}
              placeholder={"a@1234.com"}
              id={"email"}
              type={"email"}
            />
            <FormInput
              title={"Phone Number"}
              placeholder={"080XXXXXXX"}
              id={"phonenumber"}
              type={"text"}
            />
            <FormInput
              title={"Message"}
              placeholder={"enter message"}
              id={"name"}
              type={"text"}
            />

            <button className="w-full bg-black px-3 py-3 text-white font-bold">
              {" "}
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
