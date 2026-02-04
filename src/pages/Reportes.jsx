import { Container, Row, Col, Card, Form, Button, ListGroup } from 'react-bootstrap';

function Reportes() {
  const reportTypes = [
    {
      category: 'Reportes Financieros',
      reports: [
        { name: 'Balance General', icon: 'bi-file-earmark-spreadsheet' },
        { name: 'Estado de Resultados', icon: 'bi-file-earmark-bar-graph' },
        { name: 'Flujo de Efectivo', icon: 'bi-cash-coin' },
        { name: 'Cartera de Créditos', icon: 'bi-wallet2' }
      ]
    },
    {
      category: 'Reportes Operativos',
      reports: [
        { name: 'Movimientos Diarios', icon: 'bi-calendar-check' },
        { name: 'Aportes por Período', icon: 'bi-graph-up' },
        { name: 'Pagos Recibidos', icon: 'bi-credit-card-2-back' },
        { name: 'Créditos Otorgados', icon: 'bi-cash-stack' }
      ]
    },
    {
      category: 'Reportes Administrativos',
      reports: [
        { name: 'Socios Activos', icon: 'bi-people' },
        { name: 'Morosidad', icon: 'bi-exclamation-triangle' },
        { name: 'Aprobaciones', icon: 'bi-check-circle' },
        { name: 'Auditoría', icon: 'bi-shield-check' }
      ]
    }
  ];

  return (
    <div className="py-5">
      <Container>
        <div className="mb-4">
          <h2 className="mb-3">
            <i className="bi bi-graph-up text-primary me-2"></i>
            Módulo de Reportes
          </h2>
          <p className="text-muted">Generación de reportes financieros y administrativos</p>
        </div>

        <Row>
          {reportTypes.map((category, idx) => (
            <Col key={idx} md={4} className="mb-4">
              <Card className="shadow-sm border-0 h-100">
                <Card.Header className="bg-primary text-white">
                  <h5 className="mb-0">{category.category}</h5>
                </Card.Header>
                <ListGroup variant="flush">
                  {category.reports.map((report, ridx) => (
                    <ListGroup.Item 
                      key={ridx} 
                      action 
                      className="d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <i className={`${report.icon} me-2 text-primary`}></i>
                        {report.name}
                      </div>
                      <Button variant="outline-primary" size="sm">
                        <i className="bi bi-download"></i>
                      </Button>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
            </Col>
          ))}
        </Row>

        <Card className="shadow-sm border-0 mt-4">
          <Card.Header className="bg-light">
            <h5 className="mb-0">Generar Reporte Personalizado</h5>
          </Card.Header>
          <Card.Body>
            <Form>
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Tipo de Reporte</Form.Label>
                    <Form.Select>
                      <option>Seleccione un tipo</option>
                      <option>Financiero</option>
                      <option>Operativo</option>
                      <option>Administrativo</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-3">
                    <Form.Label>Fecha Inicio</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-3">
                    <Form.Label>Fecha Fin</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                </Col>
                <Col md={2}>
                  <Form.Group className="mb-3">
                    <Form.Label>&nbsp;</Form.Label>
                    <div>
                      <Button variant="primary" className="w-100">
                        <i className="bi bi-file-earmark-pdf me-2"></i>
                        Generar
                      </Button>
                    </div>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Reportes;
