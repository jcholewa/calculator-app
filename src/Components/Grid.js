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
        </div> <br/>
        <div className="delete-row">
          <button>DEL</button>
        </div>
      </div>
    );
  }

  getInput = event => {
    event.preventDefault();

    if (event.target.id !== '=') {
      const { inputValue } = this.state;
      const newInput = [...inputValue, event.target.id];
      this.setState({ inputValue: newInput });
    } else {
      this.setState({ inputValue: eval(this.state.inputValue.join("")) })
    }
  };
}

export default Grid;
