import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeUsers = searchParams.get("filter") === "active";
  return (
    <div>
      <h2>User 1</h2> <h2>User 2</h2> <h2>User 3</h2>
      <Outlet />
      <button onClick={() => setSearchParams({ filter: "active" })}>
        Active Users
      </button>
      <button onClick={() => setSearchParams({})}>Reset Filter</button>
      {activeUsers ? (
        <h2>Details of active Users</h2>
      ) : (
        <h2>Details of all users</h2>
      )}
    </div>
  );
};

export default Users;
