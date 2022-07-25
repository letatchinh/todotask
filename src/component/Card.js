import React from 'react'
import Button from '@atlaskit/button';

export default function Card(props) {
  const sty = {
    color : (props.status2 === "New") ? "green" : (props.status2 === "Doing") ? "orange" : "blue" 
  }
  return (
    <div style={{border : "2px solid skyblue" , borderRadius : "10px" , width : "23%"}}>
        <p>Title : {props.title}</p>
        <p>Creator : {props.Creator}</p>
        <p style={sty}>Status : {props.status2}</p>
        <p>Description :  {props.Description}</p>    
        <Button onClick={props.click}>{props.status2}</Button>
    </div>
  )
}
