import React from "react";
import FlexLayout from "../components/Layouts/FlexLayout";

const AboutUs = () => {
  return (
    <section className="my-5 flex-col flex gap-5">
      <div className="px-10 py-5 flex  flex-col items-center gap-10 min-h-[250px]  bg-[#eeeaf2]  mx-20 ">
        <p className="font-extrabold text-2xl"> Putting You First</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
          vitae? Totam, excepturi! Illum aliquam tempora commodi quia, quas
          consequatur placeat assumenda a dolores excepturi omnis labore, ex
          voluptatum facilis maiores! Eos placeat molestiae consequuntur
          corrupti dolores, possimus quis asperiores aperiam, obcaecati id,
          doloremque autem fugit. Odio tempora quod reiciendis, nulla quisquam
          recusandae maiores, esse consequatur quo quaerat qui. Neque, labore.
        </p>
      </div>

      <div className="flex flex-col gap-5 my-10">
        <FlexLayout title={"our mission"} />
        <FlexLayout title={"our vision"} />
      </div>

      <div
        className=" mx-20 min-h-[200px] flex flex-col justify-between px-5 py-5 text-white"
        style={{
          backgroundPosition: "center",
          backgroundImage: `linear-gradient(to right, rgba(5,49,86, 0.92), rgba(255,255,255  , 0.0)),
        url('images/background.jpg') ,url(${require("../assets/images/library.jpeg")})`,
        }}
      >
        <div className="flex flex-col gap-3">
          <p className=" uppercase font-extrabold text-2xl  ">
            Service Experts{" "}
          </p>
          <div className="text-gray-200">
            <p>Service Delivery Like None Other </p>
            <p>World Class Solution Provider</p>
          </div>
        </div>

        <div>
          <button className="btn bg-white hover:bg-blue-200 text-black border-none px-10 text-lg">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
