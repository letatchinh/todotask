import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AddNew from "../component/AddNew";
import List from "../component/List";
import SideBar from "../component/SideBar";
export default function Body(props) {
  console.log("rerender body");
  (!localStorage.getItem('data')) ? localStorage.setItem('data',JSON.stringify([]))  : localStorage.getItem('data');
  const [render, setRender] = useState(true);
  const notify = () => setRender(!render);
  const [data,setData] = useState(props.data);
  useEffect(() => {
    setData(props.data);
    console.log(props.data);
  },[props.data]);
  return (
    <>
      <div className="d-flex">
        <div style={{ width: "200px" }}>
        <SideBar click={notify} />
        </div>
        <Routes>
          <Route path="/add" element={<AddNew click2={props.reRender} />} />
          <Route path="/todotask" element={<List click={notify} data={JSON.parse(localStorage.getItem('data')) || [] } />} />;
          <Route path="/datasearch" element={<List click={notify} data={props.data} />} />;
          <Route path="/datanew" element={<List click={notify} data={data.filter((e) => e.status2 === "New")}  />} />;
          <Route path="/datadoing" element={<List click={notify} data={data.filter((e) => e.status2 === "Doing")}  />} />
          <Route path="/datadone" element={<List click={notify} data={data.filter((e) => e.status2 === "Done")}  />} />
        </Routes>
      </div>
     
    </>
  );
}
