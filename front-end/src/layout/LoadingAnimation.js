import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const LoadingAnimation = () => {
  return (
    <div>
      <Player
        autoplay
        loop
        src="https://assets1.lottiefiles.com/packages/lf20_2svadkl0.json"
        style={{ height: "300px", width: "300px" }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </div>
  );
};

export default LoadingAnimation;
