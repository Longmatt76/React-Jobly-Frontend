import './Company.css';
import { Link } from 'react-router-dom';


const Company = ({handle, name, description, logoUrl}) => {

    
    return (
       <div className="companyCard">
       <Link to={`/companies/${handle}`}><h3>{name}</h3></Link>
        <p className="companyP">{description}</p>
       </div>
    )
}

export default Company; 