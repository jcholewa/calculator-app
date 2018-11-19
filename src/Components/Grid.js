import React, { Component } from "react";
import Button from "./Button";
import Screen from "./Screen";

class Grid extends Component {
  state = {
    inputValue: []
  };
  renderButton(num) {
    return <Button value={num} getInput={this.getInput} />;
  }

  render() {
    return (
      <div className="grid">
        <Screen className="screen" inputValue={this.state.inputValue} />
        <div className="calculator-row">
          {this.renderButton("7")}
          {this.renderButton("8")}
          {this.renderButton("9")}
          {this.renderButton("/")}
        </div>
        <div className="calculator-row">
          {this.renderButton("4")}
          {this.renderButton("5")}
          {this.renderButton("6")}
          {this.renderButton("*")}
        </div>
        <div className="calculator-row">
          {this.renderButton("1")}
          {this.renderButton("2")}
          {this.renderButton("3")}
          {this.renderButton("-")}
        </div>
        <div className="calculator-row">
          {this.renderButton(".")}
          {this.renderButton("0")}
          {this.renderButton("=")}
          {this.renderButton("+")}
        </div>{" "}
        <br />
        <div>
          <button className="delete" onClick={this.delete}>
            DEL
          </button>
          <button className="delete" onClick={this.clear}>
            CLEAR
          </button>
        </div>
      </div>
    );
  }

  delete = event => {
    const { inputValue } = this.state;
    const newInput = inputValue.filter((value, index) => {
      return index !== inputValue.length - 1;
    });
    this.setState({ inputValue: newInput });
  };
  clear = event => {
    this.setState({ inputValue: [] });
  };

  getInput = event => {
    event.preventDefault();

    if (event.target.id !== "=") {
      const { inputValue } = this.state;
      const newInput = [...inputValue, event.target.id];
      this.setState({ inputValue: newInput });
    } else {
      let answer = eval(this.state.inputValue.join(""));
      this.setState({ inputValue: answer.toString().split("") });
    }
  };
}

export default Grid;
