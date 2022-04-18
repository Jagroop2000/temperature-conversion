import React, { Component } from "react";
import './current-location.css'
// Importing geolocated reducer function
import { geolocated } from "react-geolocated";

import { Table } from "react-bootstrap";

const API_KEY = 'ef714f1aec9df5a1382c865d413cb12a';
const base_url = "https://api.openweathermap.org/data/2.5/weather?";
class CurrentLocation extends Component {

    state={
        result :null,
        latitude:null,
        longitude:null,
        status :"",
        country :"",
        location:""
    }

    componentDidMount(){
   var res= this.getTemperature(this.state.latitude , this.state.longitude)
   this.setState({result : res})
    }


     getTemperature = (lat, lon) =>{
       let i =0
    console.log(i++);
      //https://api.openweathermap.org/data/2.5/weather?lat=30.900965&lon=75.8572758&appid=a517bf9144678c00f59adea793a50092
    
      fetch(`${base_url}lat=${lat}&lon=${lon}&appid=${API_KEY}`)
                    .then((res) => res.json())
                    .then((json) => {
                    
                      this.setState({
                        result : json.main.temp , 
                        status : json.weather[0].description,
                        country : json.sys.country,
                        location : json.name

                      })

                       
                    })

                   
    }


render() {
   let nightMode = this.props.darkMode;
	// Check geolocation supported in
	// browser or not
	return this.props.isGeolocationAvailable ? (

	// Check location is enable in
	// browser or not
	this.props.isGeolocationEnabled ? (

		// Check coordinates of current
		// location is available or not
		this.props.coords ? (
		
   // text-center mt-2
    <div>
      
        <h1 className={nightMode ? "text-center mt-2 headStyle" : "text-center mt-2 headStyleDark"}> Your Data  :</h1>
        <Table striped bordered hover size="sm"  variant={nightMode ? "dark" : 'light'}>
  <thead>
    <tr>
     
      <th>Latitude :</th>
      <th>Longitude :</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>{this.props.coords.latitude}</td>
      <td>{this.props.coords.longitude}</td>
    </tr>
  </tbody>
</Table>
<button type="button" className="btn btn-info text-center justify-content-center btnCenter"
 onClick={ () => this.getTemperature(this.props.coords.latitude,this.props.coords.longitude)}
>Get Result</button>
<p className={ nightMode ? "description" : "descriptionDark"}> Temperature in Kelvin : &nbsp; {this.state.result}</p>
<p className={ nightMode ? "description" : "descriptionDark"}> Status : &nbsp; {this.state.status}</p>
<p className={ nightMode ? "description" : "descriptionDark"}> Country : &nbsp; {this.state.country}</p>
<p className={ nightMode ? "description" : "descriptionDark"}> Location :  &nbsp; {this.state.location}</p>

</div>
		) : (
		<h1>Getting the location data</h1>
		)
	) : (
		<h1>Please enable location on your browser</h1>
	)
	) : (
	<h1>Please, update your or change the browser </h1>
	);
}
}


export default geolocated()(CurrentLocation);
