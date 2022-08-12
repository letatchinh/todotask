import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AddNew from "../component/AddNew";
import List from "../component/List";
import SideBar from "../component/SideBar";
export default function Body(props) {
  (!localStorage.getItem('data')) ? localStorage.setItem('data',JSON.stringify([]))  : localStorage.getItem('data');
  const [render, setRender] = useState(true);
  const [data,setData] = useState(props.data);
  useEffect(() => {
    setData(props.data);
  },[props.data]);

  const notify = () => setRender(!render);
  return (
    <>
      <div className="d-flex">
        <div style={{ width: "200px" }}>
        <SideBar click={notify} />
        </div>
        <Routes>
          <Route path="/add" element={<AddNew click2={props.reRender} />} />
          <Route path="/todotask/*" element={<List page={"todotask"}  data={JSON.parse(localStorage.getItem('data')) || [] } />} />;
          <Route path="/datasearch/*" element={<List page={"datasearch"}  data={props.dataSearch} />} />;
          <Route path="/datanew/*" element={<List page={"datanew"}  data={data.filter((e) => e.status2 === "New")}  />} />;
          <Route path="/datadoing/*" element={<List page={"datadoing"}  data={data.filter((e) => e.status2 === "Doing")}  />} />;
          <Route path="/datadone/*" element={<List page={"datadone"}  data={data.filter((e) => e.status2 === "Done")}  />} />
        </Routes>
      </div>
     
    </>
  );
}
