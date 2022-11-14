
export default function FCStudent(props) {

  let bonus = props.grade;
  bonus += 5;


  function btnAdd2Bonus() {
    bonus++;
    console.log(bonus);
  }

  if (80 < bonus) {
    return (
      <div>
        <button onClick={btnAdd2Bonus}>Add 2 Bonus</button> <br />
        id={props.id} <br />
        name={props.name} <br />
        grade={props.grade} <br />
        bonus = {bonus}
      </div>
    );
  }
  else {
    return (
      <div>no iover 80!</div>
    );
  }
}