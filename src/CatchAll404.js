import { Link } from "react-router-dom";
import './Home.css';

const CatchAll404 = () => {
    return (
        <div className="home">
        <h1>404 PAGE NOT FOUND!</h1>
        <Link to="/"><button>Home</button></Link>
        </div>
    )
}

export default CatchAll404; 