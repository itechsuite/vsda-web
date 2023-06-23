import React from "react";
import ContactForm from "../components/ContactForm";
import Banner from "../components/Banner";
import GetInTouch from "../components/GetInTouch";
import HeadOfficeMap from "../components/HeadOfficeMap";

const Contact = () => {
  return (
    <section className="min-h-[80vh]  px-5 py-10  " autoFocus>
      {/* <Banner /> */}

      <HeadOfficeMap />

      <GetInTouch />
    </section>
  );
};

export default Contact;
