import { ChevronRightIcon, HeartIcon } from "@heroicons/react/24/outline";
import React from "react";

const ProductModel = () => {
  return (
    <div className=" bg-[#003447] text-white min-h-[250px] relative flex flex-col max-w-lg rounded-lg">
      <div className="bg-[#fb8c26]  px-5 py-5  rounded-tr-lg  rounded-tl-lg inline-block">
        <p>Automatic Changeover Switch</p>
      </div>

      <div className="absolute top-2 right-3">
        <button className="btn bg-transparent hover:bg-transparent outline-none border-none">
          <HeartIcon height={20} width={20} />
        </button>
      </div>

      <div className="flex flex-col py-4 justify-center items-center  md:flex-row lg:flex-row gap-3">
        <div className="flex justify-center items-center flex-1">
          <img
            className="w-3/5"
            src="https://media.istockphoto.com/id/913342894/photo/generator-ac-motor-portable.jpg?s=612x612&w=0&k=20&c=6JgGtlaxmcnyppiR8aIalEJE4kysK0DIc-LGAz8CjgA="
            alt="product image"
          />
        </div>

        <div className="flex-1">
          <ul>
            <li>Code: SACS6A1</li>
            <li>Code: SACS6A1</li>
            <li>Code: SACS6A1</li>
            <li>Code: SACS6A1</li>
            <li>Code: SACS6A1</li>
          </ul>
        </div>
      </div>
      <button className="flex self-center items-center gap-3 my-4 bg-blue-100 px-6 py-3 rounded-full text-black btn hover:text-white">
        <p>Request a Quote </p> <ChevronRightIcon width={20} />
      </button>
    </div>
  );
};

export default ProductModel;
