import { useEffect ,useState} from "react";
import { Link } from "react-router-dom";
import "./Weather.css"
const Weather=(props)=>{
    const {setInput,input,data,datatwo, fetchdata,fetchdata2}= props
    const[showabout, setShowAbout]= useState(false);
    useEffect(()=>{
        fetchdata();
        fetchdata2();
    },[input])
     return(
          <>
          <div className="first">
          <h1>Select City</h1>
          <select onChange={(e)=>{
               setInput(e.target.value);
               
               
               
          }}>  
               <option value="Chandigarh">Chandigarh</option>
               <option value="Delhi">Delhi</option>
               <option value="Canada">Canada</option>
               <option value="Jaipur">Jaipur</option>
               <option value="Mumbai">Mumbai</option>
               <option value="Banglore">Banglore</option>
               <option value="Gurgram">Gurgram</option>
               
          </select>
          </div>
          
          <div className="weatherdiv">
          
          <div className="maincurrent">
               <h2>Current Weather Data</h2>
               {data?<div className="currentweather">
                     <div>{data.data.name} [{data.data.sys.country}]</div>
                     <div>{data.data.weather[0].description}</div>
                     <div>TEMP: {data.data.main.temp}°C</div>
                     <div>MAX_TEMP: {data.data.main.temp_max}°C</div>
                     <div>MIN_TEMP: {data.data.main.temp_min}°C</div>
                     <div>HUMIDITY: {data.data.main.humidity}%</div>
                     <div>PRESSURE: {data.data.main.pressure}</div>
                     
               </div>: ""}
          </div>
          <div className="mainforecast">
               <h2>5 Day weather Forecast</h2>
               {datatwo?<div className="forecast">
                    <div style={{fontSize:20, fontWeight:600, textAlign:"center"}}>{datatwo.data.city.name}</div>
                    {datatwo.data.list.map((ele,index)=>{
                         return(
                              <div>Date/Time:{ele.dt_txt}
                              <span>Description: {ele.weather[0].description}</span>
                              <span>Temp:{ele.main.temp}°C</span>
                              <span>Humidity: {ele.main.humidity}%</span>
                              <span>Pressure: {ele.main.pressure}</span>

                              </div>
                         )
                    })}


               </div>:""}
          </div>
          
          <div>
               
          {showabout?<div className="showabout">
                    This is a weather application which gives you current weather and 5 day weather forecast
                    for your selected city.
               </div>: ""}
          <Link to="/">
          <button className="logout">Logout</button>
          </Link>
          </div>

          </div>
          <div className="about">
               <h1 onClick={()=>{
                    setShowAbout(!showabout)
               }}>About us</h1>
          </div>
          

          </>

     )
}
export default Weather;