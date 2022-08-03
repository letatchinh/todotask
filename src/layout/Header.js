import React, { useState } from "react";
import Button from "@atlaskit/button";
import {Link} from 'react-router-dom';
import Search from "../component/Search";
export default function Header(props) {
  const [status,setStatus] = useState(true);
  const [ten,setTen] = useState("Create Task");
  const change = () => {
    setStatus(!status);
   ten === "Back" ?  setTen("Create Task") :  setTen("Back")
  }
  return (
    <div className="bg-primary d-flex justify-content-between">
     <Link onClick={change} to={status ? "add" : "/"} ><Button style={{width : "200px"}} appearance="primary">
       {ten}
       </Button></Link>
      <div className="w-25">
        <Search reRender={props.reRender}  />
      </div>
    
    </div>
  );
}
