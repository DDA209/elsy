import React from 'react';
import Person from './components/Person.js';
import HeartRate from './components/HeartRate.js';
import Temperature from './components/Temperature.js';
import Water from './components/Water.js';
import 'rc-slider/assets/index.css';

/**
 * Variables declarations
 */

const MIN_TEMPERATURE = -20;
const  MAX_TEMPERATURE = 40;
const  MIN_HEART = 80;
const  MAX_HEART = 180;
const  MIN_STEPS = 0;
const  MAX_STEPS = 50000;

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
    this.onTemperatureChange =this.onTemperatureChange.bind(this)
  }

  //// Méthodes de React LifeCycle- En premier

  //// Event listener (ex : OnClickBloublou OnChange) - En deuxième

  onHeartChange(val){ // paramètre val
  // onHeartChange = (val) => { // ou fonction flêchée ne pas Binder
    // console.log('App#onHeartChange val', val);
      this.setState({
      heart: val
    });

    // calculateWater
    this.calculateWater()
  }

  onStepChange = (val) => { // paramètre val 
  // onHeartChange(val){ // ou fonction call back qu'il faudra Binder
      // console.log('App#onStepChange val', val);
      this.setState({
      steps: val
    });

    // calculateWater
    this.calculateWater()
  }

  onTemperatureChange(val){
        this.setState({
        temperature: val
      });
  
      // calculateWater
      this.calculateWater()
    }
  //// méthodes (par ordre alphabétique / sub-render) - En troisième
  
  calculateWater() {
    const waterSteps = '0'
    const waterHeart = '0'
    const waterTemperature = '0'
    const water = '1.5'


    if(this.state.steps > 10000){
      waterSteps = this.state.steps - 10000 * 0.00002
      water += waterSteps
    }

    if(this.state.heart > 120){
      waterHeart = this.state.waterHeart - 120 * 0.0008
      water += waterSteps
    }

    if(this.state.temperature > 20){
      waterTemperature = this.state.waterTemperature - 20 * 0.002
      water += waterSteps
    }
    console.log('App#calculateWater');
  }

  /* state = {
       water: 0,
       heart: 120,
       temperature: -10,
       steps: 3000
     };*/

  render() {
    // console.log("App#render this.state.val",this.state.val);
    return(
      <div className="container-fluid"> {/* élément qui sera affiché */}
        <div className="row">
          <Water 
            water={this.state.water}
          />
          <Person 
            min={MIN_STEPS}
            max={MAX_STEPS}
            person={this.state.steps}
            onChange = {this.onStepChange}
          />
          <HeartRate 
            min={MIN_HEART}
            max={MAX_HEART}
            heart={this.state.heart}
            // onChange = {(a, b, c) => {
            //   console.log('a', a);
            //   console.log('b', b);
            //   console.log('c', c);
            // }}
            onChange = {this.onHeartChange}
          />
          {/* <p>Battements de coeur: {MIN_HEART}</p>
          <p>Température : {MIN_TEMPERATURE}</p>
          <p>Nombre de pas : {MIN_STEPS}</p> */}
          <Temperature
            min={MIN_TEMPERATURE}
            max={MAX_TEMPERATURE}
            temperature={this.state.temperature}
            onChange = {this.onTemperatureChange}
          />
        </div>
      </div>
    );
  }
}

export default App;