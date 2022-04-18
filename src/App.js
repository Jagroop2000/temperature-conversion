import React,{useContext} from 'react';
import './App.css';
import { Header } from './components/header/header';
import TempCard from './components/card/card';
import TemperatureGuide from './components/temperatureGuide/temperature-guide';
import { ThemeContext } from './ContextAPI/ThemeContext';


 const  App =() => {

  const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return(
      <div className={darkMode ? "container" : "containerDark"}>
        <div>
       <Header />
       <br/>
       <TempCard/>
       <br/>
       <TemperatureGuide/>
      
       </div>
      </div>
  
    );
  }

export default App;
