import React, { useEffect } from "react";
import { RANDOM_USER_INFO } from "../../services/GeneralServices";

const TestimonyModel = () => {
  const randomPerson = async () => {
    const res = await RANDOM_USER_INFO();

    console.log(res);
  };

  useEffect(() => {
    randomPerson();
  }, []);
  return (
    <div className=" max-w-[400px] p-4 bg-white min-h-[250px] mx-5  flex flex-col justify-around">
      <p className="font-light ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, error
        vel aperiam
      </p>

      <div className="font-bold">
        <p className="">John doe</p>
        <p className="text-gray-400">Expert</p>
      </div>
    </div>
  );
};

export default TestimonyModel;
