import React from "react";
import { ProfileAvatar } from "./profile-avatar";

export const Sidebar = ({ user }) => {
  return (
    <div className="sidebar">
      <ul>
        <ProfileAvatar user={user} />
        <li>Dashboard</li>
        <li>Products</li>
        <li>Profile</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};
