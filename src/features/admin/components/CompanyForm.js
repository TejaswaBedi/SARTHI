import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createCompanyAsync } from "../../companies/companySlice";

const CompanyForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
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
              const company = { ...data };
              company.attachments = [company.attachment1, company.attachment2];
              delete company["attachment1"];
              delete company["attachment2"];
              dispatch(createCompanyAsync(company));
            })}
          >
            <span
              style={{ color: "white", marginLeft: "3vh", fontSize: "20px" }}
            >
              <strong>Company Details</strong>
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
                  htmlFor="type"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Company On-campus / Off-campus
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
                    type="text"
                    {...register("type", { required: "Type is required" })}
                    id="type"
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
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Company Name
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
                    type="text"
                    {...register("name", { required: "Type is required" })}
                    id="name"
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
                  htmlFor="field"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Company Type
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
                    type="text"
                    {...register("field", { required: "Type is required" })}
                    id="field"
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
                  htmlFor="ctc"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Company CTC
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
                    type="text"
                    {...register("ctc", { required: "Type is required" })}
                    id="ctc"
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
                  htmlFor="scheduled"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Scheduled
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
                    type="text"
                    {...register("scheduled", { required: "Type is required" })}
                    id="scheduled"
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
                <label
                  htmlFor="description"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Description
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
                  <textarea
                    rows={4}
                    {...register("description", {
                      required: "Type is required",
                    })}
                    id="description"
                    placeholder="Type your message"
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    defaultValue={""}
                    style={{ padding: "1.2vh", width: "84vw" }}
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
                  htmlFor="vacancy"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Vacancy
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
                    type="text"
                    {...register("vacancy", { required: "Type is required" })}
                    id="vacancy"
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
            <span
              style={{ color: "white", marginLeft: "3vh", fontSize: "20px" }}
            >
              <strong>Eligiblity Criteria</strong>
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
                  htmlFor="cgpa"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  CGPA
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
                    type="text"
                    {...register("cgpa", {
                      required: "Type is required",
                    })}
                    id="cgpa"
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
                  htmlFor="ten"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  10 %
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
                    type="text"
                    {...register("ten", {
                      required: "Type is required",
                    })}
                    id="ten"
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
                  htmlFor="twelve"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  12 %
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
                    type="text"
                    {...register("twelve", {
                      required: "Type is required",
                    })}
                    id="twelve"
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
                  htmlFor="backlogs"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Backlogs
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
                    type="text"
                    {...register("backlogs", {
                      required: "Type is required",
                    })}
                    id="backlogs"
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

export default CompanyForm;