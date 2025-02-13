import React from "react";
import { Sidebar } from "../../components/sidebar/sidebar";
import { HomePage } from "../../pages/home";

export const Dashboard = () => {
  const user = {
    image: "https://placehold.co/400",
    name: "John Doe",
  };
  return (
    <div className="dashboard">
      <Sidebar user={user} />
      <HomePage user={user} />
    </div>
  );
};
