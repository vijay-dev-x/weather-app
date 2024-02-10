import { useEffect, useState } from "react";
import "./App.css";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

function App() {
  const [search, setSearch] = useState("mumbai");
  const [city, setCity] = useState("");
  const [btnData, setBtnData] = useState("MUMBAI");
  useEffect(() => {
    const apiFetch = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e7358270852a289bde015fd1945bbb12
  `;
      let fetchData = await fetch(url);
      const jsonData = await fetchData.json();
      setCity(jsonData.main);
    };
    apiFetch();
  }, [btnData]);

  let inputE = (e) => {
    setSearch(e.target.value);
  };
  let buttonE = (e) => {
    setBtnData(search);
  };
  return (
    <>
      <div className="grandContainer">
        <div className="mainContainer">
          <div className="inputData">
            <input
              placeholder="Enter a city name"
              value={search}
              onChange={inputE}
              type="text"
            />
            <button onClick={buttonE}>Search</button>
            <a href="https://github.com/vijay-dev-x" className="github-icon">
              <FaGithub />
            </a>
          </div>
          {!city ? (
            <p className="errorMsg"> ⚠️ Data not found from your input :</p>
          ) : (
            <div className="infoData">
              <h1>{btnData}</h1>
              <span className="weatherIcon">
                <TiWeatherPartlySunny />
              </span>
              <h3>{city.temp} &deg; c </h3>
              <div className="max-min">
                <div className="min">
                  <p className="min-max-text">min</p>
                  <p>{city.temp_min} &deg;</p>
                </div>
                <div className="max">
                  <p className="min-max-text">max</p>
                  <p>{city.temp_max} &deg;</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
