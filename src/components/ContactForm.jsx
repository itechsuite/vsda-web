import React from "react";
import Banner from "./Banner";
import TextInput from "./Inputs/TextInput";

const ContactForm = () => {
    return (
        <div className="flex flex-col items-center px-10 py-4 min-h-[400px]">
            <p className="font-light  text-3xl"> Get a response today</p>
            <p className="font-normal">
                {" "}
                Do you want to say hello or find more about what we offer?
            </p>
            <form action="" className="w-full flex flex-col gap-5">
                <TextInput
                    title={"Name"}
                    placeholder={"enter name"}
                    id={"name"}
                    type={"text"}
                />
                <TextInput
                    title={"Email Address"}
                    placeholder={"a@1234.com"}
                    id={"email"}
                    type={"email"}
                />
                <TextInput
                    title={"Phone Number"}
                    placeholder={"080XXXXXXX"}
                    id={"phonenumber"}
                    type={"text"}
                />
                <TextInput
                    title={"Message"}
                    placeholder={"enter message"}
                    id={"name"}
                    type={"text"}
                />

                <button className="w-full bg-black px-3 py-3 text-white font-bold">
                    {" "}
                    Send
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
