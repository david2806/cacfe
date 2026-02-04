import { Container, Row, Col, Card, Table, Button, Form, Badge } from 'react-bootstrap';

function Documentos() {
  return (
    <div className="py-5">
      <Container>
        <div className="mb-4">
          <h2 className="mb-3">
            <i className="bi bi-folder2-open text-success me-2"></i>
            Documentos y Comprobantes
          </h2>
          <p className="text-muted">Gestión de documentos y comprobantes relacionados con las operaciones</p>
        </div>

        <Row className="mb-4">
          <Col md={3}>
            <Card className="shadow-sm border-0 mb-3">
              <Card.Body>
                <h6 className="text-primary">Total Documentos</h6>
                <h3 className="mb-0">0</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm border-0 mb-3">
              <Card.Body>
                <h6 className="text-success">Este Mes</h6>
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
                <h6 className="text-info">Archivados</h6>
                <h3 className="mb-0">0</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Card className="shadow-sm border-0 mb-4">
          <Card.Header className="bg-light">
            <h5 className="mb-0">Filtros</h5>
          </Card.Header>
          <Card.Body>
            <Form>
              <Row>
                <Col md={3}>
                  <Form.Group className="mb-3">
                    <Form.Label>Tipo de Documento</Form.Label>
                    <Form.Select>
                      <option>Todos</option>
                      <option>Comprobante de Pago</option>
                      <option>Pagaré</option>
                      <option>Contrato</option>
                      <option>Recibo</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-3">
                    <Form.Label>Estado</Form.Label>
                    <Form.Select>
                      <option>Todos</option>
                      <option>Activo</option>
                      <option>Archivado</option>
                      <option>Pendiente</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Buscar</Form.Label>
                    <Form.Control type="text" placeholder="Número o descripción" />
                  </Form.Group>
                </Col>
                <Col md={2}>
                  <Form.Group className="mb-3">
                    <Form.Label>&nbsp;</Form.Label>
                    <div>
                      <Button variant="success" className="w-100">
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
          <Card.Header className="bg-success text-white">
            <h5 className="mb-0">Gestión de Documentos</h5>
          </Card.Header>
          <Card.Body>
            <div className="mb-3">
              <Button variant="success">
                <i className="bi bi-upload me-2"></i>
                Subir Documento
              </Button>
            </div>
            <Table responsive striped hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tipo</th>
                  <th>Número</th>
                  <th>Descripción</th>
                  <th>Socio</th>
                  <th>Fecha</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="8" className="text-center text-muted">
                    No hay documentos registrados
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

export default Documentos;
