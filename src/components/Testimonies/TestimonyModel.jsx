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
    <div className="border max-w-[300px] p-4">
      <div className="flex  gap-4">
        <div className="rounded-full bg-blue-500 w-[30px] h-[30px]"> .</div>
        <div>
          <p>name</p>
        </div>
      </div>

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          error vel aperiam
        </p>
      </div>
    </div>
  );
};

export default TestimonyModel;
