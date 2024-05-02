import "./Job.css";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router";
import Footer from "./Footer";

function Job() {
  const navigate = useNavigate();

  function apply() {
    // alert(" Apply");
    navigate("/ApplyForm");
  }
  const [list, setList] = useState([]);

  async function getJobList() {
    try {
      const joblist = await fetch("http://localhost:9000/job", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const info = await joblist.json();
      setList(info);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    getJobList();
  }, []);

  useEffect(() => {
    // console.log("From frontend", list);
  }, [list]);

  return (
    <>
      <div className="job">
        {list && list.length > 0 ? (
          list.map((item, i) => (
            <div className="job-list" key={i}>
              <div className="job-title">
                <h3>jobCategory: {item.jobCategory}</h3>
                <h3>job level: {item.joblevel}</h3>
                <h3>number Of Vacancys: {item.numberOfVacancys}</h3>
                <h3>employment Type: {item.employmentType}</h3>
                <h3>job location: {item.joblocation}</h3>
                <h3>Offered Salary: {item.OfferedSalary}</h3>
                <h3>eduction Level: {item.eductionLevel}</h3>
                <h3>experience:{item.experience}</h3>
                <button
                  className="apply-btn"
                  onClick={() => {
                    apply();
                  }}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Job;
