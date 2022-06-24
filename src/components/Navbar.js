import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link, Outlet} from 'react-router-dom';


function NavScrollExample() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active text-white lead" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active text-white lead" to='/aboutus'>About</Link>
                </li>
                <li className='nav-item'>
                    <Link className="active nav-link text-white lead" to='/register'>Register</Link>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white lead" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Login
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                        <Link className="dropdown-item" to='/slogin'>Student</Link>
                    </li>
                    <li>
                    <Link className="dropdown-item" to='/alogin'>Admin</Link>
                    </li>
                    {/* <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                </ul>
                </li>
            </ul>

            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-primary" style={{color:"#22acf0"}} type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>

  );
}

export default NavScrollExample;