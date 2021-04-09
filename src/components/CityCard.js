import React from 'react';

const CityCard = (props) => (
    <div className="flex pr-8 mb-5 sm:mb-0">
        <div className="w-5/6">
            <p className="font-bold text-lg">{props.city.name}</p>
            <table>
                <tbody>
                    <tr>
                        <td>Temperature</td>
                        <td className="w-10 text-center">:</td>
                        <td>{props.city.main.temp}°</td>
                    </tr>
                    <tr>
                        <td>Feels Like</td>
                        <td className="w-10 text-center">:</td>
                        <td>{props.city.main.feels_like}°</td>
                    </tr>
                    <tr>
                        <td>Pressure</td>
                        <td className="w-10 text-center">:</td>
                        <td>{props.city.main.pressure}</td>
                    </tr>
                    <tr>
                        <td>Humidity</td>
                        <td className="w-10 text-center">:</td>
                        <td>{props.city.main.humidity}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="w-1/6">
            <img alt={"icon " + props.city.weather[0].description}
            src={"http://openweathermap.org/img/wn/" + props.city.weather[0].icon + "@2x.png"}
            className=""></img>
        </div>
    </div>
);

export default CityCard;