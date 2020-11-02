import { useProjects } from './hooks';
import List from './List';
import Search from './Search';

const Home = () => {
  const { projects, setSearch, sortByDate, toggleSortByDate } = useProjects();

  return (
    <>
      <Search onSearch={setSearch} sortByDate={sortByDate} onSortByDate={toggleSortByDate} />
      <List projects={projects} />
    </>
  );
};

export default Home;
