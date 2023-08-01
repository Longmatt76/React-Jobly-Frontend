import './Home.css';
import {Link} from 'react-router-dom';


const Home = () => {
    return (
        <div className='home'>
            <h1>Jobly</h1>
            <p>All the jobs in one convenient place.</p>
            <div className='buttonContainer'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/signup'><button>Signup</button></Link>
            </div>
        </div>
    )
}

export default Home; 