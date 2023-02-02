import {
  ChartBlock,
  Navbar,
  Premium,
  Status,
  TasksList,
  Welcome,
} from "../components";

const Home = () => {
  return (
    <div className="main main--home">
      <Navbar />
      <div>
        <Welcome userName="Josh" />
        <TasksList />
      </div>
      <div>
        <Status />
        <ChartBlock />
        <Premium />
      </div>
    </div>
  );
};

export default Home;
