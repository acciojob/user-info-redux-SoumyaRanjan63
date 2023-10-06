import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getName, getEmail } from "../redux/action/getUserInfoAction";

const GetUserInfo = () => {
    const dispatch = useDispatch();
  const name = useSelector(state => state.name);
  const email = useSelector(state=>state.email);

  const handleName = (e) => {
     dispatch(getName(e.target.value));
  };

  const handleEmail = (e) => {
   dispatch(getEmail(e.target.value));
  };

  return (
    <div>
      <h1>User Information</h1>
      <label htmlFor="userName">Name:</label>
      <input type="text" id="userName" value={name} onChange={handleName} />
      <label htmlFor="userEmail">Email:</label>
      <input type="email" id="userEmail" value={email} onChange={handleEmail}/>
      <div className="output">
      <h4>Current values in store:</h4>
      <p>Name - {name}</p>
      <br/>
      <p>Email - {email}</p>
      </div>
    </div>
  );
};

export default GetUserInfo;
