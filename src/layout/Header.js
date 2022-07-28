import React from "react";
import Button from "@atlaskit/button";
import Search from "../component/Search";
export default function Header(props) {
 console.log(props.name);
  return (
    <div className="bg-primary d-flex justify-content-between">
      <Button style={{width : "200px"}} onClick={props.click} appearance="primary">
        {props.name}
      </Button>
      <div className="w-25">
        <Search reRender={props.reRender}  />
      </div>
    </div>
  );
}
