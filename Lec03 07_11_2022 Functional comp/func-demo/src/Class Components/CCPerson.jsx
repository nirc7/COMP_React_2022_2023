import { Component } from "react";

export default class CCPerson extends Component {
  constructor(props) {
    super(props);
    let num = 8;
    this.name = "sarit";

    this.state = {
      id: this.props.id,
      name: 'danny',
      grade: 100
    };
  }

  btnAddSmile = () => {
    console.log(this.name);
    this.name = this.name+ ":)";
    console.log(this.name);
   }

  render() {
    //this.name = "saar";
    return (
      <div style={{ border: '2px dashed green', padding: 10 }}>
        <p>CCPerson</p>
        name = {this.name + ":)"} <br />
        <button onClick={this.btnAddSmile}>add smile</button>
      </div>
    );
  }
}