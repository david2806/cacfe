# CACFE - Sistema de Gestión para Cooperativa de Ahorro y Crédito

Sistema web moderno basado en React y Vite para la gestión integral de una cooperativa de ahorro y crédito.

## 🏦 Características Principales

### Módulos Implementados

1. **Aportes** - Visualización y gestión de aportes de los socios
2. **Créditos** - Solicitudes, detalles y seguimiento de créditos
3. **Pagos de Créditos** - Procesamiento y verificación de pagos
4. **Flujo de Aprobaciones** - Gestión de aprobaciones internas
5. **Caja y Tesorería** - Administración de movimientos diarios
6. **Estados de Cuenta** - Consulta de estados de cuenta individuales
7. **Kardex de Préstamos** - Detalle de los préstamos otorgados
8. **Reportes** - Generación de reportes financieros y administrativos
9. **Documentos y Comprobantes** - Gestión de documentos y comprobantes

## 🚀 Tecnologías Utilizadas

- **React 19** - Framework principal
- **Vite 7** - Herramienta de construcción y desarrollo
- **React Router** - Navegación entre módulos
- **Bootstrap 5** - Framework CSS para diseño responsivo
- **React-Bootstrap** - Componentes de Bootstrap para React
- **Bootstrap Icons** - Iconografía

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar construcción de producción
npm run preview
```

## 🌐 Despliegue

El proyecto está configurado para desplegarse automáticamente en GitHub Pages mediante GitHub Actions cuando se realiza un push a la rama `main`.

### Configuración de GitHub Pages

1. Ve a Settings → Pages en tu repositorio
2. Selecciona "GitHub Actions" como fuente
3. El sitio se desplegará automáticamente en: `https://[usuario].github.io/cacfe/`

## 📁 Estructura del Proyecto

```
cacfe/
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── layouts/         # Layout principal con navegación
│   ├── pages/           # Páginas de cada módulo
│   ├── App.jsx          # Componente principal con rutas
│   └── main.jsx         # Punto de entrada
├── public/              # Archivos estáticos
└── vite.config.js       # Configuración de Vite
```

## 🎨 Diseño

El diseño utiliza una paleta de colores profesional y sobria apropiada para una institución financiera, con énfasis en:
- Navegación intuitiva
- Diseño responsivo
- Interfaz moderna y limpia
- Accesibilidad

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👥 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias y mejoras.
