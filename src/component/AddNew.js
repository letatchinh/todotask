import React, { useEffect, useState } from 'react'
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
export default function AddNew(props) {
  const [data,setData] = useState(localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [])
  const [title,setTitle] = useState('');
  const [Creator,setCreator] = useState('');
  const [Description,setDescription] = useState('');
  let status2 = "New"
    useEffect(() => {
      localStorage.setItem('data', JSON.stringify(data));
      props.click2();
    }, [data]);
  const onHandleClickSave = () => {
    const tempData = [...data,{title,Creator,Description,status2,id : data.length}];
    setData(tempData);
  }
  const handleChangeTitle = event => {
    setTitle(event.target.value);
  };
  const handleChangeCreator = event => {
    setCreator(event.target.value);
  };
  const handleChangeDescription = event => {
    setDescription(event.target.value);
  };
  return (
<div className='mx-auto' style={{display : props.display2}}>
<div className='d-flex my-2'>
    <span style={{width : "150px"}}> Title</span><Textfield value={title} onChange={handleChangeTitle}/>
</div>
<div className='d-flex my-2'>
    <span style={{width : "150px"}}>Creator</span><Textfield value={Creator} onChange={handleChangeCreator}/>
</div>
<div className='d-flex my-2'>
    <span style={{width : "150px"}}>Description</span><Textfield value={Description} onChange={handleChangeDescription}/>
</div>
{/* <Button  onClick={onHandleClickSave}>Add</Button> */}
<Button  onClick={() => {
  props.click();
  props.click2()
  onHandleClickSave();
}}>Add</Button>

</div>
  )
}
