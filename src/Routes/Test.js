import React, { useEffect,useState } from 'react'

const Test = () => {
  const [val,setvalue]= useState();
  const data = "OK"
  useEffect(()=>{

    setvalue(data);
    console.log(val);
  },[val])
    
  return (
    <div>Test Deployment</div>
  )
}

export default Test