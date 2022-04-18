import React,{createContext, useReducer} from "react";

export const ThemeContext = createContext();

const initialState={
    darkMode : false,
}

const ThemeReducer = (state , action) => {
    switch (action.type) {
        case "LIGHTMODE":{
            return {darkMode : false,}
        }
        case "DARKMODE":{
            return {darkMode : true}
        }
        default:{
            return state
        }
    };
}


export  function ThemeProvider(props){

        const [state , dispatch] = useReducer(ThemeReducer , initialState);

        return <ThemeContext.Provider value={{state , dispatch}}>{props.children}</ThemeContext.Provider>
    }
