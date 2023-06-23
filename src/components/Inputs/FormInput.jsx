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
      className={`flex flex-col gap-3 w-full  uppercase   font-semibold text-[#495057]    ${className}`}
    >
      {/* <label htmlFor="">{title || "labeel"}</label> */}
      <input
        disabled={disabled}
        className={
          " py-3 rounded-sm  border-b-[1px] border-[#20247b] outline-none bg-transparent w-full"
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
