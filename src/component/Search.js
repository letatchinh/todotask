import React, { useEffect, useState } from "react";
import Button from '@atlaskit/button';
import Textfield from '@atlaskit/textfield';
export default function Search() {
    const [text, setText] = useState("");
    const [status,setStatus] = useState(true)
  const [data, setData] = useState([]);
  const onHandleSearch = () => {
    console.log("ok");
    console.log(text);
    console.log(data);
    const temp = data.filter((e) => e.title === text)
   localStorage.setItem('data',JSON.stringify(temp))
   setStatus(!status)
  };
  const changetext = (e) => {
    setText(e.target.value);
  };
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('data')))
  },[localStorage.getItem('data')])

  return (
    <>
         <Textfield elemAfterInput={ 
                <Button onClick={onHandleSearch}>Search</Button>
            } 
            value={text}
            onChange={changetext}
            />
    </>
  )
}
