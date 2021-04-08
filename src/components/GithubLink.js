import OpenNew from 'assets/icons/open_new.png';
import React from 'react';

const GithubLink = () => (
    <a href="https://github.com/renaldybrada/react-tailwind" target="__blank" className="text-white items-center flex flex-row">
          <img className="w-4 h-4 mr-2 text-blue-500" src={OpenNew} alt="https://github.com/renaldybrada/react-tailwind"/> Github</a>
);

export default GithubLink;