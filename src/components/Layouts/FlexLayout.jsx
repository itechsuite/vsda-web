import React from "react";
import { ReactSVG } from "react-svg";

const FlexLayout = ({ title, details, image }) => {
  return (
    <div className="flex justify-center  gap-3">
      <div className=" rounded-full bg-red-400  flex items-center justify-center px-2 py-2 w-20 h-20">
        <img
          src={image || require("../../assets/images/target-svgrepo-com.png")}
          alt="icon"
          className="w-10 h-10"
        />
      </div>
      <div className="w-2/4">
        <p className="uppercase font-bold text-2xl">{title || "title"} </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
          voluptates quaerat praesentium, magnam voluptatibus provident
          excepturi inventore culpa ab ut blanditiis hic illum illo itaque a
          porro quae. Officiis, similique. Fugit incidunt repellat facilis
          voluptate vero exercitationem repudiandae nobis illum aliquid omnis
          repellendus, expedita in molestias veritatis quo eligendi nesciunt,
          officiis ratione rerum soluta? Ad numquam quis ducimus nam autem?
        </p>
      </div>
    </div>
  );
};

export default FlexLayout;
