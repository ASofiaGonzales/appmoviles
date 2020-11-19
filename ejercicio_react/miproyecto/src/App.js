import React from 'react'; 
import logo from './logo.gif';
import './App.css';

const request = require('request-promise');

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                inputField: "Value", personaje: null
            };
            
            this.updateInputValue = this.updateInputValue.bind(this);
          }
handlerBtn = () => {
            var options = {
                method: 'GET',
                uri: "https://swapi.py4e.com/api/people/" + this.state.inputField,
                json: true
            };
            var response = request(options).then(personaje => {

                console.log(personaje.name);
                console.log(personaje.gender);
                console.log(personaje.height);
                console.log(personaje.mass);
                this.setState({       
                    personaje: personaje
                })
                console.log(this.state);
            });
             }

      updateInputValue(evt) {

          this.setState ({inputField: evt.target.value});
 }

 render() {   
  return (
     <div className="App">
       <header className="App-header">
           <img src={logo} className= "App.logo"alt ="logo" />
         <h2>Elige un número y ¡Adivina el personaje de Star Wars!</h2>
         <input type="text" onChange={ this.updateInputValue} onKeyPress={this.handlerPress} placeholder='Ingrese un número' />
          <button onClick={this.handlerBtn}> Adivinar </button>
          {this.state.personaje &&   <div> 
              <h3>El personaje es: {this.state.personaje.name}</h3>
              
                  <p>Género: {this.state.personaje.gender}</p>
                  <p>Su altura es: {this.state.personaje.height} cm</p>
                  <p>Su peso es: {this.state.personaje.mass} kg</p>
                  </div>  
                  }
                  </header>
                  </div>
     );
}}
export default App;