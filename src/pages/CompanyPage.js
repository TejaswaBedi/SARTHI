import React from "react";
import { Company } from "../features/companies/components/Company";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllCompanies } from "../features/companies/companySlice";
import CompanyCard from "../components/companyCard/CompCard";
import Header from "./Header";
import Sidebar from "../features/sidebar/Sidebar";

const CompanyPage = () => {
  const company = useSelector(selectAllCompanies);
  return (
    <>
      <div className="main-wrapper">
        <div className="navBarSpace">
          <Sidebar />
        </div>
        <div className="actual-page-wrapper">
          <Header
            heading1=""
            heading2="COMPANY'S LIST"
            heading3="On-campus and Off-campus oppurtunities on a single platform."
          />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <Company title="On-Campus Companies" />
            </div>
            <div>
              <div
                className="upcoming-company-wrapper"
                style={{
                  width: "100%",
                  height: "100%",
                  background: "transparent",
                }}
              >
                <div
                  className="header"
                  style={{
                    width: "100%",
                    height: "5%",
                    background: "transparent",
                  }}
                >
                  <h1
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "transparent",
                      color: "pink",
                      fontSize: "30px",
                    }}
                  >
                    <strong>Off-Campus Companies</strong>
                  </h1>
                </div>

                <div
                  className="cards-section-wrapper"
                  style={{
                    background: "transparent",
                    height: "93%",
                    overflow: "auto",
                    borderRadius: "30px",
                  }}
                >
                  {company.map((currElem) => {
                    const { id } = currElem;
                    if (currElem.type === "off") {
                      return (
                        <NavLink to={`${currElem.url}`}>
                          <CompanyCard key={id} {...currElem} />
                        </NavLink>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyPage;
