import React, {  useState } from 'react'
import Button from '@atlaskit/button';

import 'react-toastify/dist/ReactToastify.css';
export default function Card(props) {
  const [item,setItem] = useState(props.this);
  const  onHandClickChangeStatus = () => {
    switch (item.status2) {
      case  "Doing":
        item.status2 = 'Done';

        break;
      case  "Done":
        item.status2 = 'New';

        break;
      case  "New":
        item.status2 = 'Doing';

        break;
      default:
        break;
    }
 setItem(item);
 let data2 =  JSON.parse(localStorage.getItem('data'));
 data2.splice(item.id,1,item);
 localStorage.setItem('data',JSON.stringify(data2));
props.click()

  }
  const sty = {
    color : (props.status2 === "New") ? "green" : (props.status2 === "Doing") ? "orange" : "blue" 
  }
  return (
    <div style={{border : "2px solid skyblue" , borderRadius : "10px" , width : "23%"}}>
        <p>Title : {props.title}</p>
        <p>Creator : {props.Creator}</p>
        <p style={sty}>Status : {props.status2}</p>
        <p>Description :  {props.Description}</p>    
        <Button onClick={onHandClickChangeStatus}>{props.status2}</Button>
       
    </div>
  )
}
