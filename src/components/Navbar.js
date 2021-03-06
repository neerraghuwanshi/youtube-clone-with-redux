import React from 'react';
import { NavLink} from 'react-router-dom';
import '../css/Navbar.css';
import SearchBar from './SearchBar'

class Navbar extends React.Component {

    render() {

        return (
                <div className="maindiv">
                    <div>
                        <i className="fas fa-bars"><NavLink className="link" to="/"><i className="fab fa-youtube">YouTube</i></NavLink></i>
                    </div>
                    <div>
                        <SearchBar />
                    </div>
                    <div>
                        <NavLink className="link" to='/trending'>Trending</NavLink>
                    </div>
                </div>
        )
    }
}


export default Navbar