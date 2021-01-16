import { Redirect } from "react-router-dom";
import React from "react";

import Header from "../@modules/header/DesktopHeader";

const Layout = (props) => {
  if (
    !(localStorage.getItem("access_token") && localStorage.getItem("userId"))
  ) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
