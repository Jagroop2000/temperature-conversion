import React from "react";
import './temperature-guide.css';
import { Row, Card } from "react-bootstrap";
import { NORMAL_TEMP, MILD_HOT, MILD_COLD, TOO_COLD, TOO_HOT } from "../../constant/constant";
import { ThemeContext } from "../../ContextAPI/ThemeContext";
import CurrentLocation from "../currentLocation/current-location";


 const TemperatureGuide = () => {
    
    const theme = React.useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    // NOTE : Here i am not able to reuseb Row >Card Component because image is set through locally and not from API.


        return (
            <div className="mt-4 col-md-12">
                <p className={darkMode? "textHead" :"textHeadDark"}>Don't know how to read Temperature  ? Learn from here &nbsp; <i class="fa-solid fa-book-open-reader"></i></p>
                {/* Normal Temperature  */}
                <Row>
                <div className="col-md-7">
                <Row>

                    <Card className="col-md-3 col-sm-3 col-lg-3 detailCard ">
                        <img src={require('../../Images/flowers.png')} alt="Normal Temperature" className="img-fluid imgStyle" />

                    </Card>
                    <Card className="col-md-8 col-sm-8 col-lg-8 detailCard ">
                        <p className="text-center  mt-2 textStyle ">{NORMAL_TEMP}</p>
                    </Card>
                </Row>
                {/* Little Hot Temperature */}
                <Row>
                    <Card className="col-md-3 col-sm-3 col-lg-3 detailCard ">
                        <img src={require('../../Images/juice.png')} alt="Normal Temperature" className="img-fluid imgStyle" />

                    </Card>
                    <Card className="col-md-8 col-sm-8 col-lg-8 detailCard ">
                    <p className="text-center  mt-2 textStyle ">{MILD_HOT}</p>
                    </Card>
                </Row>
                {/* Too Hot  Temperature  */}
                <Row>
                    <Card className="col-md-3 col-sm-3 col-lg-3 detailCard ">
                        <img src={require('../../Images/hot-deal.png')} alt="Normal Temperature" className="img-fluid imgStyle" />

                    </Card>
                    <Card className="col-md-8 col-sm-8 col-lg-8 detailCard ">
                    <p className="text-center  mt-2 textStyle ">{TOO_HOT}</p>
                    </Card>
                </Row>
                {/* Little Cold Temperature  */}
                <Row>
                    <Card className="col-md-3 col-sm-3 col-lg-3 detailCard ">
                        <img src={require('../../Images/snowflakes.png')} alt="Normal Temperature" className="img-fluid imgStyle" />

                    </Card>
                    <Card className="col-md-8 col-sm-8 col-lg-8 detailCard ">
                    <p className="text-center  mt-2 textStyle ">{MILD_COLD}</p>
                    </Card>
                </Row>
                {/* Too Cold Temperature  */}
                <Row>
                    <Card className="col-md-3 col-sm-3 col-lg-3 detailCard ">
                        <img src={require('../../Images/cold.png')} alt="Normal Temperature" className="img-fluid imgStyle" />

                    </Card>
                    <Card className="col-md-8 col-sm-8 col-lg-8 detailCard ">
                    <p className="text-center  mt-2 textStyle ">{TOO_COLD}</p>
                    </Card>
                </Row>
                </div>
                <div className="col-md-5">
                     <CurrentLocation darkMode={darkMode}/>
                </div>
                </Row>
            </div>
        );
    }

export default TemperatureGuide;