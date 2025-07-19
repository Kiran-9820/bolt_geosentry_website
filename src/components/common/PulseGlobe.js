import React from "react";
import GlobeComponent from "./GlobeComponent";

const PulseGlobe = ({ imageUrl, altText }) => {
  return (
    <div className="central-globe">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={altText || "Globe Visualization"}
          className="globe-image"
        />
      ) : (
        <GlobeComponent />
      )}
      <div
        className="pulse-ring"
        style={{
          width: "100%",
          height: "100%",
          border: "2px solid rgba(17, 247, 229, 0.7)",
        }}
      ></div>
      <div
        className="pulse-ring delay-1"
        style={{
          width: "100%",
          height: "100%",
          border: "2px solid rgba(17, 247, 229, 0.6)",
        }}
      ></div>
      <div
        className="pulse-ring delay-2"
        style={{
          width: "100%",
          height: "100%",
          border: "2px solid rgba(17, 247, 229, 0.5)",
        }}
      ></div>
    </div>
  );
};

export default PulseGlobe;
