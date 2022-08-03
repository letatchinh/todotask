import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Button from "@atlaskit/button";
import AddNew from "../component/AddNew";
import { v4 } from "uuid";
import List from "../component/List";
export default function Body(props) {
  const notify = () => setRender(!render);
  (!localStorage.getItem('data')) ? localStorage.setItem('data',JSON.stringify([]))  : localStorage.getItem('data');
  const [render, setRender] = useState(true);
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  const [active, setActive] = useState();
  const [page, setPage] = useState(data.length);
  const [dataShow, setDataShow] = useState(
    localStorage.getItem("datatemp")
      ? JSON.parse(localStorage.getItem("datatemp"))
      : []
  );
  let tempData = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];
  let limit = 4;
  let pageNav = [];
  for (let i = 1; i <= page; i++) {
    pageNav.push(i);
  }
  const onHandleChangePage = (e) => {
    const start = limit * e;
    const end = start + limit;
    setDataShow(tempData.slice(start, end));
    setActive(e);
  };
  const onHandleChangeNewTask = () => {
    setDataShow(tempData.filter((e) => e.status2 === "New"));
  };
  const onHandlePreClick = () => {
    if (active === 0) return;
    else onHandleChangePage(active - 1);
  };
  const onHandleNextClick = () => {
    if (active === pageNav.length - 1) return;
    else onHandleChangePage(active + 1);
  };
  const onHandleChangeAllTask = () => {
    setDataShow(tempData);

  };
  const onHandleChangeDoingTask = () => {
    setDataShow(tempData.filter((e) => e.status2 === "Doing"));
  };
  const onHandleChangeDoneTask = () => {
    setDataShow(tempData.filter((e) => e.status2 === "Done"));
  };
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")) || []);
    setDataShow(tempData.slice(0, limit));
    localStorage.setItem("dataTemp", JSON.stringify(tempData.slice(0, limit)));
    // setPage(
    //   JSON.parse(localStorage.getItem("data")).length % limit === 0
    //     ? JSON.parse(localStorage.getItem("data")).length / limit
    //     : Math.floor(JSON.parse(localStorage.getItem("data")).length / limit) +
    //         1
    // );
    // console.log("load");
  }, [localStorage.getItem("data")]);
  return (
    <>
      <div className="d-flex">
        <div style={{ width: "200px" }}>
          <Link to="/"><Button
            onClick={onHandleChangeAllTask}
            appearance="warning"
            shouldFitContainer
          >
            All Task
          </Button></Link>
          <Button
            onClick={onHandleChangeNewTask}
            appearance="warning"
            shouldFitContainer
          >
            New Task
          </Button>
          <Button
            onClick={onHandleChangeDoingTask}
            appearance="warning"
            shouldFitContainer
          >
            Doing Task
          </Button>
          <Button
            onClick={onHandleChangeDoneTask}
            appearance="warning"
            shouldFitContainer
          >
            Done Task
          </Button>
        </div>
        {/* <AddNew click={props.click} click2={notify} display2={(props.status) ? "none" : "block"}/> */}
        <Routes>
          <Route path="/add" element={<AddNew click2={notify} />} />
          <Route path="/" element={<List />} />
        </Routes>
      </div>
      {/* <div
        className="text-center"
        style={{ display: props.status ? "block" : "none" }}
      >
        <Button onClick={onHandlePreClick}>Pre</Button>
        {pageNav.map((e, index) => (
          <Button
            style={{ background: index === active ? "red" : "none" }}
            onClick={() => onHandleChangePage(index)}
            className="mx-2"
            key={v4()}
          >
            {e}
          </Button>
        ))}

        <Button onClick={onHandleNextClick}>Next</Button>
      </div> */}
    </>
  );
}
