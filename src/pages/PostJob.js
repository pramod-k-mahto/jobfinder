import { useState } from "react";
import { useNavigate } from "react-router";
// import Job from './Job';

import "./PostJob.css";
function PostJob() {
  const naviagate = useNavigate();

  const [jobCategory, setJobCategory] = useState();
  const [joblevel, setJobLevel] = useState();
  const [numberOfVacancys, setNumberOfVacancys] = useState();
  const [employmentType, setEmploymentType] = useState();
  const [joblocation, setJobLocation] = useState();
  const [OfferedSalary, setOfferedSalary] = useState();
  const [eductionLevel, setEducationLevel] = useState();
  const [experience, setExprince] = useState();

  function jobPost() {
    naviagate("/Job");
  }

  async function createJob(e) {
    e.preventDefault();
    const jobDetail = {
      jobCategory,
      joblevel,
      numberOfVacancys,
      employmentType,
      joblocation,
      OfferedSalary,
      eductionLevel,
      experience,
    };
    // console.log(jobDetail);

    const res = await fetch("http://localhost:9000/postJob", {
      method: "post",
      body: JSON.stringify(jobDetail),
      headers: {
        "content-type": "application/json",
      },
    });
    if (res) {
      alert("Job is Posted");
      jobPost();
    }
    // console.log(res);
  }

  return (
    <>
      <div>
        <form action="" className="form">
          <span>Basic Job Information:</span>

          <div>
            <label htmlFor="">Job Category </label> <br />
            <input
              onChange={(e) => {
                setJobCategory(e.target.value);
              }}
              type="text"
            />{" "}
            <br />
            <label htmlFor="">Job Level </label> <br />
            <input
              onChange={(e) => {
                setJobLevel(e.target.value);
              }}
              type="text"
            />{" "}
            <br />
            <label htmlFor="">No. of Vacancys </label>
            <br />
            <input
              type="text"
              onChange={(e) => {
                setNumberOfVacancys(e.target.value);
              }}
            />
            <br />
            <label htmlFor="">Employment Type </label> <br />
            <input
              type="text"
              onChange={(e) => {
                setEmploymentType(e.target.value);
              }}
            />{" "}
            <br />
            <label htmlFor="">Job Location </label> <br />
            <input
              type="text"
              onChange={(e) => {
                setJobLocation(e.target.value);
              }}
            />{" "}
            <br />
            <label htmlFor="">Offered Salary </label> <br />
            <input
              type="text"
              onChange={(e) => {
                setOfferedSalary(e.target.value);
              }}
            />{" "}
            <br />
            <label htmlFor="">Education Level </label> <br />
            <input
              type="text"
              onChange={(e) => {
                setEducationLevel(e.target.value);
              }}
            />
            <br />
            <label htmlFor="">Experience Required</label> <br />
            <input
              type="text"
              onChange={(e) => {
                setExprince(e.target.value);
              }}
            />
            <button
              className="submit"
              onClick={(e) => {
                createJob(e);
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PostJob;
