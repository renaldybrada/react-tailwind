import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchForm (props) {
    const [querySearch, setQuerySearch] = useState(props.oldValue);

    return (
        <div className="m-4 flex justify-center mx-5 
        sm:mx-52">
        <input className="
            rounded-l-lg p-4 border-t mr-0 border-b border-l 
            text-gray-800 border-gray-200 bg-white w-4/6
            sm:w-5/6" 
            placeholder="Insert some place, ex : Batu"
            value={querySearch}
            onChange={(e) => setQuerySearch(e.target.value)}/>
        <Link to={`/result?city=` + querySearch} 
        className="
            text-center rounded-r-lg bg-yellow-400  text-gray-800 
            font-bold p-4 uppercase border-yellow-500 border-t 
            border-b border-r w-2/6
            sm:w-1/6"
            key={window.location.pathname}
            >Go!</Link>
        </div>
    );
};

export default SearchForm;