import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "./img/bg.jpg";
import data from "./data.js";
import { useState } from "react";

function App() {
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Shoes shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">cart</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>

      <div className="container">
        <div className="row">
          {
            map((a, i) => <Item />)
          }
          {/* <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="80%"
            />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </div>
          <div className="col-md-4">
            {" "}
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="80%"
            />
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].price}</p>
          </div>
          <div className="col-md-4">
            {" "}
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="80%"
            />
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].price}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

function Item(prop) {
  return (
    <div className="col-md-4">
      {" "}
      <img src=props.img width="80%" />
      <h4>{shoes[2].title}</h4>
      <p>{shoes[2].price}</p>
    </div>
  );
}

export default App;
