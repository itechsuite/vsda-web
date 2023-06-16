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

      <div>
        <FlexLayout />
      </div>

      <div>
        <div>
          <p>Service Experts </p>
          <p>Service Delivery Like None Other </p>
          <p>World Class Solution Provider</p>
        </div>

        <button>Explore</button>
      </div>
    </section>
  );
};

export default AboutUs;
