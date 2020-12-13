import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main.js';
import Navigation from './Navigation.js';

class App extends React.Component {

  render() {
    return(
      <BrowserRouter>
        <div className= 'app'>
         <Navigation />
         <Main />
        </div>
      </BrowserRouter>
    );}

}
export default App;
