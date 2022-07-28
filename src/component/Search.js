import React, { useEffect, useState } from "react";
import Button from "@atlaskit/button";
import Textfield from "@atlaskit/textfield";
export default function Search(props) {
  const [text, setText] = useState("");
  const [status, setStatus] = useState(true);
  const [data, setData] = useState([]);
  const onHandleSearch = () => {
    const temp = data.filter((e) => e.title === text);
    localStorage.setItem("dataTemp", JSON.stringify(temp));
    console.log(temp);
    props.reRender();
  };
  const changetext = (e) => {
    setText(e.target.value);
  };
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")));
  }, [localStorage.getItem("data")]);

  return (
    <>
      <Textfield
        elemAfterInput={<Button onClick={onHandleSearch}>Search</Button>}
        value={text}
        onChange={changetext}
      />
    </>
  );
}
