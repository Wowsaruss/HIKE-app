import React from 'react';
import axios from "axios";

class Child extends React.Component {
    constructor(){
        super()
        this.state = {
          array: [],
          trail: "",
          city: "",
          country: ""
        }
      }

      updateTrail(input){
          console.log(input)
        this.setState({
            trail: input
        })
      }
      updateCity(input){
          console.log(input)
          this.setState({
              city: input
          })
      }
      updateCountry(input){
          console.log(input)
          this.setState({
              country: input
          })
      }


    render() {
        return(
            <div>
                <div className="main1">
                     <h1 className="App-intro">Keep track of your trails!</h1>
                        <p className="App-intro">Trails to Blaze</p>                
                 <div>
                     <form action="">
                         <ul className="form-submit">
                         <li>Trail Name:</li>
                         <li><input type="text" value={this.state.value} onChange={(e) => {this.updateTrail(e.target.value)}} /></li>
                         <li>City:</li>
                         <li><input type="text" value={this.state.value} onChange={(e) => {this.updateCity(e.target.value)}} /></li>
                         <li>State/Country:</li>
                         <li><input type="text" value={this.state.value} onChange={(e) => {this.updateCountry(e.target.value)}} /></li>
                         </ul>
                     </form>
                    <input className="button1" type="submit" value="Submit" onClick={() => {
                        this.props.addTrail(this.state.trail, this.state.city, this.state.country)}} />
                </div>
          <div>
              
          <ul className="info-box">
          {this.state.array.map(function(elem){
          return (<li>{elem}</li>)
          })}
          </ul>
          </div>

          <p className="App-intro">Trails Blazed</p>
                 </div>
                 <div>
                      <ul className="info-box">
                              {this.state.array.map(function(elem){
                              return (<li>{elem}</li>)
                              })}
                      </ul>
                 </div>
            </div>
        )
    }
}

export default Child
