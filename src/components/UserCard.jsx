const UserCard = ({user}) => {
    const { firstName, lastName, photoUrl, age, gender, about} = user;
  return (
    <div className="card lg:card-side bg-base-200 shadow-sm w-150 flex justify-center my-10 ">
      <figure>
        <img src={photoUrl} alt="photo" />
      </figure>
      <div className="card-body w-80">
        <h2 className="card-title text-2xl">{firstName + " " + lastName}</h2>
        <p>{about}</p>
        <div className="flex justify-between my-4 w-full">
          <button className="btn btn-primary text-red-500 ">Ignore</button>
          <button className="btn btn-primary ">Interested</button>
        </div>
      </div>
    </div>
  );
}

export default UserCard