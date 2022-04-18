import React from "react";
import './card.css';
import { Card, Row } from "react-bootstrap";



export default class TempCard extends React.Component {
 //Here temp refers to the Temperature
   state={
        isActiveC : false,
        isActiveF : false,
        tempUnit : "",
        tempValue : null,
        result : null,
        tempType:null
   }

   //This Function Change the Active State of Temperature Unit Selector Button and Store Value  for Future Use
    temperatureUnit =(value) =>{
      if(value === 'Celcius'){
          this.setState({ isActiveC : true , isActiveF : false , tempUnit: value , result:null ,tempValue : null})
          
      }
      else {
        this.setState({ isActiveC : false , isActiveF : true , tempUnit: value , result:null , tempValue : null})
       
      }

   }

   // Get Result after Calculations
   getResult = (event) => {
    event.preventDefault();
     const  {tempUnit , tempValue , isActiveC , isActiveF} = this.state;

     if(isActiveC === false && isActiveF === false ){
         alert("Please Choose Temperature Unit ");
         return;
     }
     if(tempValue === null  || tempValue === undefined){
              alert("Please Input Some Value");
              return;
     }
     if(tempUnit === 'Celcius'){
        let cal = ((tempValue* 1.8) + 32).toFixed(2); //Logic for C to F
        this.setState({result : cal})
     }
     if(tempUnit === 'Farenhiet'){
         let cal = ((tempValue -32)*(5/9)).toFixed(2); // Logic for F to C
         this.setState({result : cal})
         console.log(this.state.result);
     }
   
   }

    render() {
        return (
            <div className="col-md-12">
                
                <Row>
                    {/* Card for Taking Inputs Start's Here  */}
                    <Card className='col-md-6 boxStyle' >
                        <h2 className="text-center pt-3 boxheading"> Input Section :</h2>
                        <p className="subHead mt-4">Choose Temperature Unit :</p>
                        <Row className="justify-content-center">
                            <button type="button" 
                            className={this.state.isActiveC ?"btn btn-outline-info col-md-3 btnStyle col-sm-3 active" : "btn btn-outline-info col-md-3 btnStyle col-sm-3 "
                              }
                              onClick={() => this.temperatureUnit("Celcius")}
                              >Celcius</button>
                            <button type="button" 
                            className={ this.state.isActiveF ?"btn btn-outline-warning col-md-3 col-sm-3 btnStyle active" :"btn btn-outline-warning col-md-3 col-sm-3 btnStyle" }
                            onClick={ () => this.temperatureUnit("Farenhiet")}
                            >Farenhiet</button>
                        </Row>
                        <p className="subHead mt-4">Enter Temperature :</p>
                        <form className="justify-content-center text-center" onSubmit={(e) => this.getResult(e) }>
                            <div className="form-group">
                                <input type="number"  step="0.1" className="form-control mb-3"  placeholder="Enter Temperature .." 
                                 onChange={(e) => this.setState({tempValue : e.target.value}) }
                                />
                            </div>

                            <button type="submit" className="btn btn-primary  btnStyleSubmit">Convert</button>

                        </form>

                    </Card>
                    {/* Card for Taking Input Ends Here  */}
{/* ------------------------------------------------------------------------------------------------------------ */}
                    {/* Card Which Show Output start's Here  */}

                    <Card className='col-md-6 boxStyle'>
                        {this.state.result!=null ?
                            (
                    <p className="text-center pt-3  resultStyle  justify-content-center">{ this.state.result } &nbsp; {this.state.result ?this.state.isActiveC ?"°F" : "°C":""}</p>
                            ):(
                                <img src={require('../../Images/question.png')} className="questionmark img-fluid mx-auto d-block" alt="Questionmark" />
                            )
                        }
                    </Card>

                    {/* Card Which Show Output End's Here  */}
                </Row>
             
            </div>
            
        );
    }
}