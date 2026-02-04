import { Container, Row, Col, Card, Table, Button, Badge } from 'react-bootstrap';

function Aprobaciones() {
  return (
    <div className="py-5">
      <Container>
        <div className="mb-4">
          <h2 className="mb-3">
            <i className="bi bi-check2-circle text-warning me-2"></i>
            Flujo de Aprobaciones
          </h2>
          <p className="text-muted">Gestión de aprobaciones internas</p>
        </div>

        <Row className="mb-4">
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
                <h6 className="text-success">Aprobadas</h6>
                <h3 className="mb-0">0</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm border-0 mb-3">
              <Card.Body>
                <h6 className="text-danger">Rechazadas</h6>
                <h3 className="mb-0">0</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm border-0 mb-3">
              <Card.Body>
                <h6 className="text-info">En Revisión</h6>
                <h3 className="mb-0">0</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Card className="shadow-sm border-0">
          <Card.Header className="bg-warning text-dark">
            <h5 className="mb-0">Solicitudes Pendientes de Aprobación</h5>
          </Card.Header>
          <Card.Body>
            <Table responsive striped hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tipo</th>
                  <th>Solicitante</th>
                  <th>Monto</th>
                  <th>Fecha Solicitud</th>
                  <th>Estado</th>
                  <th>Nivel</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="8" className="text-center text-muted">
                    No hay solicitudes pendientes
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

export default Aprobaciones;
