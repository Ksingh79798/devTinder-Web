// eslint-disable-next-line react/prop-types
const UserCard = ({ user }) => {
  console.log(user);
  // eslint-disable-next-line react/prop-types
  const { firstName, lastName, age, about, photoUrl, gender } = user;
  // console.log(user?.age);
  return (
    <div className="flex justify-center">
      <div className="card bg-base-300 w-96 shadow-xl">
        <figure>
          <img src={photoUrl} alt="photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && <p>{age + "," + " " + gender}</p>}
          <p>{about}</p>
          <div className="card-actions justify-center m-4">
            <button className="btn btn-primary text-white">Ignore</button>
            <button className="btn btn-secondary text-white">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
