import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { CompanyDetail } from "./features/companies/components/CompanyDetail";
import Protected from "./features/auth/components/Protected";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompaniesByUserIdAsync } from "./features/applied/appliedSlice";
import { selectLoggedInUser } from "./features/auth/authSlice";
import { Applied } from "./features/applied/Applied";
import PageNotFound from "./pages/404";

const App = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Protected>
                <HomePage />
              </Protected>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/company-detail/:id"
            element={
              <Protected>
                <CompanyDetail />
              </Protected>
            }
          />
          <Route
            path="/applied-page"
            element={
              <Protected>
                <Applied />
              </Protected>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
