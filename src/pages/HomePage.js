import React from "react";
import Sidebar from "../features/sidebar/Sidebar";
import Header from "./Header";
import "../App.css";
import { Company } from "../features/companies/components/Company";

const HomePage = () => {
  return (
    <div className="main-wrapper">
      <div className="navBarSpace">
        {" "}
        <Sidebar />
      </div>
      <div className="actual-page-wrapper">
        <Header />
        <Company />
      </div>
    </div>
  );
};

export default HomePage;
