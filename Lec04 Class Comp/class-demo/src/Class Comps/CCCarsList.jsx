import { Component, createFactory } from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import CCCar from "./CCCar";

const InitCarsList = [
  { id: 1, model: "BMW", speed: 200, color: 'red', lp: '11-11-11' },
  { id: 2, model: "porshe", speed: 180, color: 'green', lp: '22-22-22' }
];

export default class CCarsList extends Component {
  constructor(props) {
    super(props);

    this.inputModel = null;
    this.inputSpeed = null;

    this.state = {
      cars: InitCarsList,
      counter: InitCarsList.length
    };
  }

  cngModel = (e) => {
    //this.setState({ inputModel: e.target.value });
    this.inputModel = e.target.value;
  }

  cngSpeed = (e) => {
    this.inputSpeed = e.target.value;
  }

  btnAddCar = () => {
    let newCounter = this.state.counter + 1;
    let newCars = [...this.state.cars,
    {
      id: newCounter, model: this.inputModel,
      speed: this.inputSpeed,
      color: 'red', lp: newCounter + '-11-11'
    }]
    console.log(newCars);
    this.setState({ cars: newCars, counter: newCounter });
  }

  render() {
    let carsStr = this.state.cars.map((car, ind) =>
      <CCCar id={car.id} model={car.model}
        speed={car.speed} color={car.color} lp={car.lp} key={ind} />);

    return (
      <div style={{ border: '1px solid white' }}>
        model = <input type="text" onChange={this.cngModel} /> {this.state.inputModel} <br />
        speed = <input type="number" onChange={this.cngSpeed} /> <br />
        <button onClick={this.btnAddCar}>Add Car</button>
        <div>LIST:</div>
        {carsStr}
      </div>
    );
  }
}