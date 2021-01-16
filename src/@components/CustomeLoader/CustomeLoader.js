import LoadingOverlay from "react-loading-overlay";
import React from "react";

const CustomLoader = ({ loading, children }) => {
  return (
    <LoadingOverlay
      active={loading}
      spinner
      styles={{
        wrapper: {
          width: "100%",
          height: "100%",
        },
        overlay: {
          position: "fixed",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          display: "flex",
          textAlign: "center",
          fontSize: "1.2em",
          color: "#FFF",
          background: "rgba(0,0,0,0.7)",
          zIndex: "1400",
          transition: "opacity 500ms ease-in",
          opacity: 1,
        },
      }}
      text="Loading..."
    >
      {children}
    </LoadingOverlay>
  );
};
export default CustomLoader;
