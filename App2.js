import React, { Component } from 'react';
import './App.css';
import ListItem from './Components/ListItem'
import Button from './Components/Button'
import dataFile from './data'
class App extends Component {
  constructor(){
   super()
    this.state = {
      data: []
      id: 0
    }
  }
  
  handlePaging = (num) => {
    if(this.state.id === 0 && num === -1) {
      this.setState({
        id: 24
      })
    } else if (this.state.id === 24 && num === 1) {
      this.setState({
        id: 0
      })
    } else {
      this.setState({
        id: this.state.id + num
      })
    }
  }
  render(){
    const {id} = this.state.data;
    return (
    <div className="App">
      <div className='home'>HOME</div>
      <div className='info'></div>
      <ListItem person={this.state.data[this.state.id]}/>
      <div className='buttons'>
      <a onClick={() => {this.handlePaging(-1)}}>previous</a>
        <Button name={'Edit'}/>
        <Button name={'Delete'}/>
        <Button name={'New'}/>
      <a onClick={() => {this.handlePaging(1)}}>next</a>
        </div>
    </div>
    );
 }
}
export default App;