import './SearchForm.css';
import React, {useState} from 'react';

const SearchForm = ({search}) => {

const INITIALSTATE = ''
const [searchTerm, setSearchTerm] = useState(INITIALSTATE);

const handleChange = (e) => {
    setSearchTerm(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault();
    search(searchTerm);
    setSearchTerm(INITIALSTATE);
}

    return (
        <form className='searchForm' onSubmit={handleSubmit}>
            <input 
            className='searchBar'
            type='text'
            placeholder='search by name'
            onChange={handleChange}
            value={searchTerm}
            />
          <button type='submit'>Submit</button>
        </form>
    )
}

export default SearchForm; 