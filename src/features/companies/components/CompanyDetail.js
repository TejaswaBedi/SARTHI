import React, { useEffect, useState } from "react";
import BusinessIcon from "@mui/icons-material/Business";
import TitleIcon from "@mui/icons-material/Title";
import PaymentIcon from "@mui/icons-material/Payment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./Company.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanyByIdAsync, selectedCompanyById } from "../companySlice";
import { useParams } from "react-router";

export function CompanyDetail() {
  const data = [
    {
      id: 1,
      title: `CGPA`,
      info: "7.5",
    },
    {
      id: 2,
      title: `10TH MARK'S PERCENTAGE`,
      info: "65",
    },
    {
      id: 3,
      title: `12TH MARK'S PERCENTAGE`,
      info: "65",
    },
    {
      id: 4,
      title: `BACKLOGS`,
      info: "0",
    },
  ];
  const dispatch = useDispatch();
  const product = useSelector(selectedCompanyById);
  const params = useParams();
  useEffect(() => {
    dispatch(fetchCompanyByIdAsync(params.id));
  }, [dispatch, params.id]);
  return (
    <>
      {product && (
        <div className="main-wrapper">
          <div className="navBarSpace"></div>
          <div className="main_page_wrapper">
            {/* <PageHeader heading="COMPANY DETAILS" type="company_page" /> */}
            <div
              className="header_wrapper"
              style={{
                width: "90vw",
                height: "30vh",
                margin: "2vh 4vh",
                border: "red 2px",
                borderRadius: "30px",

                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {/* Product ka data yaha aaega */}
              <div className="companyName infoField">
                <div className="icon-wrapper">
                  <BusinessIcon
                    className="icon"
                    style={{ fontSize: "3.5rem" }}
                  />
                </div>
                <div className="tagTitle">COMPANY NAME</div>
                <div
                  style={{
                    backgroundColor: "pink",
                    height: "1%",
                    width: "90%",
                  }}
                ></div>
                <div className="tagName">{product.name}</div>
              </div>
              <div className="companyType infoField">
                <div className="icon-wrapper">
                  <TitleIcon className="icon" style={{ fontSize: "3.5rem" }} />
                </div>
                <div className="tagTitle">COMPANY TYPE</div>
                <div
                  style={{
                    backgroundColor: "pink",
                    height: "1%",
                    width: "90%",
                  }}
                ></div>
                <div className="tagName">{product.field}</div>
              </div>
              <div className="companyCTC infoField">
                <div className="icon-wrapper">
                  <PaymentIcon
                    className="icon"
                    style={{ fontSize: "3.5rem" }}
                  />
                </div>
                <div className="tagTitle">COMPANY CTC</div>
                <div
                  style={{
                    backgroundColor: "pink",
                    height: "1%",
                    width: "90%",
                  }}
                ></div>
                <div className="tagName">{product.ctc}</div>
              </div>
              <div className="companyDate infoField">
                <div className="icon-wrapper">
                  <CalendarMonthIcon
                    className="icon"
                    style={{ fontSize: "3.5rem" }}
                  />
                </div>
                <div className="tagTitle">DATE OF ARRIVAL</div>
                <div
                  style={{
                    backgroundColor: "pink",
                    height: "1%",
                    width: "90%",
                  }}
                ></div>
                <div className="tagName">{product.scheduled}</div>
              </div>
            </div>
            <div
              className="header_wrapper"
              style={{
                width: "90vw",
                height: "35vh",
                margin: "2vh 4vh",

                background: "#242526",
                border: "red 2px",
                borderRadius: "30px",
              }}
            >
              <div className="header-wrapper">
                <div className="header-main">ELIGIBILITY CRITERIA</div>
                <div className="applied_button">APPLIED</div>
              </div>
              <div className="list-wrapper">
                {data.map((currElem) => {
                  return (
                    <div
                      style={{
                        height: "20%",
                        width: "98%",
                        background: "white",

                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",

                        padding: "0 2vh",
                        marginTop: "1vh",
                        borderRadius: "20px",
                      }}
                    >
                      <div
                        className="title-wrapper"
                        style={{
                          width: "50%",
                          height: "100%",
                          background: "yellow",
                          display: "flex",
                          alignItems: "center",
                          background: "transparent",
                          fontSize: "1.4rem",
                          color: "gray",
                          fontWeight: "bold",
                        }}
                      >
                        {currElem.title} :
                      </div>
                      <div
                        className="info-wrapper"
                        style={{
                          width: "50%",
                          height: "100%",
                          background: "green",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "flex-end",
                          background: "transparent",
                          fontSize: "1.4rem",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        {currElem.info}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
