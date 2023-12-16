import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createNoticeAsync, selectAllNotices } from "../../notice/noticeSlice";

const NoticeForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      attachment1: { 0: "" },
      attachment2: { 1: "" },
    },
  });
  const dispatch = useDispatch();
  const notices = useSelector(selectAllNotices);
  return (
    <div>
      <div className="flex items-center justify-center p-12">
        <div
          className="upcoming_companies_left_content"
          style={{
            width: "90vw",
            padding: "1vh 2vh",
            margin: "4vh",
            marginLeft: "10vh",
            background: "#242526",
            borderRadius: "30px",
          }}
        >
          <form
            noValidate
            onSubmit={handleSubmit((data) => {
              const notice = { ...data };
              notice.attachments = [notice.attachment1, notice.attachment2];
              delete notice["attachment1"];
              delete notice["attachment2"];
              dispatch(createNoticeAsync(notice));
            })}
          >
            <span
              style={{ color: "white", marginLeft: "3vh", fontSize: "20px" }}
            >
              <strong>Subject</strong>
            </span>
            <div
              className="subCard"
              style={{
                height: "10%",
                width: "85vw",
                background: "white",
                borderRadius: "10px",
                margin: "1.5vh 3vh",
                padding: "1vh 1vh",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className="title"
                style={{
                  background: "transparent",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                <label htmlFor="noticeMsg">Notice Title</label>
                <br></br>
                <div
                  className="info"
                  style={{
                    background: "transparent",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  <input
                    type="text"
                    {...register("noticeMsg", {
                      required: "Subject is required",
                    })}
                    id="noticeMsg"
                    placeholder="Enter ...."
                    style={{
                      borderBottom: "2.5px solid pink",
                      color: "black",
                      width: "83.8vw",
                      padding: "1.2vh",
                    }}
                  />
                </div>
              </div>
            </div>
            <span
              style={{ color: "white", marginLeft: "3vh", fontSize: "20px" }}
            >
              <strong>Description</strong>
            </span>
            <div
              className="subCard"
              style={{
                height: "10%",
                width: "85vw",
                background: "white",
                borderRadius: "10px",
                margin: "1.5vh 3vh",
                padding: "1vh 1vh",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className="title"
                style={{
                  background: "transparent",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                <label htmlFor="description">Description</label>
                <br></br>
                <div
                  className="info"
                  style={{
                    background: "transparent",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  <textarea
                    rows={4}
                    {...register("description", {
                      required: "Type is required",
                    })}
                    id="description"
                    placeholder="Type your message"
                    defaultValue={""}
                    style={{ padding: "1.2vh", width: "84vw" }}
                  />
                </div>
              </div>
            </div>
            <span
              style={{ color: "white", marginLeft: "3vh", fontSize: "20px" }}
            >
              <strong>Attachments</strong>
            </span>
            <div
              className="subCard"
              style={{
                height: "10%",
                width: "85vw",
                background: "white",
                borderRadius: "10px",
                margin: "1.5vh 3vh",
                padding: "1vh 1vh",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className="title"
                style={{
                  background: "transparent",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                <label
                  htmlFor="attachment1"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Attach 1
                </label>
                <br></br>
                <div
                  className="info"
                  style={{
                    background: "transparent",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  <input
                    type="file"
                    {...register("attachment1")}
                    id="attachment1"
                    placeholder="Enter ...."
                    style={{
                      borderBottom: "2.5px solid pink",
                      color: "black",
                      width: "83.8vw",
                      padding: "1.2vh",
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className="subCard"
              style={{
                height: "10%",
                width: "85vw",
                background: "white",
                borderRadius: "10px",
                margin: "1.5vh 3vh",
                padding: "1vh 1vh",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className="title"
                style={{
                  background: "transparent",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                <label
                  htmlFor="attachment2"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Attach 2
                </label>
                <br></br>
                <div
                  className="info"
                  style={{
                    background: "transparent",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  <input
                    type="file"
                    {...register("attachment2")}
                    id="attachment2"
                    placeholder="Enter ...."
                    style={{
                      borderBottom: "2.5px solid pink",
                      color: "black",
                      width: "83.8vw",
                      padding: "1.2vh",
                    }}
                  />
                </div>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <Button
                type="submit"
                style={{
                  backgroundColor: "pink",
                  width: "10vw",
                  fontSize: "20px",
                }}
              >
                <strong>Add</strong>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NoticeForm;
