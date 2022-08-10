import React, { useEffect, useState } from "react";
import Button from "@atlaskit/button";
import Textfield from "@atlaskit/textfield";
export default function Search(props) {
  return (
    <>
      <Textfield 
        elemAfterInput={<Button >Search</Button>}
        onChange={props.search}
      />
    </>
  );
}
