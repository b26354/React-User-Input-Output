import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

class App extends Component {
  state  = {
    userName: 'Jeff'
  }

  userChangedHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  render() {
    const style = {
      backgroundColor: 'lightgray',
      font: 'inherit',
      border: '2px solid green', 
      padding: '8px'
    };

    return (
      <div className="App">
        <UserInput 
          style={style} 
          changed={this.userChangedHandler}
          />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
