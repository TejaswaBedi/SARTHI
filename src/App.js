import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { CompanyDetail } from "./features/companies/components/CompanyDetail";
import Protected from "./features/auth/components/Protected";
import { useDispatch, useSelector } from "react-redux";
import { Applied } from "./features/applied/Applied";
import PageNotFound from "./pages/404";
import CompanyPage from "./pages/CompanyPage";
import { Notice } from "./features/notice/components/Notice";
import NoticeDetail from "./features/notice/components/NoticeDetail";
import { UserProfile } from "./features/user/components/UserProfile";
import User from "./features/user/components/User";
import Logout from "./features/auth/components/Logout";
import ProtectedAdmin from "./features/auth/components/ProtectedAdmin";
import AdminHomePage from "./pages/AdminHomePage";
import { AdminCompanyDetail } from "./features/admin/components/AdminCompanyDetail";

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
          <Route
            path="/admin"
            element={
              <ProtectedAdmin>
                <AdminHomePage />
              </ProtectedAdmin>
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
            path="/admin/company-detail/:id"
            element={
              <ProtectedAdmin>
                <AdminCompanyDetail />
              </ProtectedAdmin>
            }
          />
          <Route
            path="/company-page"
            element={
              <Protected>
                <CompanyPage />
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
          <Route
            path="/notice-detail/:id"
            element={
              <Protected>
                <NoticeDetail />
              </Protected>
            }
          />
          <Route
            path="/notice-page"
            element={
              <Protected>
                {" "}
                <Notice />{" "}
              </Protected>
            }
          />
          <Route
            path="/profile-page"
            element={
              <Protected>
                <UserProfile />
              </Protected>
            }
          />
          <Route
            path="/update-profile"
            element={
              <Protected>
                <User />
              </Protected>
            }
          />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
