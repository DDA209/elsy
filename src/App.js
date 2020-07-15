import React from 'react';
import Person from './components/Person.js';
import HeartRate from './components/HeartRate.js';

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
  render() {
    return(
      <div>{/* élément qui sera affiché */}
        <div className="container-fluid"> 
          <Person />
          <HeartRate heart={MIN_HEART}/>
           {/* <p>Battements de coeur: {MIN_HEART}</p>
          <p>Température : {MIN_TEMPERATURE}</p>
          <p>Nombre de pas : {MIN_STEPS}</p> */}
        </div>
      </div>
    );
  }
}

export default App;