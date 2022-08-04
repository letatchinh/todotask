import { useState } from 'react';
import './App.css';
import Body from './layout/Body';
import Header from './layout/Header';
import { useNavigate } from 'react-router-dom';
function App() {
  const [status , setStatus] = useState(true);
  const [status2 , setStatus2] = useState(true);
  let navigate = useNavigate();
  const [data,setData] = useState(JSON.parse(localStorage.getItem('data'))|| [])
  // const [dataCoding,setDataCo] = useState(JSON.parse(localStorage.getItem('data'))|| [])
 
  const reRender = () => {
    setStatus2(!status2);
    setData(JSON.parse(localStorage.getItem('data'))|| []);
  }
  const onSearch = (e) => {
    let dataSearch = e.target.value.toLowerCase().trim();
    let dataTemp =  data.filter((e) => e.title.toLowerCase().includes(dataSearch) || e.status2.toLowerCase().includes(dataSearch));
    setData(dataTemp);
    navigate("/datasearch")
  }
  return (
   <>
<Header search={onSearch} reRender={reRender} />
<Body reRender={reRender} data={data} 
  status = {status}/>
   </>
  );
}

export default App;
