import React from "react";
import loading from "../../assets/Images/loading.gif";

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        width: "56px",
        height: "56px",
      }}
    >
      <img
        style={{
          alignSelf: "center",
          display: "block",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
        src={loading}
        alt="laoding"
      />
    </div>
  );
}

export default Loader;
