import { createContext, useCallback, useEffect, useState } from 'react';
import './App.css';
import Body from './layout/Body';
import Header from './layout/Header';
import { useNavigate } from 'react-router-dom';
import {URL} from './Constant'
import axios from 'axios';
export const TestContext = createContext();
function App() {
  const [status2 , setStatus2] = useState(true);
  const [dataSearch , setDataSearch] = useState([]);
  const [data,setData] = useState([])
  let navigate = useNavigate();
  const fecthData = useCallback(async() => {
    try {
      await axios.get(URL).then(res => setData(res.data)).catch(err => console.log(err))
    } catch (error) {
      throw error
    }
  },[])
  useEffect(() => {
    fecthData()
  },[fecthData])
  const setData2 = (data) => {
    setData(data);
    fecthData()
  }
  const reRender = () => {
    setStatus2(!status2);
    console.log("rerender");
  }
  const onSearch = (e) => {
    let dataSearch = e.target.value.toLowerCase().trim();
    let dataTemp =  data.filter((e) => e.title.toLowerCase().includes(dataSearch));
    setDataSearch(dataTemp);
    navigate("/datasearch/datasearch/1")
  }
  const value = {
    onSearch,
    reRender,
    data,
    dataSearch,
    setData2,
    fecthData,
  }
  return (
   <>
<TestContext.Provider value={value}>
<Header />
<Body data={data}/>
</TestContext.Provider>
   </>
  );
}

export default App;
