// export default function Button(props){
//     function OnClickHandler(){
//         props.setCount(props.count+1)
//       } 

//       return (
//         <button onClick={OnClickHandler}>
//         Counter {props.count}
//       </button>
//       )
// }


// Button.jsx
export default function Button(props) {
    function ClickHaha() {
      props.setCount(props.count + 1);
    } 
  
    return (
      <button onClick={ClickHaha}>
        Counter {props.count}
      </button>
    );
  }

//   export default function Todo(props){}
  
