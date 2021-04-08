import GithubLink from 'components/GithubLink';
import SearchForm from 'components/SearchForm';

function Home() {
  return (
    <div className="">
      <div className="flex justify-end px-8 h-12">
        <GithubLink></GithubLink>
      </div>
      <div className="mt-20">
        <SearchForm></SearchForm>
      </div>
    </div>
  );
}

export default Home;
