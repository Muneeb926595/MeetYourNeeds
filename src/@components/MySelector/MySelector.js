import React from "react";

import classes from "./MySelector.module.css";

const MySelector = ({ category, setCategory }) => {
  return (
    <select
      className={classes.mySelector}
      value={category}
      onChange={(event) => setCategory(event.target.value)}
    >
      <option value="Face">Face</option>
      <option value="Lip">Lip</option>
      <option value="Eye">Eye</option>
      <option value="Skincare">Skincare</option>
      <option value="Other">Other</option>
    </select>
  );
};
export default MySelector;
