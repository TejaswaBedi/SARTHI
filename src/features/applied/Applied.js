import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import CompanyCard from "../../components/companyCard/CompCard";
import { fetchCompaniesByUserIdAsync, selectCompany } from "./appliedSlice";
import { selectLoggedInUser } from "../auth/authSlice";
export function Applied() {
  const dispatch = useDispatch();
  const appliedComp = useSelector(selectCompany);
  const user = useSelector(selectLoggedInUser);
  useEffect(() => {
    console.log(user);
    if (user) {
      dispatch(fetchCompaniesByUserIdAsync(user.id));
    }
  }, [dispatch, user.id]);
  return (
    <>
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
            <strong> APPLIED COMPANIES</strong>
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
          {appliedComp.map((currElem) => {
            const { id } = currElem;
            return (
              <NavLink to={`/company-detail/${id}`}>
                <CompanyCard key={id} {...currElem} />
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
}
