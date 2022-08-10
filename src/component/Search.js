import React, { useContext } from "react";
import Button from "@atlaskit/button";
import Textfield from "@atlaskit/textfield";
import { TestContext } from "../App";
export default function Search() {
  const value = useContext(TestContext)
  return (
    <>
      <Textfield 
        elemAfterInput={<Button >Search</Button>}
        onChange={value.onSearch}
      />
    </>
  );
}
