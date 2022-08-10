import React, { useState ,useContext } from 'react'
import Card from './Card';
import { v4 } from 'uuid';
import Pagination from './Pagination';
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { TestContext } from '../App';
export default function List(props) {
  const value = useContext(TestContext)
  let limit = 1;
  let pages =[];
  let page = (props.data.length % limit === 0) ? props.data.length / limit : ((props.data.length / limit) + 1) ;
for(let i = 1 ; i <= page ; i++){
  pages.push(i)
}
const notify = () => toast.success("Change Success!",{
  autoClose: 1000,
});
  return (
   <div className='w-75'>
     <div className='d-flex flex-wrap p-3 gap-3 '>
     {props.data.length === 0 && <p>No data</p>}
       <Routes>
       {
        pages.map((e,index) => {
          let dataShow = props.data.slice(index * limit , index * limit + limit);
          return  <Route key={v4()} path={`${props.page}/${e}`} element={dataShow.map((e) =>
          <Card
           click={() => {value.reRender();notify()}} 
           this={e} 
           key={v4()} 
           status2={e.status2} 
           title={e.title} 
           Creator={e.creator} 
           Description={e.description}/> )}/>
        })
       }
       </Routes>
  
       </div>
       <Pagination page={props.page}  data={pages}/>
       <ToastContainer />
   </div>
  )
}
