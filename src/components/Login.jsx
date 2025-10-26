import { useState } from "react";
import axios  from "axios";
import {useDispatch} from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [emailId, setEmailId] = useState("");
const [password, setPassword] = useState("");
const [isLoginForm, setIsLoginForm] = useState(true);
const [error, setError] = useState("");
const dispatch = useDispatch();
const navigate = useNavigate();

const handleLogin = async () => {

  try {
    const res = await axios.post(BASE_URL + "/login", {
      emailId,
      password,
    },{
      withCredentials: true
    });
    console.log(res.data);
    dispatch(addUser(res.data));
    return navigate("/");
  } catch (err) {
    setError(err?.response?.data || "Something went wrong!");
    console.error();
  }
}

 const handleSignUp = async () => {
   try {
     const res = await axios.post(
       BASE_URL + "/signup",
       { firstName, lastName, emailId, password },
       { withCredentials: true }
     );
     dispatch(addUser(res.data.data));
     return navigate("/profile");
   } catch (err) {
     setError(err?.response?.data || "Something went wrong");
   }
 };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-200 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center text-xl ">
            {isLoginForm ? "Login" : "Sign Up"}
          </h2>
          <div>
            {!isLoginForm && (
              <>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">First Name:</legend>
                  <label className="input validator">
                    <svg
                      className="h-[1em] opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </g>
                    </svg>
                    <input
                      type="text"
                      value={firstName}
                      required
                      placeholder="Enter here..."
                      pattern="[A-Za-z][A-Za-z0-9\-]*"
                      minlength="3"
                      maxlength="30"
                      title="Only letters, numbers or dash"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </label>
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Last Name:</legend>
                  <label className="input validator">
                    <svg
                      className="h-[1em] opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </g>
                    </svg>
                    <input
                      type="text"
                      value={lastName}
                      required
                      placeholder="Enter here..."
                      pattern="[A-Za-z][A-Za-z0-9\-]*"
                      minlength="3"
                      maxlength="30"
                      title="Only letters, numbers or dash"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </label>
                </fieldset>{" "}
              </>
            )}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email ID</legend>
              {/* <input type="text" className="input" placeholder="Type here" />
               */}
              <label className="input validator">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input
                  type="email"
                  placeholder="Type here..."
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                  required
                />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              {/* <input type="text" className="input" placeholder="Type here" />
               */}
              <label className="input validator">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                    <circle
                      cx="16.5"
                      cy="7.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                  </g>
                </svg>
                <input
                  type="password"
                  required
                  placeholder="Type here..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minlength="8"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                />
              </label>
              <p className="validator-hint hidden">
                Must be more than 8 characters, including
                <br />
                At least one number <br />
                At least one lowercase letter <br />
                At least one uppercase letter
              </p>
            </fieldset>
          </div>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center">
            <button
              className="bg-primary text-base-100 btn "
              onClick={isLoginForm? handleLogin : handleSignUp}
            >
              {isLoginForm ? "Login" : "Sign Up"}
            </button>
          </div>
          <p
            className="m-auto cursor-pointer py-2 text-black "
            onClick={() => setIsLoginForm((value) => !value)}
          >
            {isLoginForm
              ? "New User? Signup Here."
              : "Existing User? Login Here."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login