import React, { Component } from "react";
class NavBar extends Component {
  styles = {
    backgroundColor: "gray",
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
    padding: "5px 10px",
    borderRadius: "50%",
  };
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar{" "}
            <span style={this.styles} className="m-2">
              {this.props.totalCounters}
            </span>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
