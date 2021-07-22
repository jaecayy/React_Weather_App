import React,{useEffect, useState} from "react";
import "./css/style.css";

const WeatherApp = ()=>{

    const [city,setCity] = useState(null);
    const [search,setSearch] = useState("Mumbai");

    useEffect(()=>{
        const fetchApi = async()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=83f91740373ef1466bcf81ae0df41995&units=metric`;

            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }

        fetchApi();
    },[search])

    return(

        <>
            <div class="box">
                <div class="inputData">
                    <input
                    type="search"
                    className="inputField tab"
                    value = {search}
                    onChange={(event)=>{
                        setSearch(event.target.value);
                    }}/>
                </div>
            
            

                    {!city?(
                        <p>No Data Found</p>
                    ):
                    (
                    <div>
                    <div className="info">
                    <h2 className="location">
                        <i class="fas fa-street-view"></i>{search}
                    </h2>
                    <h1 className="temp">{city.temp} &deg; C</h1>
                    <h3 className="tempminmax">Min: {city.temp_min - 5}&deg; C| Max: {city.temp_max}&deg; C</h3>
                </div>

                <div className="wave"></div>
                <div className="wave-two"></div>
                <div className="wave-three"></div>
                </div>
                    )}
                

            </div>

        </>
    )
}

export default WeatherApp;