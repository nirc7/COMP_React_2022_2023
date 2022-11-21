import React from 'react'

export default function FCInputs(props) {

  let inputModel = null;
  let inputSpeed = null;

  const cngModel = (e) => {
    //let setState({ inputModel: e.target.value });
    inputModel = e.target.value;
  }

  const cngSpeed = (e) => {
    inputSpeed = e.target.value;
  }

  const btnAddCar = () => {
    props.sendMS(inputModel, inputSpeed);
  }

  return (
    <div style={{
      border: '2px green dashed', display: 'flex', flexDirection: 'column',
      gap: 5, margin: 5, padding: 5
    }}>
      model = <input type="text" onChange={cngModel} /> <br />
      speed = <input type="number" onChange={cngSpeed} /> <br />
      <button className="btn btn-success" onClick={btnAddCar}>Add Car</button>
    </div>
  )
}
