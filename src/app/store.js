import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "../features/companies/companySlice";
import authReducer from "../features/auth/authSlice";
export const store = configureStore({
  reducer: {
    company: companyReducer,
    auth: authReducer,
  },
});
