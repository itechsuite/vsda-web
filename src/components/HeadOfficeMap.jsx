import React from "react";

const HeadOfficeMap = () => {
  return (
    <div className="flex justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.660638129738!2d7.0669074!3d4.828204499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cd172742b501%3A0xc5bbf87d34d5c2ef!2s18%20Trans%20Woji%20Rd%2C%20Rumuwaji%20500102%2C%20Port%20Harcourt%2C%20Rivers!5e0!3m2!1sen!2sng!4v1686763761152!5m2!1sen!2sng"
        width="80%"
        height="500"
        // style="border:0;"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default HeadOfficeMap;
