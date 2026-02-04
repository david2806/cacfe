import { Outlet, Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

function MainLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar bg="primary" variant="dark" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <i className="bi bi-bank2 me-2"></i>
            CACFE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              
              <NavDropdown title="Módulos" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/aportes">
                  Aportes
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/creditos">
                  Créditos
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/pagos-creditos">
                  Pagos de Créditos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/aprobaciones">
                  Flujo de Aprobaciones
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/caja-tesoreria">
                  Caja y Tesorería
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/estados-cuenta">
                  Estados de Cuenta
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/kardex-prestamos">
                  Kardex de Préstamos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/reportes">
                  Reportes
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/documentos">
                  Documentos y Comprobantes
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <main className="flex-grow-1 bg-light">
        <Outlet />
      </main>
      
      <footer className="bg-dark text-white py-3 mt-auto">
        <Container>
          <div className="text-center">
            <p className="mb-0">© 2026 CACFE - Cooperativa de Ahorro y Crédito. Todos los derechos reservados.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default MainLayout;
