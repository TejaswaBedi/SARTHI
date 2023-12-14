import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllNotices, fetchNoticeById } from "./noticeAPI";

const initialState = {
  notices: [],
  selectedNotice: null,
  status: "idle",
};

export const fetchAllNoticesAsync = createAsyncThunk(
  "notice/fetchAllNotices",
  async () => {
    const response = await fetchAllNotices();
    return response.data;
  }
);
export const fetchNoticeByIdAsync = createAsyncThunk(
  "notice/fetchNoticeById",
  async (noticeId) => {
    const response = await fetchNoticeById(noticeId);
    return response.data;
  }
);

export const noticeSlice = createSlice({
  name: "notice",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllNoticesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllNoticesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.notices = action.payload;
      })
      .addCase(fetchNoticeByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNoticeByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedNotice = action.payload;
      });
  },
});

export const { increment } = noticeSlice.actions;
export const selectAllNotices = (state) => state.notice.notices;
export const selectNotice = (state) => state.notice.selectedNotice;

export default noticeSlice.reducer;
