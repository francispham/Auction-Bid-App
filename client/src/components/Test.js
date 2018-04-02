import React from 'react';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      num: 1,
      text: 'Hello'
    }

    this.addNum = this.addNum.bind(this);
    this.changeText = this.changeText.bind(this);
  }

  addNum(){
    const newNum = this.state.num + 1;
    this.setState({
      num: newNum
    })
  }

  changeText() {
    let newText =''
    if (this.state.text === 'Hello') {
      newText = 'There'
    } else {newText = 'Hello'}
    this.setState({
      text: newText
    })
  }
  render() {
    return (
      <div>
        I am Test compo, what is foo? {this.props.foo}
        <button onClick={this.props.bar}>Click to invoke Bar from parent</button>

        num is: {this.state.num}
        <button onClick={this.addNum}>add num</button>
        Text: {this.state.text}
        <button onClick={this.changeText}>Change</button>
      </div>
  )
  }
}

export default Test;
