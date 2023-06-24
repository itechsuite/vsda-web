import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#252933] text-base-content text-white">
      <div>
        <span className="footer-title">Services</span>
        <Link to={"/skills"} className="link link-hover">
          Skills Market Place{" "}
        </Link>
        <Link to={"/online"} className="link link-hover">
          Online Store
        </Link>
        <Link to={"/courses"} className="link link-hover">
          Courses
        </Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link to={"/about-us"} className="link link-hover">
          About us
        </Link>
        <Link to={"contact"} className="link link-hover">
          Contact
        </Link>
      </div>
      {/* <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div> */}
    </footer>
  );
};

export default Footer;
