import GithubLink from 'components/GithubLink';
import SearchForm from 'components/SearchForm';
import MyMap from 'components/Map';
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const WEATHER_API_KEY = '25bd41a729208e03e9d9de845fe94ab9';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/';

function Result() {
  const [cityWeather, setCityWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  useEffect(() => {
    async function fetchData() {

      fetch(`${BASE_URL}weather?q=${query.get('city')}&units=metric&appid=${WEATHER_API_KEY}`)
      .then(res => res.json())
      .then(response => {
        setCityWeather(response);
        setIsLoading(false);
      })
    }
    
    if (isLoading) fetchData();
  }, [query]);

  return (
    <div className="relative">
      {isLoading ? 
        <h1>fetching coordinates</h1>
        : 
        <MyMap lat={cityWeather.coord.lat} lon={cityWeather.coord.lon}></MyMap> 
      }
      <div className="absolute left-0 top-0 w-full floating-menu">
        <div className="flex justify-end h-12">
          <GithubLink></GithubLink>
        </div>
        <div className="mt-4 flex flex-col">
          <SearchForm></SearchForm>
        </div>
      </div>
    </div>
  );
}

export default Result;
