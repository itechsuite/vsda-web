import React from "react";
import { Player } from "video-react";

const IntroVideo = () => {
  return (
    <div className="h-2/4 py-10 px-7 my-10  flex items-center justify-between">
      <div className="flex flex-col gap-8 w-2/5">
        <p className="font-black text-5xl ">Learn with Engr. Gabby</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          voluptatibus culpa. Molestias quae, ducimus magni nam hic non beatae
          iure rerum, culpa delectus ad illum dolorum consequatur. Possimus,
          nemo fuga!
        </p>
      </div>

      <div>
        <video controls>
          <source
            src={require("../assets/videos/intro.mp4")}
            type="video/mp4"
          />
        </video>
      </div>

      {/* <Player>
        <source src={require("../assets/videos/intro.mp4")} />
      </Player> */}
    </div>
  );
};

export default IntroVideo;
