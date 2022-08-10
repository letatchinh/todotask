import { createContext, useState } from 'react';
import './App.css';
import Body from './layout/Body';
import Header from './layout/Header';
import { useNavigate } from 'react-router-dom';
export const TestContext = createContext();
function App() {
  const [status2 , setStatus2] = useState(true);
  const [dataSearch , setDataSearch] = useState([]);
  let navigate = useNavigate();
  const [data,setData] = useState(JSON.parse(localStorage.getItem('data'))|| [])
  const reRender = () => {
    setStatus2(!status2);
    setData(JSON.parse(localStorage.getItem('data'))|| []);
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
