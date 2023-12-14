import React from "react";
import "./CompanyCard.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaymentIcon from "@mui/icons-material/Payment";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

const CompanyCard = (props) => {
  return (
    <>
      <div
        className="upcoming-company-card-wrapper"
        style={{
          width: "100%",
          height: "30vh",
          margin: "2% 0",
          background: "white",
          borderRadius: "30px",
        }}
      >
        <div className="company-name">{props.name}</div>

        <div className="line-wrapper">
          <div className="line"></div>
        </div>

        <div className="info-wrapper">
          <div className="info-company">
            <div className="company-type">
              <WorkOutlineOutlinedIcon
                style={{
                  fontSize: "2rem",
                  marginRight: "2%",
                  background: "transparent",
                }}
              />{" "}
              {props.field}
            </div>
            <div className="company-CTC">
              <PaymentIcon
                style={{
                  fontSize: "2rem",
                  marginRight: "2%",
                  background: "transparent",
                }}
              />{" "}
              {props.ctc}
            </div>
            <div className="company-drive-date">
              <CalendarMonthIcon
                style={{
                  fontSize: "2rem",
                  marginRight: "2%",
                  background: "transparent",
                }}
              />{" "}
              {props.scheduled}
            </div>
          </div>

          <div className="info-application-count">
            <div className="application-count">
              <GroupsOutlinedIcon
                style={{
                  fontSize: "2rem",
                  marginRight: "2%",
                  background: "transparent",
                }}
              />{" "}
              {props.vacancy} Vacancies
            </div>
            <div className="info-spare-1"></div>
            <div className="info-spare-2"></div>
          </div>
        </div>

        <div className="upcoming-link"></div>
      </div>
    </>
  );
};

export default CompanyCard;
