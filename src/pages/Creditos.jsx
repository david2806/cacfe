import { Container, Row, Col, Card, Table, Button, Badge } from 'react-bootstrap';

function Creditos() {
  return (
    <div className="py-5">
      <Container>
        <div className="mb-4">
          <h2 className="mb-3">
            <i className="bi bi-cash-stack text-success me-2"></i>
            Módulo de Créditos
          </h2>
          <p className="text-muted">Solicitudes, detalles y seguimiento de créditos</p>
        </div>

        <Row className="mb-4">
          <Col md={3}>
            <Card className="shadow-sm border-0 mb-3">
              <Card.Body>
                <h6 className="text-success">Créditos Activos</h6>
                <h3 className="mb-0">0</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm border-0 mb-3">
              <Card.Body>
                <h6 className="text-warning">Pendientes</h6>
                <h3 className="mb-0">0</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm border-0 mb-3">
              <Card.Body>
                <h6 className="text-primary">Monto Total</h6>
                <h3 className="mb-0">$0.00</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm border-0 mb-3">
              <Card.Body>
                <h6 className="text-info">Aprobados</h6>
                <h3 className="mb-0">0</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Card className="shadow-sm border-0">
          <Card.Header className="bg-success text-white">
            <h5 className="mb-0">Gestión de Créditos</h5>
          </Card.Header>
          <Card.Body>
            <div className="mb-3">
              <Button variant="success">
                <i className="bi bi-plus-circle me-2"></i>
                Nueva Solicitud
              </Button>
            </div>
            <Table responsive striped hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Socio</th>
                  <th>Monto</th>
                  <th>Plazo</th>
                  <th>Tasa</th>
                  <th>Fecha Solicitud</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="8" className="text-center text-muted">
                    No hay solicitudes de crédito
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Creditos;
