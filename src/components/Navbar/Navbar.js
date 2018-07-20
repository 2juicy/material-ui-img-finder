import React from "react";
import AppBar from "material-ui/AppBar";

const styles = {
  background: "linear-gradient(45deg, #FFB300 30%, #757575 90%)",
  boxShadow: "0 6px 10px grey, 0 6px 10px grey"
};

const Navbar = () => (
  <AppBar
    style={styles}
    titleStyle={{ textAlign: "center" }}
    title="Project 3"
  />
);

export default Navbar;
