import styles from "./styles.module.css";
import { Badge, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import HeaderLiftBar from "./HeaderLiftBar/HeaderLiftBar";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { authLogOut } from "@store/auth/authSlice";
import { useEffect } from "react";
import actGetWishlist from "@store/Wishlist/act/actGetWishlist";

const { headerContainer, headerLogo } = styles;

function Header() {
  const dispatch = useAppDispatch();
  const { user, accessToken } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (accessToken) {
      dispatch(actGetWishlist("ProductIds"));
    }
  }, [dispatch, accessToken]);

  return (
    <header>
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span>our</span>
          <Badge bg="info">eCom</Badge>
        </h1>
        <HeaderLiftBar />
      </div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/categories">
                Categories
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about-us">
                About Us
              </Nav.Link>
            </Nav>
            <Nav>
              {accessToken ? (
                <NavDropdown
                  title={`Welcome: ${user?.firstName} ${user?.lastName}`}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item as={NavLink} to="/profile" end>
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/profile/orders">Orders</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    className="text-danger bg-transparent"
                    as={NavLink}
                    to="/"
                    onClick={() => dispatch(authLogOut())}
                  >
                    Log out
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                  <Nav.Link as={NavLink} to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/register">
                    Register
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
