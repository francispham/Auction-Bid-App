import React, { Component } from 'react'
import Test from './Test'

class Home extends Component {
  myFunc(){
    alert("i am myFunc");
  }

  render () {
    return (
      <main
        className="Welcome Home"
        style={{margin: '0 1rem'}}
      >
        <h1>Welcome Home</h1>
        <Test
          bar={this.myFunc}
          foo={3}/>
      </main>
    )
  }
}

export default Home;
