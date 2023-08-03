import './CompanyCard.css';
import { Link } from 'react-router-dom';


const CompanyCard = ({handle, name, description, numEmployees}) => {

    
    return (
       <div className="companyCard">
       <Link to={`/companies/${handle}`}><h3>{name}</h3></Link>
       <h5 className='companyCardH5'>Number of Employees: {numEmployees}</h5>
        <p className="companyP">{description}</p>
       </div>
    )
}

export default CompanyCard; 