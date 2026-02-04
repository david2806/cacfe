import { Container, Row, Col, Card, Table, Button, Form } from 'react-bootstrap';

function KardexPrestamos() {
  return (
    <div className="py-5">
      <Container>
        <div className="mb-4">
          <h2 className="mb-3">
            <i className="bi bi-journal-text text-dark me-2"></i>
            Kardex de Préstamos
          </h2>
          <p className="text-muted">Detalle de los préstamos otorgados</p>
        </div>

        <Card className="shadow-sm border-0 mb-4">
          <Card.Header className="bg-dark text-white">
            <h5 className="mb-0">Filtros de Búsqueda</h5>
          </Card.Header>
          <Card.Body>
            <Form>
              <Row>
                <Col md={3}>
                  <Form.Group className="mb-3">
                    <Form.Label>Número de Crédito</Form.Label>
                    <Form.Control type="text" placeholder="Buscar crédito" />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-3">
                    <Form.Label>Socio</Form.Label>
                    <Form.Control type="text" placeholder="Nombre del socio" />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-3">
                    <Form.Label>Estado</Form.Label>
                    <Form.Select>
                      <option>Todos</option>
                      <option>Vigente</option>
                      <option>Cancelado</option>
                      <option>Vencido</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-3">
                    <Form.Label>&nbsp;</Form.Label>
                    <div>
                      <Button variant="dark" className="w-100">
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
            <h5 className="mb-0">Listado de Préstamos</h5>
          </Card.Header>
          <Card.Body>
            <Table responsive striped hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Socio</th>
                  <th>Monto Original</th>
                  <th>Saldo</th>
                  <th>Cuotas</th>
                  <th>Pagadas</th>
                  <th>Fecha Desembolso</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="9" className="text-center text-muted">
                    No hay préstamos registrados
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

export default KardexPrestamos;
