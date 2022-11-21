import React, { Component } from 'react';
import FCCarsList from '../Functional Comps/FCCarsList';
import FCInputs from '../Functional Comps/FCInputs';

const InitCarsList = [
  { id: 1, model: "BMW", speed: 200, color: 'red', lp: '11-11-11' },
  { id: 2, model: "porshe", speed: 180, color: 'green', lp: '22-22-22' }
];

export default class CCCarsListApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: InitCarsList,
      counter: InitCarsList.length
    };
  }

  AddCar = (model, speed) => {
    let newCounter = this.state.counter + 1;
    let newCars = [...this.state.cars,
    {
      id: newCounter,
      model: model,
      speed: speed,
      color: 'red',
      lp: newCounter + '-11-11'
    }]
    console.log(newCars);
    this.setState({ cars: newCars, counter: newCounter });
  }

  getId2DeleteFromCL = (i2Del) => {
    let newCarsList = this.state.cars.filter(car => car.id !== i2Del);
    this.setState({ cars: newCarsList });
  }

  render() {
    return (
      <div>
        <FCInputs sendMS={this.AddCar} /> <br />
        <FCCarsList cars={this.state.cars} sendId2DeleteFromCL={this.getId2DeleteFromCL} />
      </div>
    );
  }
}
