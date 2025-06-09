# malu-app - Proyecto Profesional para Restaurante

Este es un proyecto **Full Stack** profesional desarrollado para la gestión de un restaurante en México. Está construido con tecnologías modernas y sigue prácticas reales de producción: despliegue automatizado, seguridad, testing y control de versiones.

## 🧩 Tecnologías utilizadas

### Backend
- [Java 17](https://www.oracle.com/java/)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [PostgreSQL](https://www.postgresql.org/)
- JUnit (para pruebas)
- Docker / Docker Compose
- JWT y OAuth con Google (en proceso)

### Frontend
- [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- Fetch API (para comunicación con el backend)
- CSS puro (sin frameworks)

### Infraestructura
- [Nginx](https://www.nginx.com/) (servidor web y proxy reverso)
- [Render](https://render.com) (plataforma de despliegue)
- [GitHub Actions](https://github.com/features/actions) (CI/CD)

## ⚙️ Objetivo del proyecto

Desarrollar una aplicación profesional completa para un restaurante real en México, con énfasis en:
- Seguridad: JWT, OAuth, roles de usuario.
- Automatización: CI/CD con GitHub Actions.
- Infraestructura: Docker, Nginx, variables de entorno seguras, despliegue en Render.
- Buenas prácticas de desarrollo: testing, separación de lógica, documentación.

## 🚀 Despliegue

El proyecto se despliega automáticamente en [Render](https://render.com) mediante GitHub Actions cada vez que se realiza un push a la rama `main`.

## 📂 Estructura del proyecto

``` 
project-root/
├── backend/ # Backend: Java + Spring Boot
├── frontend/ # Frontend público (clientes) - React + Vite
├── dashboard/ # Frontend privado (administración) - React + Vite
├── nginx/ # Contiene nginx.conf
├── .github/workflows/ # Workflows de GitHub Actions
├── .env.example # Variables de entorno necesarias
└── README.md
``` 


## ⚠️ Variables de entorno

Por seguridad, no se incluyen archivos con variables sensibles.  
Crea un archivo `.env` local con las variables necesarias según la configuración del proyecto.

## 📌 Estado del proyecto

- [x] Backend y frontend conectados  
- [x] Base de datos PostgreSQL operativa  
- [x] Proyecto dockerizado  
- [ ] JWT para autenticación  
- [ ] Sistema de roles fijos  
- [ ] OAuth con Google  
- [ ] Despliegue automático configurado  
- [ ] Pruebas unitarias y de integración  

## 📄 Notas

Este proyecto se desarrolla con metodología ágil, organizando las tareas en sprints. Se documenta como si estuviera en un entorno de trabajo real y profesional.

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).
