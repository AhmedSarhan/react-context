import React from "react";

export const ProfileAvatar = ({ user }) => {
  return (
    <div className="user">
      <img src={user.image} alt="user" />
      <p>{user.name}</p>
    </div>
  );
};
