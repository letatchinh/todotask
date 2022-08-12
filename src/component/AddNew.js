import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { TestContext } from "../App";
import {URL} from '../Constant'
import axios from "axios";
function AddNew() {
  const value = useContext(TestContext)
  let navigate = useNavigate();
    const [valueForm,setValueForm] = useState({
      title : "" , 
      creator : "" ,
      description : "",
      status2 : "New",
    });
  const onChangeChung = (e) => {
    setValueForm(
      {
        ...valueForm,
        [e.target.name] : e.target.value
      }
    )
  }
  const onHandleClickSave = () => {
    axios.post(URL,valueForm);
    value.fecthData()
  }
  const onC = async() => {
   await onHandleClickSave();
   value.reRender();
    navigate("/todotask/todotask/1");
  }
  return (
 <form onSubmit={onC} className="mx-auto">
    
      <div className="d-flex my-2">
        <span style={{ width: "150px" }}> Title</span>
        <Textfield name="title" value={valueForm.title} onChange={onChangeChung} />
      </div>
      <div className="d-flex my-2">
        <span style={{ width: "150px" }}>Creator</span>
        <Textfield name="creator" value={valueForm.creator} onChange={onChangeChung} />
      </div>
      <div className="d-flex my-2">
        <span style={{ width: "150px" }}>Description</span>
        <Textfield name="description" value={valueForm.description} onChange={onChangeChung} />
      </div>
      <Button type="submit" >
        Add
      </Button>
  
 </form>
  );
}

export default AddNew;
