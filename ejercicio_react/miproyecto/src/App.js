import React from 'react';  
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
numberList = () => {
              return(<ul><li>{this.state.personaje.gender}</li>
              <li>{this.state.personaje.gender}</li>
              <li>{this.state.personaje.height}</li>
              <li>{this.state.personaje.mass}</li>
              <li>{this.state.inputField}</li></ul>)
              }
      updateInputValue(evt) {

          this.setState ({inputField: evt.target.value});
 }

 render() {   
  return (
     <div className="App">
       <header className="App-header">
         <h1>Elige un numero y ¡Adivina el personaje de Star Wars!</h1>
         <input type="text" onChange={ this.updateInputValue} onKeyPress={this.handlerPress} placeholder='Ingrese un número' />
          <button onClick={this.handlerBtn}> Adivinar </button>
          {this.state.personaje &&   <div> 
              <h2>Nombre del personaje: {this.state.personaje.name}</h2>
              <ul>
                  <li>Género: {this.state.personaje.gender}</li>
                  <li>Su altura es: {this.state.personaje.height} cm</li>
                  <li>Su peso es: {this.state.personaje.mass} kg</li>
                  </ul>
                  </div>  
                  }
                  </header>
                  </div>
     );
}}
export default App;