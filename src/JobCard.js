import "./JobCard.css";

const JobCard = ({ title, salary, equity}) => {
  return (
    <>
      <div className="jobCard">
        <h4 className="jobCardTitle">Job Title: {title}</h4>
        <p className="jobCardSalary">Salary: {salary}</p>
        <p className="jobCardEquity">Equity: {equity}</p>
        <button className="jobCardButton">Apply</button>
      </div>
    </>
  );
};

export default JobCard;
