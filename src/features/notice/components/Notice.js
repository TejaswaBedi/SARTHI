import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../../sidebar/Sidebar";
import Header from "../../../pages/Header";
import { fetchAllNoticesAsync, selectAllNotices } from "../noticeSlice";
import { NavLink } from "react-router-dom";

export function Notice() {
  const dispatch = useDispatch();
  const notice = useSelector(selectAllNotices);
  useEffect(() => {
    dispatch(fetchAllNoticesAsync());
  }, [dispatch]);
  return (
    <>
      <div className="main-wrapper">
        <div className="navBarSpace">
          <Sidebar />
        </div>
        <div className="actual-page-wrapper">
          <Header heading1="" heading2="NOTICE" heading3="Be Updated !" />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
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
                  // className="cards-section-wrapper"
                  style={{
                    background: "transparent",
                    height: "93%",
                    overflow: "auto",
                    borderRadius: "30px",
                  }}
                >
                  {notice.map((currNotice) => {
                    return (
                      <NavLink to={`/notice-detail/${currNotice.id}`}>
                        <div
                          style={{
                            width: "90vw",
                            margin: "1vh 4vh",
                            padding: "2vh",
                            background: "#242526",
                            border: "red 2px",
                            borderRadius: "30px",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div
                            style={{
                              color: "white",
                              fontSize: "20px",
                              marginTop: "17px",
                            }}
                          >
                            {currNotice.noticeMsg}
                          </div>
                          <div style={{ color: "pink" }}>
                            <p>Date - 10/12/2023</p>
                            <br />
                            <p> Time - 07.12 a.m.</p>
                          </div>
                        </div>
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
