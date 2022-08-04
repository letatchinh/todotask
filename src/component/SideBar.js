import React, { useState } from 'react'
import Button from "@atlaskit/button";
import { Link } from "react-router-dom";
export default function SideBar(props) {
    const [data,setData] = useState(JSON.parse(localStorage.getItem('data')) || [])
    const handleSaveDataNew = () => {
        localStorage.setItem("dataNew",JSON.stringify(data.filter((e) => e.status2 === "New")));
        props.click();
    }
    const handleSaveDataDoing = () => {
        localStorage.setItem("dataDoing",JSON.stringify(data.filter((e) => e.status2 === "Doing")));
        props.click();
    }
    const handleSaveDataDone = () => {
        localStorage.setItem("dataDone",JSON.stringify(data.filter((e) => e.status2 === "Done")));
        props.click();
    }
  return (
    <>
        <Link to="/todotask"><Button   appearance="warning" shouldFitContainer>All Task</Button></Link>
        <Link to="datanew"><Button onClick={handleSaveDataNew} appearance="warning" shouldFitContainer>New Task</Button></Link>
        <Link to="datadoing"><Button onClick={handleSaveDataDoing} appearance="warning" shouldFitContainer>Doing Task</Button></Link>
        <Link to="datadone"><Button onClick={handleSaveDataDone} appearance="warning" shouldFitContainer>Done Task</Button></Link>
        
    </>
  )
}
