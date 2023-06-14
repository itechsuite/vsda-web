import React from "react";
import { Player } from "video-react";

const IntroVideo = () => {
  return (
    <div className="h-2/4 py-10 px-10 my-10  flex items-center justify-between md:flex-row flex-col">
      <div className="flex  flex-col gap-8 md:w-2/5 w-full py-5">
        <p className="font-black text-5xl ">Learn with Engr. Gabby</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          voluptatibus culpa. Molestias quae, ducimus magni nam hic non beatae
          iure rerum, culpa delectus ad illum dolorum consequatur. Possimus,
          nemo fuga!
        </p>
      </div>

      <video controls>
        <source src={require("../assets/videos/intro.mp4")} type="video/mp4" />
      </video>

      {/* <Player>
        <source src={require("../assets/videos/intro.mp4")} />
      </Player> */}
    </div>
  );
};

export default IntroVideo;
