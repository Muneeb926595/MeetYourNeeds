import { Redirect } from "react-router-dom";
import React from "react";

import Header from "../@modules/header/DesktopHeader";

const AdminLayout = (props) => {
  if (
    !(
      localStorage.getItem("access_token") &&
      localStorage.getItem("userId") &&
      localStorage.getItem("admin")
    )
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

export default AdminLayout;
