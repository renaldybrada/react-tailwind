import GithubLink from 'components/GithubLink';
import SearchForm from 'components/SearchForm';
import CityCard from 'components/CityCard';
import MyMap from 'components/Map';
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const WEATHER_API_KEY = '25bd41a729208e03e9d9de845fe94ab9';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

function Result() {
  const [cityWeather, setCityWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [city, setCity] = useState('');

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  useEffect(() => {
    setCity(query.get('city'));

    async function fetchData() {

      fetch(`${BASE_URL}weather?q=${query.get('city')}&units=metric&appid=${WEATHER_API_KEY}`)
      .then(res => res.json())
      .then(response => {
          setCityWeather(response);
          setIsLoading(false);
      })
    }
    
    if (query.get('city') !== city) fetchData();
  }, [query, isLoading, city]);

  return (
    <div className="relative">
      {isLoading ? 
        <h1>fetching coordinates</h1>
        : 
        <MyMap lat={cityWeather.coord.lat} lon={cityWeather.coord.lon}></MyMap> 
      }
      <div className="absolute left-0 top-0 w-full floating-menu h-full">
        <div className="flex justify-end h-12">
          <GithubLink></GithubLink>
        </div>
        <div className="mt-4 flex flex-col">
          <SearchForm oldValue={city}></SearchForm>
          {
            cityWeather.name !== undefined &&
            <div className="bg-white px-5 shadow-md absolute bottom-20
            mx-5 sm:mx-52">
              <CityCard city={cityWeather}></CityCard>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Result;
