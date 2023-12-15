import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createCompany,
  fetchAllCompanies,
  fetchCompanyById,
} from "./companyAPI";

const initialState = {
  companies: [],
  selectedCompany: null,
  status: "idle",
};

export const fetchAllCompaniesAsync = createAsyncThunk(
  "company/fetchAllCompanies",
  async () => {
    const response = await fetchAllCompanies();
    return response.data;
  }
);

export const fetchCompanyByIdAsync = createAsyncThunk(
  "company/fetchCompanyById",
  async (id) => {
    const response = await fetchCompanyById(id);
    return response.data;
  }
);

export const createCompanyAsync = createAsyncThunk(
  "company/createCompany",
  async (company) => {
    const response = await createCompany(company);
    return response.data;
  }
);

export const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCompaniesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllCompaniesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.companies = action.payload;
      })
      .addCase(fetchCompanyByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCompanyByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedCompany = action.payload;
      })
      .addCase(createCompanyAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createCompanyAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.companies.unshift(action.payload);
      });
  },
});

export const { increment } = companySlice.actions;

export const selectAllCompanies = (state) => state.company.companies;
export const selectedCompanyById = (state) => state.company.selectedCompany;

export default companySlice.reducer;
