import React from "react";

export const HomePage = ({ user }) => {
  return (
    <div className="page">
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard {user.name}</p>
    </div>
  );
};
