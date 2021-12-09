import UserList from "./UserList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    error,
    isPending,
    data: users,
  } = useFetch("https://reqres.in/api/users?per_page=12");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {users && <UserList users={users} />}
    </div>
  );
};

export default Home;
