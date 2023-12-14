import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { CompanyDetail } from "./features/companies/components/CompanyDetail";
import Protected from "./features/auth/components/Protected";

const App = () => {
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
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
