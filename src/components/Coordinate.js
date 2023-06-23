import React, { useEffect, useState } from "react";
import "../css/style.css";
import { Link } from "react-router-dom";

const Coordinate = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Pune");

  const fetchApi = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=2f83bf57758a27fd28acf86fc2dcb429`;
    const response = await fetch(url);
    const resJson = await response.json();
    setCity(resJson.coord);
  };
  useEffect(() => {
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="error">No data found</p>
        ) : (
          <div className="info">
            <h2 className="location">
              <ion-icon name="location-outline"></ion-icon>
              {search}
            </h2>
            <h1 className="temp">
              {city?.lon.toFixed(2)} | {city?.lat.toFixed(2)}
            </h1>
          </div>
        )}

        <div className="home">
          <Link to="/">
            <button className="homebtn"> Home </button>
          </Link>
          <Link to="/Wind">
            <button className="windbtn"> Check Wind </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Coordinate;
