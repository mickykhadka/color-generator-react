import React, { Component } from "react";
import Box from "./Box";
import BoxForm from "./BoxForm";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
    };
    this.createBoxes = this.createBoxes.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }
  createBoxes(box) {
    this.setState({ boxes: [...this.state.boxes, box] });
  }
  removeBox(id) {
    this.setState({
      boxes: this.state.boxes.filter((currBox) => currBox.id !== id),
    });
  }
  render() {
    const boxes = this.state.boxes.map((box) => (
      <Box
        key={box.id}
        id={box.id}
        removeBox={this.removeBox}
        height={box.height}
        width={box.height}
        color={box.color}
      />
    ));
    return (
      <div style={{ textAlign: "left" }}>
        <h1>Colored Box Maker From Input</h1>
        <BoxForm box={this.createBoxes} />
        {boxes}
      </div>
    );
  }
}

export default BoxList;
