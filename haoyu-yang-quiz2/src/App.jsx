import React from 'react';
import Dice from './Dice';
import { connect } from 'react-redux';

class App extends React.Component {
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

  diceDecrement() {
    const tmp = [...this.state.diceArray];
    const last = tmp[tmp.length - 1];
    console.log(tmp);
    tmp.splice(-1);
    this.props.dispatch({ type: 'REMOVE', diff: last });
    this.setState({
      diceArray: tmp
    });
  }

  render() {
    return (
      <div>
        <h1>Dice Roller</h1>
        <button onClick={() => this.diceIncrement()}>Add</button>
        <button onClick={() => this.diceDecrement()}>Remove</button>
        <br></br>
        {this.state.diceArray.map(function (val) {
          return <Dice number={val} />;
        })}
        <br></br>
        <div>Sum: {this.props.sum}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sum: state.sum
  };
}

export default connect(mapStateToProps)(App);
