import React, { useEffect, useState } from "react";
import Button from "@atlaskit/button";
import Textfield from "@atlaskit/textfield";
export default function Search(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")));
  }, [localStorage.getItem("data")]);

  return (
    <>
      <Textfield 
        elemAfterInput={<Button >Search</Button>}
        onChange={props.search}
      />
    </>
  );
}
