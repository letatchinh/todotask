import React, { useState ,useContext, useEffect, useCallback } from 'react'
import Card from './Card';
import { v4 } from 'uuid';
import Pagination from './Pagination';
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { TestContext } from '../App';
import {URL} from '../Constant'
import axios from 'axios';
export default function List(props) {
  const [dataFake , setDataFake] = useState([])
const fectData = useCallback( async () => {
  try {
    const {data} = await axios.get(URL);
    setDataFake(data);
    console.log("rerenderasdasd");
  } catch (error) {
    throw error
  }
},[URL])
  useEffect(() => {
   fectData();
   console.log("RErenderABC");
  },[fectData])
  const value = useContext(TestContext)
  let limit = 1;
  let pages =[];
  let page = (value.data.length % limit === 0) ? value.data.length / limit : ((value.data.length / limit) + 1) ;
for(let i = 1 ; i <= page ; i++){
  pages.push(i)
}
const notifyChange = () => toast.success("Success!",{
  autoClose: 1000,
});
  return (
   <div className='w-75'>
     <div className='d-flex flex-wrap p-3 gap-3 '>
     {value.data.length === 0 && <p>No data</p>}
       <Routes>
       {
        pages.map((e,index) => {
          let dataShow = value.data.slice(index * limit , index * limit + limit);
          return  <Route key={v4()} path={`${props.page}/${e}`} element={dataShow.map((e) =>
          <Card
           click={() => {value.reRender();notifyChange()}} 
           this={e} 
           index={index}
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
