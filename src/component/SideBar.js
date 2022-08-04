import React, { useState } from 'react'
import Button from "@atlaskit/button";
import { Link } from "react-router-dom";
export default function SideBar(props) {
    const handleSaveDataNew = () => {
        props.click();
    }
  return (
    <>
        <Link to="/todotask"><Button   appearance="warning" shouldFitContainer>All Task</Button></Link>
        <Link to="datanew"><Button onClick={handleSaveDataNew} appearance="warning" shouldFitContainer>New Task</Button></Link>
        <Link to="datadoing"><Button onClick={handleSaveDataNew} appearance="warning" shouldFitContainer>Doing Task</Button></Link>
        <Link to="datadone"><Button onClick={handleSaveDataNew} appearance="warning" shouldFitContainer>Done Task</Button></Link>
        
    </>
  )
}
