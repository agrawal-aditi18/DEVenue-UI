import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
const user = useSelector((store) => store.user);
console.log(user);

  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl"> DEVenue</Link>
      </div>
      {user && (
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-40 md:w-aut o"
          />
          <div className="form-control mx-2 my-2"> Hi, {user.firstName}!</div>
          <div className="dropdown dropdown-end mx-5 flex ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="User photo" src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 my-14 shadow"
            >
              <li>
                <Link to = "/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                  </Link>
              </li>

              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar