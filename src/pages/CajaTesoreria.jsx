import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap';

function CajaTesoreria() {
  return (
    <div className="py-5">
      <Container>
        <div className="mb-4">
          <h2 className="mb-3">
            <i className="bi bi-safe2 text-danger me-2"></i>
            Caja y Tesorería
          </h2>
          <p className="text-muted">Administración de movimientos diarios</p>
        </div>

        <Row className="mb-4">
          <Col md={3}>
            <Card className="shadow-sm border-0 mb-3">
              <Card.Body>
                <h6 className="text-success">Ingresos del Día</h6>
                <h3 className="mb-0">$0.00</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm border-0 mb-3">
              <Card.Body>
                <h6 className="text-danger">Egresos del Día</h6>
                <h3 className="mb-0">$0.00</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm border-0 mb-3">
              <Card.Body>
                <h6 className="text-primary">Saldo en Caja</h6>
                <h3 className="mb-0">$0.00</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm border-0 mb-3">
              <Card.Body>
                <h6 className="text-info">Saldo en Bancos</h6>
                <h3 className="mb-0">$0.00</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Card className="shadow-sm border-0">
          <Card.Header className="bg-danger text-white">
            <h5 className="mb-0">Movimientos de Caja</h5>
          </Card.Header>
          <Card.Body>
            <div className="mb-3 d-flex gap-2">
              <Button variant="success">
                <i className="bi bi-arrow-down-circle me-2"></i>
                Ingreso
              </Button>
              <Button variant="danger">
                <i className="bi bi-arrow-up-circle me-2"></i>
                Egreso
              </Button>
              <Button variant="primary">
                <i className="bi bi-arrow-left-right me-2"></i>
                Transferencia
              </Button>
            </div>
            <Table responsive striped hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tipo</th>
                  <th>Concepto</th>
                  <th>Monto</th>
                  <th>Fecha</th>
                  <th>Usuario</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="7" className="text-center text-muted">
                    No hay movimientos registrados
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

export default CajaTesoreria;
