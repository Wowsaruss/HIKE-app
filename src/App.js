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
  
  // axios.get("http://localhost:3006/api/create").then((response) => {
  //   this.setState({
  //       incomplete: response.data
  //     })
  //   })
  }

  newTrail(name, city, state){
    var obj = {
      name,
      city,
      state
    }
// axios.post("http://localhost:3006/api/create", obj).then((response) => {
//     console.log(response)
// })

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
    // console.log(this.state.incomplete)
    return (
      <div className="App">
        {/* POINTS
            1 Flexbox
            1 Bootstrap
            1 Fully Responsize CSS
            1 Custom Animation
            1.5 3 Functional Components */}

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
