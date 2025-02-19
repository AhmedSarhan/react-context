import React from "react";
import { useAppContext } from "../../providers/app-provider";

export const ProfileAvatar = () => {
  const { user } = useAppContext();

  return (
    <div className="user">
      <img src={user.image} alt="user" />
      <p>{user.name}</p>
    </div>
  );
};
