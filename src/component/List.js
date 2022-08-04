import React, { useState } from 'react'
import Card from './Card';
import { v4 } from 'uuid';
export default function List(props) {
    // const [reset,setReset] = useState(true);
    
  return (
   <div className='d-flex flex-wrap p-3 gap-3 w-75'>
       {
          props.data.map(e => <Card click={() => props.click()} this={e} key={v4()} status2={e.status2} title={e.title} Creator={e.creator} Description={e.description}/>)
       }
       </div>
  )
}
