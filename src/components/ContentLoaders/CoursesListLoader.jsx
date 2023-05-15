import React from "react";
import ContentLoader from "react-content-loader";

const CoursesListLoader = (props) => (
  <ContentLoader
    className="   px-4 "
    speed={2}
    // width={400}
    // height={300}
    viewBox="0 0 400 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="18" cy="152" r="11" />
    <rect x="41" y="146" rx="2" ry="2" width="30" height="10" className="" />
    <rect x="330" y="149" rx="2" ry="2" width="83" height="14" />
    <rect x="-15" y="18" rx="2" ry="2" width="500" height="100" />
    <rect x="-15" y="181" rx="0" ry="0" width="500" height="31" />
  </ContentLoader>
);

export default CoursesListLoader;
