import React, { useEffect, useMemo, useState } from "react";
import Login from "./Login"
import Axios from "axios";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Weather from "./Weather";

const App=()=>{
  const[input,setInput]= useState("London");
  const[data, setData]= useState("");
  const[datatwo, setDataTwo]= useState("");
  console.log(input);
  const fetchdata= async()=>{
    const response= await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=3fbb2b31fd3e77c536be64abc677a4d1`);
    
    if(response){
      setData(response)
    }
    
  }
  const fetchdata2= async()=>{
    const response2= await Axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&units=metric&appid=3fbb2b31fd3e77c536be64abc677a4d1`)
    if(response2){
      setDataTwo(response2)
    }
  }
  
  console.log(data);
  console.log(datatwo);
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/Weather" element={<Weather data={data} setData={setData} setInput={setInput} fetchdata={fetchdata} input={input} fetchdata2={fetchdata2} datatwo={datatwo}/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;