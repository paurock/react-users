import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const UserDetails = () => {
  const { id } = useParams();
  const {
    data: user,
    error,
    isPending,
  } = useFetch("https://reqres.in/api/users/" + id);
  const history = useHistory();
  return (
    <div className="user-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {user && (
        <article>
          <h2>{user.first_name}</h2>
          <div>
            <img src={user.avatar} alt="avatar" />
          </div>
          <div>
            <p>{user.last_name}</p>
            <p>{user.email}</p>
          </div>
          <button onClick={() => history.push("/")}>Back</button>
        </article>
      )}
    </div>
  );
};

export default UserDetails;
