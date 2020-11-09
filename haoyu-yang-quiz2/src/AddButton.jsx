import React from 'react';

export default class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diceArray: []
    };
  }

  diceIncrement() {
    this.setState({
      diceArray: [...this.state.diceArray, 0]
    });
  }

  render() {
    return (
      <div>
        {/* {this.state.diceArray.map(function (val) {
          return val;
        })} */}
        <button onClick={() => this.diceIncrement()}>Add</button>
      </div>
    );
  }
}
