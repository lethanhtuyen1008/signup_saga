import React, { Component } from "react";
import "./App.css";
import 'antd/dist/antd.css';
import SignUp from './components/SignUp';

class App extends Component {
  handForm = async (func) =>{
    await func();
  }
  render() {
    return (
      <div className="App">

        <SignUp handForm = {this.handForm }/>

      </div>
    );
  }
}

export default App;
