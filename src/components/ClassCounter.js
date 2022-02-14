import React from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
  }

  plus() {
    this.setState({ count: this.state.count + 1 });
  }

  minus() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h4>{this.state.count}</h4>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    );
  }
}

export default ClassCounter;
