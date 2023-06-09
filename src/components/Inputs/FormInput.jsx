import React from "react";

const FormInput = ({
  type,
  title,
  onClick,
  value,
  onChange,
  id,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-3 w-full  uppercase text-gray-500 font-light ">
      {/* <label htmlFor="">{title || "labeel"}</label> */}
      <input
        className=" py-3 rounded-sm  border-b-2 outline-none"
        type={type || "text"}
        placeholder={placeholder || "dummy"}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;