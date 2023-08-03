import Company from "./Company";
import SearchForm from "./SearchForm";
import "./CompanyList.css";
import React, { useState, useEffect } from "react";
import JoblyApi from "./api.js";
import Loading from "./Loading";


const CompanyList = () => {
  const [companies, setCompanies] = useState();

  useEffect(function getCompaniesOnMount() {
    search();
  }, []);

  async function search(name) {
    let companies = await JoblyApi.getCompanies(name || null);
    setCompanies(companies);
  }

  if (!companies) return <Loading />;

  return (
    <>
      <SearchForm search={search} />
      {companies.length ? (
        companies.map((c) => {
          return (
            <Company
              key={c.handle}
              handle={c.handle}
              name={c.name}
              description={c.description}
              logoUrl={c.logoUrl}
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
