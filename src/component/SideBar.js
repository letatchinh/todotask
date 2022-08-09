import React, { useState } from 'react'
import Button from "@atlaskit/button";
import { Link } from "react-router-dom";
export default function SideBar(props) {
    const handleSaveDataNew = () => {
        props.click();
    }
  return (
    <>
        <Link to="/todotask/todotask/1"><Button   appearance="warning" shouldFitContainer>All Task</Button></Link>
        <Link to="/datanew/datanew/1"><Button onClick={handleSaveDataNew} appearance="warning" shouldFitContainer>New Task</Button></Link>
        <Link to="/datadoing/datadoing/1"><Button onClick={handleSaveDataNew} appearance="warning" shouldFitContainer>Doing Task</Button></Link>
        <Link to="/datadone/datadone/1"><Button onClick={handleSaveDataNew} appearance="warning" shouldFitContainer>Done Task</Button></Link>
        
    </>
  )
}
