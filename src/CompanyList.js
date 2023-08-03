import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import "./CompanyList.css";
import React, { useState, useEffect } from "react";
import JoblyApi from "./api.js";
import Loading from "./Loading";


const CompanyList = () => {
  const [companies, setCompanies] = useState();

  useEffect(function getCompaniesOnMount() {
    searchCompanies();
  }, []);

  async function searchCompanies(name) {
    let companies = await JoblyApi.getCompanies(name || null);
    setCompanies(companies);
  }

  if (!companies) return <Loading />;

  return (
    <>
      <SearchForm search={searchCompanies} />
      {companies.length ? (
        companies.map((c) => {
          return (
            <CompanyCard
              key={c.handle}
              handle={c.handle}
              name={c.name}
              description={c.description}
              logoUrl={c.logoUrl}
              numEmployees={c.numEmployees}
            />
          );
        })
      ) : (
        <h3 className="notFound">Company not found... </h3>
      )}
    </>
  );
};

export default CompanyList;
