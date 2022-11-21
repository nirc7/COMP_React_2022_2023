import CCCar from "../Class Comps/CCCar";

export default function FCCarsList(props) {


  const getId2DeleteFromCar = (id2Del) => {
    props.sendId2DeleteFromCL(id2Del);
  }

  let carsStr = props.cars.map((car) =>
    <CCCar id={car.id}
      model={car.model}
      speed={car.speed}
      color={car.color}
      lp={car.lp}
      key={car.id}
      sendId2DeleteFromCar={getId2DeleteFromCar}
    />);

  return (
    <div style={{ border: '1px solid white' }}>
      <div>LIST:</div>
      {carsStr}
    </div>
  );
}