import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { userId } = useParams();
  return <div>Details of user {userId}</div>;
};

export default UserDetails;
