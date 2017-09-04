import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import './App.css';

import axios from "axios";


class App extends Component {
  constructor(){
    super()
    this.state = {
      incomplete: [], complete: []
    }
    this.newTrail = this.newTrail.bind(this)
  }

componentDidMount(){
  console.log("Hello")
  axios.get("http://localhost:3006/api/hello").then((response) => {
    this.setState({
        incomplete: response.data
      })
    })
  }

  newTrail(name, city, state){
    var obj = {
      name,
      city,
      state
    }
    this.setState({
      incomplete: [...this.state.incomplete, obj]
    })
  }
  

  render() {
    console.log(this.state.incomplete)
    return (
      <div className="App">

          <div>
            <Header />
          </div>

          <div>
            <Form addTrail={this.newTrail} incomplete={this.state.incomplete}/>
          </div>

          <div>
            <Footer />
          </div>

      </div>
    );
  }
}

export default App;
