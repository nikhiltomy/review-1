import React, { Component } from 'react'
import './App.css';
import {Display} from './display';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      click:false,
      text:"Hello"
    }
  }
  render() {
    return (
      <div className="App">
       <Display/>
      </div>
    )
  }
}
