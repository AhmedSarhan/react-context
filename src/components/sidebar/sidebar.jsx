import React from "react";
import { ProfileAvatar } from "./profile-avatar";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <ProfileAvatar />
        <li>Dashboard</li>
        <li>Products</li>
        <li>Profile</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};
