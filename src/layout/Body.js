import React, { useEffect, useState } from 'react'
import Button from '@atlaskit/button';
import Card from '../component/Card';
import AddNew from '../component/AddNew';
import { v4 } from 'uuid';
export default function Body(props) {
  console.log("renderBody")
  const notify = () => setRender(!render);
  const [render,setRender] = useState(true);
  const [data,setData] = useState([]);
  const [active,setActive] = useState();
  const [page,setPage] = useState(data.length);
  const [dataShow,setDataShow] = useState([])
  let tempData = (localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [])
  let limit =  4;
  let pageNav = [];
  for(let i = 1 ; i <= page ; i++){
    pageNav.push(i)
  }
  const onHandleChangeStatus = (e) => {
    let temp = e;
  switch (temp.status2) {
    case  "Doing":
      temp.status2 = 'Done'
      break;
    case  "Done":
      temp.status2 = 'New';
      break;
    case  "New":
      temp.status2 = 'Doing'
      break;
    default:
      break;
  }
  tempData.splice(temp.id,1,temp);
    localStorage.setItem('data',JSON.stringify(tempData));
   localStorage.setItem('dataTemp',JSON.stringify(dataShow));
   setData(tempData)
  }
  const onHandleChangePage = (e) => {
    const start = limit * e;
    const end = start + limit ;
    setDataShow(tempData.slice(start,end));
    setActive(e);
  }
  const onHandleChangeNewTask = () => {
    setDataShow(tempData.filter((e) => e.status2 === "New"))
  }
  const onHandlePreClick = () => {
    if(active === 0) return
    else onHandleChangePage(active-1);
    
  }
  const onHandleNextClick = () => {
    if(active === pageNav.length - 1) return
    else onHandleChangePage(active+1);

  }
  const onHandleChangeAllTask = () => {
    setDataShow(tempData)
   }
  const onHandleChangeDoingTask = () => {
    setDataShow(tempData.filter((e) => e.status2 === "Doing"))
  }
  const onHandleChangeDoneTask = () => {
    setDataShow(tempData.filter((e) => e.status2 === "Done"))
  }
  useEffect(() => {
    setDataShow((localStorage.getItem('dataTemp') ? JSON.parse(localStorage.getItem('dataTemp')) : []))
  },[localStorage.getItem('dataTemp')])
  useEffect(() => {
    setData((localStorage.getItem('data')) ?  JSON.parse(localStorage.getItem('data')) : []);
    setDataShow(tempData.slice(0,limit))
    // setActive(0)
    // if(pageNav.length > limitPage){
    //   setTempPage(pageNav.slice(0,limitPage))
    //   }
    setPage(((JSON.parse(localStorage.getItem('data')).length % limit === 0) ? JSON.parse(localStorage.getItem('data')).length/limit : Math.floor(JSON.parse(localStorage.getItem('data')).length/limit) + 1))
    console.log("load");
  }, [localStorage.getItem('data')]);

 
  return (
      <>
 
    <div className='d-flex'>
    <div style={{width : "200px"}}>
    <Button onClick={onHandleChangeAllTask} appearance="warning" shouldFitContainer>All Task</Button>
    <Button onClick={onHandleChangeNewTask} appearance="warning" shouldFitContainer>New Task</Button>
    <Button onClick={onHandleChangeDoingTask} appearance="warning" shouldFitContainer>Doing Task</Button>
    <Button onClick={onHandleChangeDoneTask} appearance="warning" shouldFitContainer>Done Task</Button>
    </div>
    <AddNew click={props.click} click2={notify} display2={(props.status) ? "none" : "block"}/>
    <div className='flex-wrap p-3 gap-3 w-75' style={{display : (props.status) ? "flex" : "none"}}>
    {
      dataShow.map((e,index) => <Card key={v4()} click={() => onHandleChangeStatus(e)} status2={e.status2} title={e.title} Creator={e.Creator} Description={e.Description}/>
      )
    }
    </div>
    </div>
  <div className='text-center' style={{display : (props.status) ? "block" : "none"}}>  
    <Button onClick={onHandlePreClick}>Pre</Button>
 { pageNav.map((e,index) =>  <Button style={{background : (index === active ) ? "red" : "none"}} onClick={() =>onHandleChangePage(index)} className='mx-2' key={v4()}>{e}</Button>)}

<Button onClick={onHandleNextClick}>Next</Button>
</div>

    </>
  )
}