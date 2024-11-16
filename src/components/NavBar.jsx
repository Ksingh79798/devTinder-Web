import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      // don't need response here
      await axios.post(
        BASE_URL + "/logout",
        {},
        {
          withCredentials: true,
        }
      );
      // clear the redux store so, dispatch removeUser action
      dispatch(removeUser());
      return navigate("/login");
    } catch (err) {
      // If get error then also redirect to error page
      console.error(err.message);
    }
  };
  console.log(user);
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          {/* <a className="btn btn-ghost text-xl">🧑‍🤝‍🧑devTinder</a> */}
          <Link to="/" className="btn btn-ghost text-xl">
            🧑‍🤝‍🧑devTinder
          </Link>
        </div>
        {user && (
          <div className="flex-none gap-2">
            <div> Welcome, {user.firstName + " " + user.lastName}</div>
            {/* <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div> */}

            <div className="dropdown dropdown-end flex mx-5">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="user photo" src={user.photoUrl} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>

                  {/* <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a> */}
                </li>
                <li>
                  <Link to="/login">Login</Link>
                  {/* <a>Settings</a> */}
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
