import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  const modules = [
    {
      title: 'Aportes',
      description: 'Visualización y gestión de aportes de los socios',
      icon: 'bi-piggy-bank',
      link: '/aportes',
      color: 'primary'
    },
    {
      title: 'Créditos',
      description: 'Solicitudes, detalles y seguimiento de créditos',
      icon: 'bi-cash-stack',
      link: '/creditos',
      color: 'success'
    },
    {
      title: 'Pagos de Créditos',
      description: 'Procesamiento y verificación de pagos',
      icon: 'bi-credit-card',
      link: '/pagos-creditos',
      color: 'info'
    },
    {
      title: 'Flujo de Aprobaciones',
      description: 'Gestión de aprobaciones internas',
      icon: 'bi-check2-circle',
      link: '/aprobaciones',
      color: 'warning'
    },
    {
      title: 'Caja y Tesorería',
      description: 'Administración de movimientos diarios',
      icon: 'bi-safe2',
      link: '/caja-tesoreria',
      color: 'danger'
    },
    {
      title: 'Estados de Cuenta',
      description: 'Consulta de estados de cuenta individuales',
      icon: 'bi-file-earmark-text',
      link: '/estados-cuenta',
      color: 'secondary'
    },
    {
      title: 'Kardex de Préstamos',
      description: 'Detalle de los préstamos otorgados',
      icon: 'bi-journal-text',
      link: '/kardex-prestamos',
      color: 'dark'
    },
    {
      title: 'Reportes',
      description: 'Generación de reportes financieros y administrativos',
      icon: 'bi-graph-up',
      link: '/reportes',
      color: 'primary'
    },
    {
      title: 'Documentos y Comprobantes',
      description: 'Gestión de documentos y comprobantes',
      icon: 'bi-folder2-open',
      link: '/documentos',
      color: 'success'
    }
  ];

  return (
    <div className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary mb-3">
            Bienvenido a CACFE
          </h1>
          <p className="lead text-muted">
            Sistema de Gestión para Cooperativa de Ahorro y Crédito
          </p>
        </div>

        <Row className="g-4">
          {modules.map((module, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <Card 
                as={Link} 
                to={module.link} 
                className="h-100 text-decoration-none shadow-sm border-0 hover-card"
                style={{ transition: 'all 0.3s ease' }}
              >
                <Card.Body className="text-center p-4">
                  <div className={`text-${module.color} mb-3`}>
                    <i className={`${module.icon} display-3`}></i>
                  </div>
                  <Card.Title className="mb-3 text-dark">{module.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {module.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
