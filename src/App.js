import { useState } from 'react';
import './App.css';
import Body from './layout/Body';

import Header from './layout/Header';

function App() {
  const [status , setStatus] = useState(true);
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
  return (
   <>
<Header name={name} click ={onHandleClickAdd}/>
<Body click={onHandleClickAdd} status = {status}/>
   </>
  );
}

export default App;
