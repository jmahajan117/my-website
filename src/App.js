import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav} from "react-bootstrap";
import {Container} from "react-bootstrap";


class App extends React.Component {

  constructor(props) {
    super(props);
  };

  
  render() {
    return (
      <>
        <Navbar bg="light">
          <Container>
            <Nav>
                <Navbar.Brand href="/">Jay Mahajan</Navbar.Brand>
                <Navbar.Brand>Publications</Navbar.Brand>
                <Navbar.Brand href="https://github.com/jmahajan117">GitHub</Navbar.Brand>
              </Nav>
            </Container>
        </Navbar>
      </>
    )
  }


}

export default App;
