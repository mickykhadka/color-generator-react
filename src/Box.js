import React, { Component } from "react";

class Box extends Component {
  handleClick = () => this.props.removeBox(this.props.id);
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: `${this.props.width}px`,
            height: `${this.props.height}px`,
            backgroundColor: this.props.color,
          }}
        ></div>
        <button onClick={this.handleClick}>X</button>
      </div>
    );
  }
}

export default Box;
