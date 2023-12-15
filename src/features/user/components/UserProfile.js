import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../../sidebar/Sidebar";
import Header from "../../../pages/Header";
import { selectLoggedInUser } from "../../auth/authSlice";
import { Button } from "@mui/material";

export function UserProfile() {
  const replace = {
    name: "NAME",
    roll: "UNIVERSITY ROLL NO.",
    email: "EMAIL",
    phone: "PHONE",
    branch: "BRANCH & SECTION",
    year: "YEAR",
    cgpa: "CGPA",
    ten: "10TH %",
    twelve: "12TH %",
    back: "BACKLOGS",
  };
  const user = useSelector(selectLoggedInUser);
  console.log(user.profile);
  return (
    <>
      <div className="main-wrapper">
        <div className="navBarSpace">
          <Sidebar />
        </div>
        <div className="actual-page-wrapper">
          <Header heading1="" heading2="PROFILE" heading3="Student Profile" />
          <div
            className="upcoming_companies_left_content"
            style={{
              width: "90vw",
              padding: "1vh 2vh",
              margin: "4vh",
              background: "#242526",
              borderRadius: "30px",
            }}
          >
            <div
              className="info-card-wrapper"
              style={{
                height: "100%",
                width: "100%",
                background: "transparent",
              }}
            >
              <div
                className="heading"
                style={{
                  height: "5%",
                  width: "100%",
                  fontSize: "2rem",
                  color: "pink",
                  fontWeight: "bold",
                  background: "transparent",
                  textAlign: "center",
                }}
              >
                STUDENT INFORMATION
              </div>

              <div
                className="student_info_wrapper"
                style={{
                  height: "100%",
                  width: "90%",
                  background: "transparent",
                  padding: "0 1vh",
                }}
              >
                {Object.entries(user.profile).map((userDetail) => {
                  return (
                    <div
                      className="subCard"
                      style={{
                        height: "7%",
                        width: "85vw",
                        background: "white",
                        borderRadius: "10px",
                        margin: "1.5vh 3vh",
                        padding: "0 1vh",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div
                        className="title"
                        style={{
                          background: "transparent",
                          fontSize: "1.3rem",
                          fontWeight: "bold",
                          color: "gray",
                        }}
                      >
                        {replace[userDetail[0]]} :
                      </div>

                      <div
                        className="info"
                        style={{
                          background: "transparent",
                          fontSize: "1.6rem",
                          fontWeight: "bold",
                        }}
                      >
                        {userDetail[1]}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div style={{ textAlign: "right", marginRight: "2vh" }}>
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "pink",
                    fontSize: "1.2rem",
                  }}
                >
                  Edit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
