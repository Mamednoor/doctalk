import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import search from '../shares/searchdoctalk.png'


class Navbar extends Component {
    render() {
        return (
            
            <div className="navbar-container">
                <div>
                    <ul className="navbar-ul">
                        <li>
                            <Link to="/">
                                <img></img>
                            </Link>
                        </li>
                        <li>
                            <Link to="/search">
                            <img  alt="" src={search} href="/"></img>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                            <img></img>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                            <img></img>
                            </Link>
                        </li>
                        <li>
                            <Link className="header-a" to="/">
                                
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar