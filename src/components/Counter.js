import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  // function increment(){
  //   setCount(prevState =>{
  //     return [...prevState,`${count.lenght + 1}`]
  //   })
  // }



  return <div onClick={increment} 
  style={{
    display: 'flex', 
    justifyContent: "center",
    alignItems: "center",
    fontSize: '500px'
     }}
   >{count}</div>;
}

export default Counter;
