import React from "react";

const TextInput = (
  { type, title, onClick, value, onChange, id, placeholder },
  ...props
) => {
  return (
    <div className="flex flex-col gap-3 w-full  uppercase text-gray-500 font-light ">
      <label htmlFor="">{title}</label>
      <input
        className="px-2 py-3 rounded-sm"
        type={type || "text"}
        placeholder={placeholder}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
