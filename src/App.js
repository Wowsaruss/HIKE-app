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
      incomplete: [],
      complete: []
    }
    this.newTrail = this.newTrail.bind(this)
  }

componentDidMount(){

  }

  newTrail(name, city, state){
    var obj = {
      name,
      city,
      state
    }

    axios.post("http://localhost:3006/api/create", obj).then((response) => {
      this.setState({
        incomplete: response.data

      })
    })

    this.setState({
      incomplete: [...this.state.incomplete, obj]
    })
  }
  
 render() {
    return (
      <div className="App">

          <div name="hero">
            <Header />
          </div>

          <div name="track">
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
