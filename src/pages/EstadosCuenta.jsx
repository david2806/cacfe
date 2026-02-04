import { Container, Row, Col, Card, Form, Button, Table } from 'react-bootstrap';

function EstadosCuenta() {
  return (
    <div className="py-5">
      <Container>
        <div className="mb-4">
          <h2 className="mb-3">
            <i className="bi bi-file-earmark-text text-secondary me-2"></i>
            Estados de Cuenta
          </h2>
          <p className="text-muted">Consulta de estados de cuenta individuales</p>
        </div>

        <Card className="shadow-sm border-0 mb-4">
          <Card.Header className="bg-secondary text-white">
            <h5 className="mb-0">Buscar Estado de Cuenta</h5>
          </Card.Header>
          <Card.Body>
            <Form>
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Número de Socio</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese número de socio" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Período</Form.Label>
                    <Form.Select>
                      <option>Seleccione período</option>
                      <option>Enero 2026</option>
                      <option>Febrero 2026</option>
                      <option>Marzo 2026</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>&nbsp;</Form.Label>
                    <div>
                      <Button variant="secondary" className="w-100">
                        <i className="bi bi-search me-2"></i>
                        Buscar
                      </Button>
                    </div>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>

        <Card className="shadow-sm border-0">
          <Card.Header className="bg-light">
            <h5 className="mb-0">Resumen de Cuenta</h5>
          </Card.Header>
          <Card.Body>
            <Row className="mb-4">
              <Col md={3}>
                <div className="border-start border-4 border-primary ps-3">
                  <small className="text-muted">Aportes</small>
                  <h4 className="mb-0">$0.00</h4>
                </div>
              </Col>
              <Col md={3}>
                <div className="border-start border-4 border-success ps-3">
                  <small className="text-muted">Créditos</small>
                  <h4 className="mb-0">$0.00</h4>
                </div>
              </Col>
              <Col md={3}>
                <div className="border-start border-4 border-warning ps-3">
                  <small className="text-muted">Deuda</small>
                  <h4 className="mb-0">$0.00</h4>
                </div>
              </Col>
              <Col md={3}>
                <div className="border-start border-4 border-info ps-3">
                  <small className="text-muted">Saldo</small>
                  <h4 className="mb-0">$0.00</h4>
                </div>
              </Col>
            </Row>

            <Table responsive striped hover>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Descripción</th>
                  <th>Debe</th>
                  <th>Haber</th>
                  <th>Saldo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="5" className="text-center text-muted">
                    No hay movimientos para mostrar
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

export default EstadosCuenta;
