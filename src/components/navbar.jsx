import React, { Component } from 'react';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import './navbar.css';

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleLogout.bind(this);
      }

      handleLogout=e=>{
            this.props.Logout();
      }

    


    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div>
                        <Link className="navbar-brand" to="/signin"><img src={logo}></img></Link>
                    </div>
                    <br></br>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Non-Certified EA</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">EA Commercial Resources</Link>
                            </li>
                           


                        </ul>
                        
                        <div className="logout-btn-cont">
                            <button type="button" className="btn btn-light btn-outline-secondary" onClick={this.handleLogout}>Logout</button>
                        </div>
                            
                    </div>
                </nav>
                

            </React.Fragment>
        );
    }
}

export default NavBar;