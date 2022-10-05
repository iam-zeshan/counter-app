import React, { Component } from "react";

class Counter extends Component {
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  badgeStyles = () => {
    this.styles = {
      backgroundColor: this.props.counter.value === 0 ? "yellow" : "red",
      fontSize: 20,
      fontWeight: "bold",
      padding: "5px 20px",
      borderRadius: "10px",
    };
    return this.styles;
  };
  render() {
    const { counter, onIncrement, onDelete } = this.props;
    return (
      <div>
        {this.props.counter.id}
        <span style={this.badgeStyles()} className="m-2">
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => onIncrement(counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDelete(counter.id)}
        >
          Delete
        </button>
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }

  formatCount() {
    //Whenever we've code repition like the below: then we'd better use the object destructuring
    // return this.state.value === 0 ? "Zero" : this.state.value;
    // let { value } = this.props.counter.value;
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;
