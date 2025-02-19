import React from "react";
import { Sidebar } from "../../components/sidebar/sidebar";
import { HomePage } from "../../pages/home";
import { AppProvider } from "../../providers/app-provider";

export const Dashboard = () => {
  return (
    <AppProvider>
      <div className="dashboard">
        <Sidebar />
        <HomePage />
      </div>
    </AppProvider>
  );
};
