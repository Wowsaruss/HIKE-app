import React, { Component } from 'react';
import Form from './Form';
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

        <link href="https://fonts.googleapis.com/css?family=Amatic+SC" rel="stylesheet"></link>

        <div>
          <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
        </div>



          <div className="App-header">
          <img className="App-logo animated shake" className="pulse" src="https://lh3.googleusercontent.com/WEcmkSnm_lH7VwRC-r4O1b2bGMeDusyVEBKuDpfFu8lR3TC-Dzd7YP9Uw8YP_zvp4O4=w300" alt="" />
          <h2 className="header-font animated infinite tada">HIKE!</h2>
          </div>

          <div>
          <Form addTrail={this.newTrail}/>
          </div>
          
          <p className="App-intro">Check out some other great hiking resources!</p>
          <ul className="link-flex">
          <li><a href="https://www.alltrails.com/mobile">
          <img className="link-size" src="https://farm5.staticflickr.com/4331/36781178376_c3afa36a8b.jpg" alt=""></img>
          </a></li>
          <li><a href="http://www.redcross.org/get-help/how-to-prepare-for-emergencies/mobile-apps">
          <img className="link-size" src="https://farm5.staticflickr.com/4344/36829054811_2fb20cea4c.jpg" alt=""></img>
          </a></li>
          <li><a href="http://weatherlive.info/">
          <img className="link-size" src="https://farm5.staticflickr.com/4433/36133854594_e9b45d84b5.jpg" alt=""></img>
          </a></li>
          </ul>

          <div><p>Copyright © Russell Hayes Web Design 2017</p></div>

      </div>
    );
  }
}

export default App;
