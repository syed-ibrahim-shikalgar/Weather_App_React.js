import React, { useEffect, useState } from "react";
import "../css/style.css";
import { Link } from "react-router-dom";

const Wind = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Pune");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=2f83bf57758a27fd28acf86fc2dcb429`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.wind);
    };
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
            <h1 className="temp">{city?.speed} Km/h</h1>
          </div>
        )}

        <div className="home">
          <Link to="/">
            <button className="homebtn"> Home </button>
          </Link>
          <Link to="/Coord">
            <button className="coord"> Co-ordinates </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Wind;
