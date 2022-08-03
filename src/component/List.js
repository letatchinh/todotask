import React, { useState } from 'react'
import Card from './Card';
import { v4 } from 'uuid';
export default function List(props) {
    const [data,setData] = useState(JSON.parse(localStorage.getItem('data')) || []);
    const [reset,setReset] = useState(true);
    const onHangdleReset = () => setReset(!reset);
  return (
   <div className='d-flex flex-wrap p-3 gap-3 w-75'>
       {
          data.map(e => <Card click={onHangdleReset} this={e} key={v4()} status2={e.status2} title={e.title} Creator={e.creator} Description={e.description}/>)
       }
       </div>
  )
}
