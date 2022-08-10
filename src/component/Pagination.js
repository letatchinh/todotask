import React, { useEffect, useMemo, useState } from 'react'
import Button from "@atlaskit/button";
import { v4 } from 'uuid';
import { Link } from "react-router-dom";
export default function Pagination(props) {
    const [active,setActive] = useState(1);
    const [limitPage,setLimitPage] = useState([]);
    useMemo(() => {
      setActive(1)
    },[props.page])
    useMemo(() => {
        setLimitPage(props.data.slice(active-1,active + 3));
    },[active,props.data]);
  return (
    <div style={(props.data.length > 1 ) ? {display : "inline-block"} : {display : "none"}}>
     <Link to={`${props.page}/${1}`}>
    <Button 
    isDisabled={active === 1}
     onClick={() => setActive(1)}>First</Button>
     </Link>
    <Link to={`${props.page}/${active-1}`}><Button 
     isDisabled = {active === 1} 
      onClick={() => setActive(active-1)}>Pre</Button>
      </Link>
    {
        limitPage.map(e => <Link key={v4()} to={`${props.page}/${e}`}> <Button  onClick={() => setActive(e)}  isSelected={active === e}  key={v4()}>{e}</Button></Link>)
    }
    <Link to={`${props.page}/${active+1}`}>
    <Button 
    isDisabled={active === props.data.length}
     onClick={() => setActive(active+1)}>Next {active}/{props.data.length}</Button>
     </Link>
     <Link to={`${props.page}/${props.data.length}`}>
    <Button 
    isDisabled={active === props.data.length}
     onClick={() => setActive(props.data.length)}>Last</Button>
     </Link>
    </div>
  )
}
