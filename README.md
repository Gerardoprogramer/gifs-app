# Gifs-App

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Frontend-purple?logo=vite)
![Vitest](https://img.shields.io/badge/Tests-Vitest-green?logo=vitest)
![Netlify](https://img.shields.io/badge/Deployed-Netlify-brightgreen?logo=netlify)

Mi primera aplicación en **React**, construida con **componentes funcionales**, **hooks personalizados** y **testing con Vitest**, desplegada en **Netlify**.  
La app permite buscar y mostrar GIFs a través de la API de Giphy.

---

## 🚀 Demo en vivo

👉 [Ver aplicación en Netlify](TU_LINK_DE_NETLIFY)

---

## 📝 Descripción

La aplicación permite a los usuarios:

- Buscar GIFs por palabra clave.
- Mostrar resultados en tarjetas con animaciones.
- Ver un historial de búsquedas recientes.
- Manejo de estados de carga y errores.

Este proyecto me sirvió para practicar:

- **Componentes funcionales** en React.  
- **Hooks personalizados** para encapsular y reutilizar lógica (por ejemplo: manejo de peticiones a la API y estado de la búsqueda).  
- **Testing** con Vitest y configuración de coverage.  
- **Consumo de APIs** externas y renderizado dinámico.  
- **Despliegue** en Netlify.  

---

## 🛠 Tecnologías utilizadas

- [React](https://reactjs.org/) – Librería principal.  
- [Vite](https://vitejs.dev/) – Entorno de desarrollo rápido.  
- [Vitest](https://vitest.dev/) – Testing y coverage.  
- [Netlify](https://www.netlify.com/) – Despliegue.  
- [API de Giphy](https://developers.giphy.com/) – Fuente de los GIFs.  

---

## ⚙️ Instalación y uso

Clona el repositorio e instala dependencias:

```bash
git clone https://github.com/Gerardoprogramer/gifs-app.git
cd gifs-app
npm install
npm run dev
```

Ejecutar los tests:

```bash
npm run test
```

Generar reporte de cobertura:

```bash
npm run coverage
```
---
## 🧪 Testing:

- Se implementaron pruebas con Vitest.

- Configuración de cobertura con @vitest/coverage-v8.

- Tests en componentes principales y en los hooks personalizados (para asegurar la lógica de negocio).

---

## 💡 Mi experiencia

Este fue mi primer proyecto en React. Aprendí a:

- Crear hooks personalizados para simplificar y reutilizar lógica.

- Usar componentes funcionales y separar responsabilidades.

- Probar tanto componentes como hooks con Vitest.

- Configurar y analizar la cobertura de código.

- Desplegar una aplicación en Netlify.

Retos superados:

- Manejar peticiones asíncronas con hooks personalizados.

- Configurar testing y coverage en un proyecto desde cero.

- Organizar el código para que fuera escalable y legible.

---

## 📈 Estado del proyecto

- ✅ Funcionalidad básica completada.

- 🔜 Próximos pasos: mejorar diseño responsivo, añadir paginación y aumentar cobertura de pruebas.
