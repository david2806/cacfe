import { Container, Row, Col, Card, Table, Button, Form } from 'react-bootstrap';

function PagosCreditos() {
  return (
    <div className="py-5">
      <Container>
        <div className="mb-4">
          <h2 className="mb-3">
            <i className="bi bi-credit-card text-info me-2"></i>
            Módulo de Pagos de Créditos
          </h2>
          <p className="text-muted">Procesamiento y verificación de pagos</p>
        </div>

        <Row className="mb-4">
          <Col md={4}>
            <Card className="shadow-sm border-0 mb-3">
              <Card.Body>
                <h6 className="text-success">Pagos del Día</h6>
                <h3 className="mb-0">$0.00</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm border-0 mb-3">
              <Card.Body>
                <h6 className="text-warning">Pagos Pendientes</h6>
                <h3 className="mb-0">0</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm border-0 mb-3">
              <Card.Body>
                <h6 className="text-primary">Total del Mes</h6>
                <h3 className="mb-0">$0.00</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Card className="shadow-sm border-0">
          <Card.Header className="bg-info text-white">
            <h5 className="mb-0">Registro de Pagos</h5>
          </Card.Header>
          <Card.Body>
            <div className="mb-3">
              <Button variant="info">
                <i className="bi bi-plus-circle me-2"></i>
                Registrar Pago
              </Button>
            </div>
            <Table responsive striped hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Socio</th>
                  <th>Crédito</th>
                  <th>Cuota</th>
                  <th>Monto</th>
                  <th>Fecha</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="8" className="text-center text-muted">
                    No hay pagos registrados
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

export default PagosCreditos;
