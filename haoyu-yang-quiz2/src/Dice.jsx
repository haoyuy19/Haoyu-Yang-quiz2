import React from 'react';
import { connect } from 'react-redux';

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: this.props.number
    };
  }

  rollDice() {
    const newnum = Math.floor(Math.random() * 6) + 1;
    const newdiff = newnum - this.state.num;
    // console.log(this.props.sum);
    // console.log(newdiff);
    this.props.dispatch({ type: 'CHANGE', diff: newdiff });
    this.setState({
      num: newnum
    });
  }

  render() {
    return (
      <div>
        <div
          style={{
            display: 'inline-block',
            padding: '25px',
            border: 'grey 2px solid',
            textAlign: 'center'
          }}
          onClick={() => this.rollDice()}
        >
          {this.state.num}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sum: state.sum
  };
}

export default connect(mapStateToProps)(Dice);
