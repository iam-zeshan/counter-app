import React from "react";

const NavBar = ({ totalCounters }) => {
  const styles = {
    backgroundColor: "gray",
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
    padding: "5px 10px",
    borderRadius: "50%",
  };
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span style={styles} className="m-2">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
