import { NavLink, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./style/app.scss";

function App() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <NavLink className="custom-link" to="/account">
            Account
          </NavLink>
          <NavLink className="custom-link" to="/home">
            Home
          </NavLink>
          <NavLink className="custom-link" to="/today">
            Today
          </NavLink>
          <NavLink className="custom-link" to="/riceps">
            Riceps
          </NavLink>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Signed in as: Mark</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
