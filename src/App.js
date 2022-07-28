import { useState } from 'react';
import './App.css';
import Body from './layout/Body';

import Header from './layout/Header';

function App() {
  const [status , setStatus] = useState(true);
  const [status2 , setStatus2] = useState(true);
  const [name , setName] = useState('Create New Task');
  const onHandleClickAdd = () => {
    setStatus(!status)
    if(name === 'Back'){
      setName('Create New Task')
    }
    else {
      setName('Back');
    }
  }
  const reRender = () => {
    setStatus2(!status2)
  }
  return (
   <>
<Header name={name} reRender={reRender} click ={onHandleClickAdd}/>
<Body  click={onHandleClickAdd} status = {status}/>
   </>
  );
}

export default App;
