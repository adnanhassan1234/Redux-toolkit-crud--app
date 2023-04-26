import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../features/UserDetailsSlice";
import { logoutUser } from "../features/LoginSlice";

const Header = () => {
  const dispatch = useDispatch();
  const apiAllData = useSelector((state) => state.app.users);
  const accessToken = useSelector((state) => state.login.accessToken);
  const Item = useSelector((state) => state.cart);

  const handleSearchChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <div className="container-fluid ms-4">
          <NavLink exact to="/main" className="navbar-brand">
            Redux ToolKit
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link exact as={NavLink} to="/main" activeClassName="active">
                Main Page
              </Nav.Link>
              <Nav.Link exact as={NavLink} to="/home" activeClassName="active">
                Create Post
              </Nav.Link>
              <Nav.Link exact as={NavLink} to="/read" activeClassName="active">
                All Post ({apiAllData.length}){" "}
              </Nav.Link>
            </Nav>
            <Form className="d-flex" style={{ width: "385px" }}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-4"
                aria-label="Search"
                onChange={handleSearchChange}
              />
            </Form>
            {accessToken ? (
              <button
                type="button"
                className="btn btn-success my-1"
                onClick={handleLogout}
              >
                LOGOUT
              </button>
            ) : (
              <NavLink to="/">
                <button type="button" className="btn btn-success mx-1 my-1">
                  LOGIN
                </button>
              </NavLink>
            )}
               <Nav.Link
            exact
            as={NavLink}
            to="/cart"
            className="mx-3"
            activeClassName="active"
          >
           <b> Cart ({Item.length})</b>
          </Nav.Link>
          </Navbar.Collapse>
       
        </div>
      </Navbar>
    </>
  );
};

export default Header;
