import GithubLink from 'components/GithubLink';
import SearchForm from 'components/SearchForm';
import MyMap from 'components/Map';

function Result() {
  return (
    <div className="relative">
      <MyMap></MyMap>
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
