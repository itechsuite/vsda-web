import React from "react";

const KeyNotesModel = ({ title, image }) => {
    return (
        <div className=" border flex flex-col px-10 py-10 justify-center items-center min-w-[200px]">
            {image}
            <p className="uppercase  text-gray-500 font-light text-sm">
                {title || "PAYMENT"}
            </p>
        </div>
    );
};

export default KeyNotesModel;
