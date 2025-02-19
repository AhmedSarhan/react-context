import React from "react";
import { useAppContext } from "../providers/app-provider";

export const HomePage = () => {
  const { user } = useAppContext();
  return (
    <div className="page">
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard {user.name}</p>
    </div>
  );
};
