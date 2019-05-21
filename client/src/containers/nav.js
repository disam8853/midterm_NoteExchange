import React from 'react';
import { NavLink } from 'react-router-dom'
import './nav.css'

const subjs = ['Chinese', 'Math', 'English'];

class Nav extends React.Component {
  render() {
    return (
      <div id='navbar'>
				<nav className="navbar navbar-expand-md navbar-light bg-light">
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>
				  <NavLink to='/' className="navbar-brand">
					  Note Exchange
				  </NavLink>

				  <div className="collapse navbar-collapse" id="navbarNavDropdown">
				    <ul className="navbar-nav">
				      <li className="nav-item active">
				        <NavLink to='/' className="nav-link">
					      	Home <span className="sr-only">(current)</span>
				      	</NavLink>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link" href="#">Features</a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link" href="#">Pricing</a>
				      </li>
				    </ul>
				  </div>

				  <div className="dropdown">
				    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				      {subjs[this.props.subj]}
				    </a>
				    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
				      <a className="dropdown-item" href="#" onClick={()=>this.props.changeSubj(0)}>Chinese</a>
				      <a className="dropdown-item" href="#" onClick={()=>this.props.changeSubj(1)}>Math</a>
				      <a className="dropdown-item" href="#" onClick={()=>this.props.changeSubj(2)}>English</a>
				    </div>
				  </div>

				  <form className="form-inline d-none d-md-block">
				    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
				    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				  </form>
				</nav>
			</div>
    )
  }
}

export default Nav;