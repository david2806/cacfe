import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap';

function Aportes() {
  return (
    <div className="py-5">
      <Container>
        <div className="mb-4">
          <h2 className="mb-3">
            <i className="bi bi-piggy-bank text-primary me-2"></i>
            Módulo de Aportes
          </h2>
          <p className="text-muted">Visualización y gestión de aportes de los socios</p>
        </div>

        <Row className="mb-4">
          <Col md={4}>
            <Card className="shadow-sm border-0 mb-3">
              <Card.Body>
                <h5 className="text-primary">Total Aportes</h5>
                <h3 className="mb-0">$0.00</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm border-0 mb-3">
              <Card.Body>
                <h5 className="text-success">Socios Activos</h5>
                <h3 className="mb-0">0</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm border-0 mb-3">
              <Card.Body>
                <h5 className="text-info">Aportes del Mes</h5>
                <h3 className="mb-0">$0.00</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Card className="shadow-sm border-0">
          <Card.Header className="bg-primary text-white">
            <h5 className="mb-0">Registro de Aportes</h5>
          </Card.Header>
          <Card.Body>
            <div className="mb-3">
              <Button variant="primary">
                <i className="bi bi-plus-circle me-2"></i>
                Nuevo Aporte
              </Button>
            </div>
            <Table responsive striped hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Socio</th>
                  <th>Fecha</th>
                  <th>Monto</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="6" className="text-center text-muted">
                    No hay registros disponibles
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

export default Aportes;
