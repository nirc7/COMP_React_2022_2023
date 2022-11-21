import { Component } from "react";
import Button from '@mui/material/Button';

export default class CCCar extends Component {
  constructor(props) {
    super(props);

    let num = 7; //local varible
    this.number = 8;

    this.state = {
      id: this.props.id,
      lp: this.props.lp,
      speed: this.props.speed,
      model: this.props.model,
      color: this.props.color
    };
  }

  btnAddSpeed = () => {

    console.log('before', this.state.speed);
    //this.state.speed= 10//ERROR!
    //this.setState({ speed: this.state.speed + 1 });
    this.setState((prev) => ({
      speed: prev.speed + 1,
      model: 'porshe'
    }));
    console.log('after', this.state.speed);
    this.setState({ speed: this.state.speed + 1 });
    this.setState((prev) => ({
      speed: prev.speed + 1,
      color: 'red'
    }));
    console.log('after after', this.state.speed);
  }

  // btnDeleteCarID = () => {
  //   this.props.sendId2DeleteFromCar(this.state.id);
  // }

  render() {
    console.log('render ', this.state.speed);
    console.log(this.state.color == undefined);

    return (
      <div style={{ border: 'dashed 2px red', margin: 10, padding: 5 }}>
        <div>Car</div>
        <button onClick={this.btnAddSpeed}>AddSpeed</button> <br />
        propslp= {this.props.lp} <br />
        lp={this.state.lp} <br />
        id={this.state.id} <br />
        speed={this.state.speed} <br />
        model = {this.state.model} <br />
        color={this.state.color ? this.state.color : 'no color'} <br />
        number={this.number} <br />
        <Button variant="outlined" color="error"
          onClick={() => this.props.sendId2DeleteFromCar(this.state.id)} >X</Button>
      </div>
    );
  }
}