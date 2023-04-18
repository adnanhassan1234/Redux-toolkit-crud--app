import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

const Header = () => {

  const apiAllData = useSelector((state) => state.app.users);

  return (
    <>
    <Navbar bg="light" expand="lg">
      <div className="container-fluid ms-4">
        <NavLink exact to="/" className="navbar-brand">RTK</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link exact as={NavLink} to="/" activeClassName="active">Create Post</Nav.Link>
            <Nav.Link exact as={NavLink} to="/read" activeClassName="active">All Post ({apiAllData.length}) </Nav.Link>
          </Nav>
          <Form className="d-flex" style={{width:'385px'}}>
            <FormControl type="search" placeholder="Search" className="me-4" aria-label="Search" />
          </Form>
        </Navbar.Collapse>
      </div>
    </Navbar>

    </>
  )
}

export default Header;