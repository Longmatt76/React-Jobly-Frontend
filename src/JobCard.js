import "./JobCard.css";
import UserContext from "./UserContext";
import { useContext } from "react";

const JobCard = ({ title, salary, equity, id}) => {
  const {currentUser, applicationIDs, apply } = useContext(UserContext);
  const isApplied = (currentUser.applications.includes(id) || applicationIDs.includes(id));

  return (
    <>
      <div className="jobCard">
        <h4 className="jobCardTitle">Job Title: {title}</h4>
        <p className="jobCardSalary">Salary: {salary}</p>
        <p className="jobCardEquity">Equity: {equity}</p>
        {isApplied ? (
          <h4 className="applied">Applied!</h4>
        ) : (
          <button onClick={() => apply(currentUser.username, id)} className="jobCardButton">
            Apply
          </button>
        )}
      </div>
    </>
  );
};

export default JobCard;

