import React from 'react';
import Person from './components/Person.js';
import HeartRate from './components/HeartRate.js';
import 'rc-slider/assets/index.css';

/**
 * Variables declarations
 */

const MIN_TEMPERATURE = -20,
  MAX_TEMPERATURE = 40,
  MIN_HEART = 80,
  MAX_HEART = 180,
  MIN_STEPS = 0,
  MAX_STEPS = 50000;

class App extends React.Component{

  constructor(props) { // Est un méthode toujours mis en 1ere position de la classe
    super(props);

    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000
    };
    
    ///BIND ici
    this.onHeartChange =this.onHeartChange.bind(this)
  }

  //// Méthodes de React - En premier

  //// Event listener (ex : OnClickBloublou) - En deuxième

  //// méthodes (par ordre alphabétique) - En troisième
  onHeartChange(){
    let val = 'blublu'
  }

  /* state = {
       water: 0,
       heart: 120,
       temperature: -10,
       steps: 3000
     };*/

  render() {
    return(
      <div>{/* élément qui sera affiché */}
        <div className="container-fluid"> 
          <Person person={this.state.steps} />
          <HeartRate heart={val}
            min = {MIN_HEART}
            max = {MAX_HEART}
            onChange = {this.onHeartChange}
          />
           {/* <p>Battements de coeur: {MIN_HEART}</p>
          <p>Température : {MIN_TEMPERATURE}</p>
          <p>Nombre de pas : {MIN_STEPS}</p> */}
        </div>
      </div>
    );
  }
}

export default App;