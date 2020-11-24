import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Nav
        onScroll={this.handleScroll}
        className="container-fluid bg-dark border-top"
      >
        <div className="row h-100 ">
          <Logo className="col-md-2 col-sm-12 d-flex align-items-center justify-content-end">
            <h1>logo</h1>
          </Logo>
          <div className="col-md-10 d-none d-md-block">
            <Ul className="row text-capitalize d-flex justify-content-end h-100 align-items-center m-0 style-none">
              <Link className="links" to="/">
                <ListItem className="link-container mx-2 py-1">
                  <ListLinks className="link text-light font-weight-bold">
                    home
                  </ListLinks>
                </ListItem>
              </Link>
              <ListItem className="link-container mx-2 py-1">
                <ListLinks className="link text-light font-weight-bold" href="">
                  products
                </ListLinks>
              </ListItem>
              <ListItem className="link-container mx-2 py-1">
                <ListLinks className="link text-light font-weight-bold" href="">
                  branches
                </ListLinks>
              </ListItem>
              <ListItem className="link-container mx-2 py-1">
                <ListLinks className="link text-light font-weight-bold" href="">
                  features
                </ListLinks>
              </ListItem>
              <ListItem className="link-container mx-2 py-1">
                <ListLinks className="link text-light font-weight-bold" href="">
                  contact us
                </ListLinks>
              </ListItem>
            </Ul>
          </div>
        </div>
      </Nav>
    );
  }
}

export default NavBar;

const Nav = styled.nav`
  height: 20vh;
  z-index: 5;
`;

const ListItem = styled.li`
  &:hover {
    border-bottom: solid #034ea1 2px;
    listlinks {
      color: #034ea1;
    }
  }
`;

const ListLinks = styled.span`
  &:hover {
    text-decoration: none;
  }
`;

const Ul = styled.ul`
  list-style: none;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.4rem;
`;

const Logo = styled.div`
  font-family: "Dancing Script", cursive;
  color: white;
  h1 {
    font-size: 5rem;
  }
`;
