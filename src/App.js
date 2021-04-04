import OpenNew from 'assets/icons/open_new.png';

function App() {
  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="flex justify-end px-8 h-12">
        <a href="https://github.com/mbex71/react-tailwind" target="__blank" className="text-white items-center flex flex-row">
          <img className="w-4 h-4 mr-2 text-blue-500" src={OpenNew} alt="https://github.com/mbex71/react-tailwind"/> Github</a>
      </div>
      <div className="flex min-h-screen justify-center items-center pb-12">
        <h1 className="font-light text-xl md:text-6xl uppercase text-white font ">React Tailwind</h1>
      </div>
      
    </div>
  );
}

export default App;
