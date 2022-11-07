
export default function Student(props) {

  let num = 87;
  num++;
  console.log(num);
  //props.grade = num;
  //num = props.grade + 5;
  console.log(props.stam);


  function btnAddOne() {
    num++;
    console.log(num);
  }

  function chnTxtNum(e) {
    console.log(e.target.value);
  }


  if (80 < num) {
    return (
      <div>
        Student <br />
        id = {props.id} <br />
        name = {props.name} <br />
        grade  = {props.grade} <br />
        num = {num} <br />
        <button onClick={btnAddOne}>add one</button> <br />
        <input type="text" onChange={chnTxtNum} />
      </div>
    );
  }
  else {
    return (<div>no over 80!</div>);
  }
}

export function Eli(props){
  return(
    <div>Eli</div>
  );
} 