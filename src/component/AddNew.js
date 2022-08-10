import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { TestContext } from "../App";
function AddNew(props) {
  const value = useContext(TestContext)
  let navigate = useNavigate();
  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")) || [])
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

  useEffect(() => {

    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  const onHandleClickSave = () => {
    valueForm.id = data.length
    setData([...data,valueForm])
  }
  const onC = async() => {
   await onHandleClickSave();
   value.reRender();
    navigate("/todotask/todotask/1");
  }
  return (
    <div className="mx-auto">
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
      <Button onClick={onC}>
        Add
      </Button>
    </div>
  );
}

export default AddNew;
