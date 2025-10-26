import { useState } from "react";
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({user}) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [age, setAge] = useState(user.age || "");
    const [gender, setGender] = useState(user.gender || "");
    const [about, setAbout] = useState(user.about || "");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const [showToast, setShowToast] = useState(false);

    const saveProfile = async()=>{
        setError("");
        try {
          const res = await axios.patch(
            BASE_URL + "/profile/edit",
            { firstName, lastName, photoUrl, age, gender, about },
            { withCredentials: true }
          );
          dispatch(addUser(res?.data?.data));
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
        } catch (err) {
          setError(
            err.response?.data?.message ||
              "Something went wrong while saving profile."
          );
        }

    }
  return (
    <>
      <div className="flex justify-center my-10">
        <div className="flex justify-center my-10 mx-10">
          <div className="card bg-base-200 w-96 shadow-sm">
            <div className="card-body">
              <h2 className="card-title justify-center text-xl ">
                Edit Profile
              </h2>
              <div>
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
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Photo Url:</legend>
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
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </g>
                    </svg>
                    <input
                      type="url"
                      required
                      placeholder="Enter here..."
                      value={photoUrl}
                      onChange={(e) => setPhotoUrl(e.target.value)}
                      pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                      title="Must be valid URL"
                    />
                  </label>
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Age:</legend>
                  <input
                    type="text"
                    value={age}
                    className="input"
                    placeholder="Enter here..."
                    onChange={(e) => setAge(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Gender:</legend>
                  <input
                    type="text"
                    value={gender}
                    className="input"
                    placeholder="Enter here..."
                    onChange={(e) => setGender(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">About:</legend>
                  <textarea
                    className="textarea h-24"
                    value={about}
                    placeholder="Enter here..."
                    onChange={(e) => setAbout(e.target.value)}
                  ></textarea>
                </fieldset>
              </div>
              <p className="text-red-500">{error}</p>
              <div className="card-actions justify-center">
                <button
                  className="bg-primary text-base-100 btn "
                  onClick={saveProfile}
                >
                  Apply Changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <UserCard
          user={{ firstName, lastName, photoUrl, age, gender, about }}
        />
      </div>
      {showToast && (<div className="toast toast-top toast-center">
        <div className="alert alert-success">
          <span>Profile saved successfully.</span>
        </div>
      </div>)}
    </>
  );
}

export default EditProfile
