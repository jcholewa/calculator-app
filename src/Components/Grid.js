import React, { Component } from 'react';
import Button from './Button';
import Screen from './Screen';

class Grid extends Component {
  renderButton(num) {
    return <Button value={num} />
  }

  render() {
    return (
      <div class="grid">
        <Screen />
        <div class="calculator-row">
          {this.renderButton('7')}
          {this.renderButton('8')}
          {this.renderButton('9')}
          {this.renderButton('/')}
        </div>
        <div class="calculator-row">
          {this.renderButton('4')}
          {this.renderButton('5')}
          {this.renderButton('6')}
          {this.renderButton('*')}
        </div>
        <div class="calculator-row">
          {this.renderButton('1')}
          {this.renderButton('2')}
          {this.renderButton('3')}
          {this.renderButton('-')}
        </div>
        <div class="calculator-row">
          {this.renderButton('.')}
          {this.renderButton('0')}
          {this.renderButton('=')}
          {this.renderButton('+')}
        </div>
      </div>
    )
  }
}



export default Grid