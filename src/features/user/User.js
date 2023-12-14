import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../sidebar/Sidebar";
import Header from "../../pages/Header";

export function User() {
  const user = ["Test User", "20000321540098"];
  return (
    <>
      <div className="main-wrapper">
        <div className="navBarSpace">
          <Sidebar />
        </div>
        <div className="actual-page-wrapper">
          <Header heading1="" heading2="PROFILE" heading3="Student Profile" />
          <div>
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
                  width: "80%",
                  background: "transparent",
                }}
              >
                {user.map((userDetail) => {
                  return (
                    <div
                      className="subCard"
                      style={{
                        height: "7%",
                        width: "100%",
                        background: "white",
                        borderRadius: "10px",
                        margin: "1vh 0",
                        padding: "0 1rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginLeft: "15%",
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
                        {"Title"} :
                      </div>

                      <div
                        className="info"
                        style={{
                          background: "transparent",
                          fontSize: "1.6rem",
                          fontWeight: "bold",
                        }}
                      >
                        {userDetail}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
