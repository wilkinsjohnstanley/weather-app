import "./App.css";
import { useState } from "react";
const api = {
  key: "YOURKEYHERE",
  base: "https://api.openweathermap.org/data/2.5/",
};
//the main application
function App() {
//hold state of search term
//useState is a React HooK!
const[search, setSearch] = useState("");
const [weather, setWeather] = useState({});


const searchPressed = () => {
  fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      setWeather(result);
    });
};
  return (
    <div className="App">
      <header className="App-header">
{/* HEADER */}    <h1>weather appp</h1>
{/* Search box */}
<div>
<input
type="text"
placeholder="Enter your city or town"
onChange={(e)=>setSearch(e.target.value)}
/>


<button onClick={searchPressed}>Search</button>
</div>
{/* Location*/}
<p>{weather.name}</p>
{/* Temperature */}
<p>{weather.main.temp}℉</p>
{/* Weather conditions*/}
<p>{weather.weather[0].main}</p>
<p>{weather.weather[0].description}</p>


      </header>
    </div>
  );
}

export default App;
