import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App1 from "./App1"
import FormApp from "./form/App"
import {UserContextProvider as FormContextProivder} from "./form/userContext"
import UserContext from "./userContext"
import {ThemeContextProvider} from "./themeContext"

ReactDOM.render(
  <div>
     <UserContext.Provider value = {"dark"}>
      <App/>
    </UserContext.Provider>
    <hr/>
    
    <ThemeContextProvider>
      <App1/>
    </ThemeContextProvider>
    <hr/>

    <FormContextProivder>
      <FormApp/>
    </FormContextProivder>
  </div>

  ,document.getElementById('root')
);

