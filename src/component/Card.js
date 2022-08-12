import React, {  useContext, useState } from 'react'
import Button from '@atlaskit/button';
import {URL} from '../Constant'
import 'react-toastify/dist/ReactToastify.css';
import { TestContext } from '../App';
import axios from 'axios';
export default function Card(props) {
  const value = useContext(TestContext);
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
    axios.put(`${URL}/${item.id}`,item)
    props.click();
  }
  const deleteItem = async() => {
 await axios.delete(`${URL}/${item.id}`);
  value.setData2(value.data.filter((items) => items.id !== item.id))
    // value.setData2();
    console.log("data sau khi xoa",value.data);
    props.click();
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
        <Button appearance='primary' onClick={onHandClickChangeStatus}>{props.status2}</Button>
       <Button appearance='danger' onClick={deleteItem}>Delete</Button>
    </div>
  )
}
