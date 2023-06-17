import React from "react";

const FormInput = ({
  type,
  title,
  onClick,
  value,
  onChange,
  id,
  placeholder,
  className,
  disabled,
}) => {
  return (
    <div
      className={`flex flex-col gap-3 w-full  uppercase text-gray-500 font-light   ${className}`}
    >
      {/* <label htmlFor="">{title || "labeel"}</label> */}
      <input
        disabled={disabled}
        className={
          " py-3 rounded-sm  border-b-2 outline-none bg-transparent w-full"
        }
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
