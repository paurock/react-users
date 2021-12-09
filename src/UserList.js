import { Link } from "react-router-dom";

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <div className="user-preview" key={user.id}>
          <Link to={`/users/${user.id}`}>
            <div className="wrapper">
              <div className="box">
                <img src={user.avatar} alt="avatar" />
              </div>
              <div className="box">
                <div className="name">Name: </div>
                {user.first_name}
              </div>
              <div className="box">
                <div className="last-name">Last Name: </div> {user.last_name}
              </div>
              <div className="box">
                <div className="email">Email: </div>
                {user.email}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default UserList;
