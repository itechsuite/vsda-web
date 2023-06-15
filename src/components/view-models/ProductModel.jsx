import { ChevronRightIcon, HeartIcon } from "@heroicons/react/24/outline";
import React from "react";
import { CurrencyFormatter } from "../../helper/CurrencyFormatter";

const ProductModel = ({ payload }) => {
  return (
    <div className="  min-h-[280px] flex flex-col max-w-[300px] rounded-lg border relative  ">
      <div className="absolute right-3 top-3 z-10  bg-blue-400 px-2 text-sm py-1 rounded-lg font-bold uppercase ">
        <p>New</p>
      </div>
      <img
        src={payload.product_image}
        alt=""
        className="max-h-[200px] rounded-tl-lg rounded-tr-lg"
      />
      <div className="px-3 py-2 text-sm">
        <p>{payload.product_name}</p>

        <div>
          <p className="font-bold">{CurrencyFormatter(payload.amount)}</p>
          <p>-some</p>
        </div>
      </div>

      <button className="btn  mx-5 my-5 text-xs bg-blue-400 border-none normal-case">
        Request a Quote
      </button>
    </div>
  );
};

export default ProductModel;
