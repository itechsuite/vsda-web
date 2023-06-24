import { useState, useEffect } from "react";

function useScrollToTop() {
  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  //   return width;
}

export default useScrollToTop;
