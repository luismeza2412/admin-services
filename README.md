Proyecto Angular Modular
Este es un proyecto Angular estructurado utilizando una arquitectura modular para mejorar la escalabilidad y el mantenimiento del código. A continuación se detallan los módulos, componentes y tecnologías utilizadas.

Descripción
Este proyecto está construido utilizando Angular 16, Bootstrap 4.6, SASS y Font Awesome Free. Está organizado en varios módulos para facilitar el desarrollo y la reutilización de componentes. La estructura modular incluye módulos de layout, shared, features, y un módulo de services para gestionar la lógica de negocio y la comunicación con APIs.

Tecnologías Utilizadas
Angular 16: El framework principal para desarrollar la aplicación.
Bootstrap 4.6: Framework de CSS para diseño responsivo y componentes predefinidos.
SASS: Preprocesador CSS utilizado para mejorar la escritura y organización de los estilos.
Font Awesome Free: Biblioteca de íconos para mejorar la interfaz de usuario.
Estructura del Proyecto
El proyecto está dividido en los siguientes módulos:

1. Módulo layout
Este módulo contiene los componentes que definen la estructura común de la aplicación, como el sidebar, navbar y footer. Estos componentes son reutilizados en varias vistas de la aplicación.

Componentes del módulo layout:
SidebarComponent: Menú lateral que permite la navegación por las diferentes secciones de la aplicación.
NavbarComponent: Barra de navegación superior que contiene enlaces y funcionalidades globales.
FooterComponent: Pie de página con información adicional sobre la aplicación.
2. Módulo shared
Este módulo contiene componentes y servicios que son reutilizados en toda la aplicación. Aquí se incluyen los models, que son las interfaces de TypeScript para estructurar los datos en la aplicación.

Componentes del módulo shared:
ModelsComponent: Componentes reutilizables para gestionar la visualización de modelos y datos comunes.
Interfaces: Define las estructuras de datos utilizadas en el proyecto, como InformacionContacto, Article, Company, etc.
3. Módulo features
Este módulo contiene los componentes específicos de las diferentes secciones o funcionalidades de la aplicación. Los componentes de este módulo gestionan las vistas principales de la aplicación.

Componentes del módulo features:
ArticleComponent: Muestra un artículo con su contenido.
CompanyComponent: Muestra la información de una empresa, incluyendo dirección, contacto y otros detalles.
HomeComponent: Página principal de la aplicación, donde se muestra una vista de bienvenida y enlaces a otras secciones.
4. Módulo services
Este módulo contiene los servicios que gestionan la lógica de negocio, como la obtención de datos desde un servidor o la interacción con una API.

Servicios del módulo services:
ContactService: Servicio encargado de gestionar la obtención y envío de información de contacto.
ArticleService: Servicio para obtener y gestionar artículos.
CompanyService: Servicio para manejar datos relacionados con las empresas.

quipux-prueba-app/
├── src/
│   ├── app/
│   │   ├── layout/
│   │   │   ├── sidebar/
│   │   │   ├── navbar/
│   │   │   └── footer/
│   │   ├── shared/
│   │   │   └── models/
│   │   ├── features/
│   │   │   ├── article/
│   │   │   ├── company/
│   │   │   └── home/
│   │   ├── services/
│   │   │   └── contact.service.ts
│   │   └── app.module.ts
│   ├── assets/
│   ├── environments/
│   └── index.html
├── angular.json
├── package.json
└── README.md


Estilos
Este proyecto utiliza SASS para la gestión de los estilos, lo que permite un diseño más limpio y modular. Se incluyen variables globales, mixins y componentes de estilo para facilitar el mantenimiento de los estilos en todo el proyecto.

Conclusión
Este proyecto está diseñado para ser escalable, modular y fácil de mantener. Utilizando Angular 16, Bootstrap 4.6, SASS y Font Awesome Free, proporciona una estructura sólida para el desarrollo de aplicaciones web dinámicas y modernas.
