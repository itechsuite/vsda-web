import React from "react";

const Banner = ({ link, content }) => {
  return (
    <div
      className="w-full min-h-[70vh] relative"
      style={{
        backgroundImage: `url(${link}) `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        //   background: "rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="bg-orange-300 w-2/4 px-3 py-5 absolute bottom-5 right-5">
        {content ? (
          content
        ) : (
          <p className="italic">
            DId the JIB Gold Card package, incredibly good value for money,
            great lecturers, good facilities. i learned so much more than i
            thought was required to become an Electrician. Excellent support
            from the centre, it was all really good and i'm relle\y pleased. My
            company will be using <span className="font-bold "> VSDA</span> for
            any training needs forward
          </p>
        )}
      </div>
      {/* <img src={link} alt="banner image" className="w-full" /> */}
    </div>
  );
};

export default Banner;
