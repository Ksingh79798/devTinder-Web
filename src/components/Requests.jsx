/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestSlice";

// This is Request page that i have got all the CR
const Requests = () => {
  const requests = useSelector((store) => store.requests);

  const dispatch = useDispatch();
  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });

      dispatch(addRequests(res.data.data));
      console.log(res);
    } catch (err) {
      //handle error case
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;
  if (requests.length === 0) return <h1>No Request Found</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl">Requests</h1>
      {requests.map((request) => {
        const { _id, firstName, lastName, age, photoUrl, gender, about } =
          request?.toUserId;
        {
          return (
            <div
              key={_id}
              className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto"
            >
              <div>
                <img
                  className="w-20 rounded-full h-20"
                  alt="photo"
                  src={photoUrl}
                ></img>
              </div>
              <div className="text-left mx-4">
                <h2 className="font-bold text-xl">
                  {firstName + " " + lastName}
                </h2>
                {age && gender && <p>{age + ", " + gender}</p>}
                <p>{about}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Requests;
