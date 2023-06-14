import React from "react";
import FormInput from "./Inputs/FormInput";

const GetInTouch = () => {
  return (
    <section className="min-h-[50vh] py-5 px-5 ">
      <div className="flex  gap-2">
        <p className="bg-blue-400">&nbsp;</p>
        <p className="text-3xl font-black text-gray-500">Get In Touch</p>
      </div>
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
            {/* <FormInput
              title={"Message"}
              placeholder={"enter message"}
              id={"name"}
              type={"text"}
            /> */}

            <textarea
              className="outline-none w-full min-h-min"
              id="message"
              placeholder="Enter message"
            />

            <button className="w-full bg-black px-3 py-3 text-white font-bold rounded-sm">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
