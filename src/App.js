import { useState } from 'react';
import './App.css';
import Body from './component/Body';
import Header from './component/Header';
function App() {
  const [status , setStatus] = useState(true);
  const onHandleClickAdd = () => {
    setStatus(!status)
  }
  return (
   <>
<Header click ={onHandleClickAdd}/>
<Body status = {status}/>

   </>
  );
}

export default App;
