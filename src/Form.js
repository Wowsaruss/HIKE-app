import React from 'react';
import axios from "axios";

class Child extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          incomplete: props.incomplete,
          trail: "",
          city: "",
          country: ""
        }
      }

      updateTrail(input){
        this.setState({
            trail: input
        })
      }
      updateCity(input){
          this.setState({
              city: input
          })
      }
      updateCountry(input){
          this.setState({
              country: input
          })
      }

      componentWillReceiveProps(props){
        this.setState({
            incomplete: props.incomplete
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
                        <button className="button" type="submit" value="Submit" onClick={() => {
                            this.props.addTrail(this.state.trail, this.state.city, this.state.country)}} >Add Hike!
                        </button>
                    </div>
                    <div>
              
                        <ul className="info-box">
                            {this.state.incomplete.map(function(elem){
                            return (<li key={elem.name}>{elem.name} {elem.city} {elem.state}</li>)
                            })}
                        </ul>
                    </div>

                        <p className="App-intro">Trails Blazed</p>
                 </div>
                 <div>
                      <ul className="info-box">
                              {/* {this.state.incomplete.map(function(elem){
                              return (<li key={elem.name}>{elem.name}</li>)
                              })} */}
                      </ul>
                 </div>
            </div>
        )
    }
}

export default Child
