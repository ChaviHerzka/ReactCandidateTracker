import React from 'react';
import { Link } from 'react-router-dom';
 import { useStatusCounts } from './Context';


const Layout = (props) => {

    const ctx = useStatusCounts();


    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark border-bottom box-shadow">
                    <div className="container">
                        <a className="navbar-brand">Candidate Tracker</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item">
                                    <Link to='/' className="nav-link text-light">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/AddCandidate' className="nav-link text-light">
                                        AddCandidate
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/Pending' className="nav-link text-light">
                                        Pending ({ctx.pendingCount})
                                    </Link>
                                </li>
                                 <li className="nav-item">
                                    <Link to='/Confirmed' className="nav-link text-light">
                                        Confirmed ({ctx.confirmedCount})
                                    </Link>
                                </li>
                                 <li className="nav-item">
                                    <Link to='/Refused' className="nav-link text-light">
                                        Refused ({ctx.refusedCount}) 
                                    </Link>
                                </li> 
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="container" style={{ marginTop: 80 }}>
                {props.children}
            </div>

        </>
    )
}

export default Layout;
