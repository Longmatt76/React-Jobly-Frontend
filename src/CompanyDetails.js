import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import JobCard from "./JobCard";

const CompanyDetails = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState();

  async function getCompanyAndJobs(handle) {
    let company = await JoblyApi.getCompany(handle);
    setCompany(company);
    console.log(company);
  }

  useEffect(() => {
    getCompanyAndJobs(handle);
  }, [handle]);

  if (!company) {
    return <Loading />;
  }

  return (
    <div>
        <h1 style={{textAlign: 'center'}}>{company.name}</h1>
        <p style={{color: 'white'}}>{company.description}</p>
      <ul>
        {company.jobs.map((job) => (
          <li key={job.id}>
            <JobCard
              title={job.title}
              salary={job.salary}
              equity={job.equity}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyDetails;
