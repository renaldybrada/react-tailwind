import React, { useState, useEffect } from 'react';
import GithubLink from 'components/GithubLink';
import SearchForm from 'components/SearchForm';
import CityCard from 'components/CityCard';

const WEATHER_API_KEY = '25bd41a729208e03e9d9de845fe94ab9';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
const initCities = ['malang', 'surabaya', 'solo', 'semarang', 'yogyakarta', 'jakarta', 'bandung', 
  'serang', 'banda aceh', 'medan', 'bengkulu', 'padang', 'lampung', 'palembang', 'balikpapan',
  'samarinda', 'kutai', 'banjarmasin', 'makassar', 'manado', 'gorontalo', 'kendari', 'denpasar', 'mataram',
  'kupang', 'labuan bajo', 'ambon', 'jayapura', 'sorong', 'merauke', 'sabang']; 

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [cities, setCities] = useState([]);
    const [initCity, setInitCity] = useState('');
    
    useEffect(() => {
      async function fetchData() {
        const selectCity = initCities[Math.floor(Math.random()*initCities.length)];
        setInitCity(selectCity);

        const requestByCity = await fetch(`${BASE_URL}weather?q=${selectCity}&appid=${WEATHER_API_KEY}`);
        const responseCity = await requestByCity.json();

        fetch(`${BASE_URL}find?lat=${responseCity.coord.lat}&lon=${responseCity.coord.lon}&cnt=6&units=metric&appid=${WEATHER_API_KEY}`)
        .then(res => res.json())
        .then(response => {
          setCities(response.list);
          setIsLoading(false);
        })
      }
      
      fetchData();
    }, []);

    return (
      <div className="">
        <div className="flex justify-end h-12">
          <GithubLink></GithubLink>
        </div>
        <div className="mt-16 flex flex-col">
          <h1 className="text-gray-100 text-4xl flex justify-center mb-5">Weather App</h1>
          <SearchForm oldValue=""></SearchForm>
          {isLoading &&
            <div className="mx-5
            sm:m-4 sm:mx-40 sm:mt-12 sm:px-12 sm:py-5">
              <h1 className="text-white text-2xl">Preparing data ..</h1>
            </div>
          }
          {cities.length > 0 && !isLoading &&
            <div className="text-gray-100 
            m-5
            sm:m-4 sm:mx-40 sm:mt-12 sm:px-12 sm:py-5">
              <h2 className="text-2xl mb-8">
                Weather near {initCity.toUpperCase()}
              </h2>
              <div className="flex flex-col
              sm:grid sm:grid-cols-3 sm:gap-6">
                {cities.map((city) => 
                  <CityCard key={city.id} city={city}></CityCard> 
                )
                }
              </div>
            </div>
          }
        </div>
      </div>
    );
}

export default Home;
