import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AddNew from "../component/AddNew";
import List from "../component/List";
import SideBar from "../component/SideBar";
export default function Body() {
  console.log("rerender body");

  (!localStorage.getItem('data')) ? localStorage.setItem('data',JSON.stringify([]))  : localStorage.getItem('data');
  const [render, setRender] = useState(true);
  const notify = () => setRender(!render);
  let data = JSON.parse(localStorage.getItem("data")) || []
  let dataNew = JSON.parse(localStorage.getItem('dataNew')) || [];
  console.log("dataNew",dataNew);
  let dataDoing = JSON.parse(localStorage.getItem('dataDoing')) || [];
  console.log("dataDoing",dataDoing);
  let dataDone = JSON.parse(localStorage.getItem('dataDone')) || [];
  console.log("dataDone",dataDone);
  return (
    <>
      <div className="d-flex">
        <div style={{ width: "200px" }}>
        <SideBar click={notify} />
        </div>
        <Routes>
          <Route path="/add" element={<AddNew click2={notify} />} />
          <Route path="/todotask" element={<List click={notify} data={data} />} />
          <Route path="/datanew" element={<List click={notify} data={dataNew}  />} />
          <Route path="/datadoing" element={<List click={notify} data={dataDoing}  />} />
          <Route path="/datadone" element={<List click={notify} data={dataDone}  />} />
        </Routes>
      </div>
     
    </>
  );
}
