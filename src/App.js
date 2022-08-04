import { useState } from 'react';
import './App.css';
import Body from './layout/Body';
import Header from './layout/Header';
function App() {
  const [status , setStatus] = useState(true);
  const [status2 , setStatus2] = useState(true);
  const reRender = () => {
    setStatus2(!status2)
  }
  return (
   <>
<Header reRender={reRender} 
/>
<Body 
  status = {status}/>
   </>
  );
}

export default App;
