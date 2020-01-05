import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  handleClick(){
    fetch('http://localhost:30001//homes/index')
      .then((res)=> res.json())
      .then((res) => console.log(res))
      .catch((error) => {console.log(error)})
  }

  render(){
    return (
      <div className="App">
          <h1>hello</h1>
          <button onClick={()=> this.handleClick()}>クリック</button>
      </div>
    );
  }
}

export default App;
