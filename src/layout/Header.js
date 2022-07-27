import React, { useEffect, useState } from "react";
import Button from "@atlaskit/button";
import Search from "../component/Search";
export default function Header(props) {
 
  return (
    <div className="bg-primary d-flex justify-content-between">
      <Button onClick={props.click} appearance="primary">
        Create New Task
      </Button>
      <div className="w-25">
        <Search  />
      </div>
    </div>
  );
}
