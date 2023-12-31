import JobCard from "./JobCard";
import SearchForm from "./SearchForm";
import "./JobList.css";
import React, { useEffect, useState } from "react";
import JoblyApi from "./api";

const JobList = ({apply}) => {
  const [jobs, setJobs] = useState([]);

  useEffect(function getJobsOnMount() {
    searchJobs();
  }, []);

  async function searchJobs(title) {
    const jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  return (
    <div>
      <SearchForm search={searchJobs} />
      <ul>
        {jobs.length ? (
          jobs.map((j) => {
            return (
              <li key={j.id}>
                <JobCard apply={apply} title={j.title} salary={j.salary} equity={j.equity} id={j.id} />
              </li>
            );
          })
        ) : (
          <h3 className="notFound">Job not found...</h3>
        )}
      </ul>
    </div>
  );
};

export default JobList;
