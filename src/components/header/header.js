import React,{useContext} from "react";
import './header.css';
import { FormCheck } from "react-bootstrap";
import { ThemeContext } from "../../ContextAPI/ThemeContext";



export const Header = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  
    const onClick = () => {
      if (darkMode) {
        theme.dispatch({ type: "LIGHTMODE" });
      } else {
        theme.dispatch({ type: "DARKMODE" });
      }
    }

    return(
        <div className="containerHeader">
            <img src={require('../../Images/temperatures.png')}  className='logo' alt="Logo"/>
            <h1 className={darkMode ? "heading" :"headingDark"}>Temperature Convertor</h1>
         
            
            <FormCheck 
             defaultChecked={true}
             type="switch"
             onChange={onClick}
             />
           
            
        </div>
    );
}