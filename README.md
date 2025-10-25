# Liga BetPlay - Gestión de Equipos

Una aplicación web para gestionar equipos de la Liga BetPlay, permitiendo agregar, editar y eliminar equipos con sus respectivos escudos.

## Características

- 📊 **Vista de Tabla**: Muestra una lista de todos los equipos registrados con nombre y escudo.
- ⚙️ **Vista de Gestión**: Permite agregar nuevos equipos, editar existentes y eliminar equipos.
- 🖼️ **Subida de Imágenes**: Soporte para subir escudos en cualquier formato de imagen (PNG, JPG, JPEG, GIF, etc.), que se convierten a base64 para almacenamiento local.
- ✅ **Validación de Imágenes**: Solo permite subir archivos de imagen, rechazando otros tipos de archivos.
- 💾 **Almacenamiento Local**: Los datos se guardan en el localStorage del navegador 🗄️, una API web que permite almacenar datos de forma persistente en el navegador del usuario. Esto significa que los equipos agregados se mantienen guardados incluso después de cerrar la pestaña o el navegador, y estarán disponibles en futuras visitas sin necesidad de una base de datos externa o servidor. Los datos se almacenan como cadenas JSON y se recuperan automáticamente al cargar la aplicación.
- 📱 **Interfaz Responsiva**: Diseño moderno con tema oscuro y gradientes, optimizado para móviles y escritorio.
- 🔤 **Validación**: Capitalización automática de nombres y validación de formularios.
- ↩️ **Edición con Cancelación**: Posibilidad de cancelar la edición y volver al modo de agregar equipos.

## Tecnologías Utilizadas

- **HTML5**: Estructura de la aplicación.
- **CSS3**: Estilos con Tailwind CSS para diseño moderno.
- **JavaScript**: Lógica de la aplicación, manipulación del DOM y gestión de datos.
- **Vite**: Herramienta de desarrollo para el proyecto.

## Instalación y Uso

### Versión Hospedada
Puedes acceder a la aplicación directamente en: [https://ligabetplaydimayor.netlify.app/](https://ligabetplaydimayor.netlify.app/)

### Versión Local
1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd ligaBetplay
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador y ve a `http://localhost:5173`.

## Estructura del Proyecto

```
ligaBetplay/
├── public/
│   └── logoLigaBetPlay.png
├── src/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── app.js
│   └── assets/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Funcionalidades

### Agregar Equipo
- Haz clic en "Gestión" en la barra de navegación.
- Completa el formulario con el nombre del equipo y selecciona un escudo (cualquier formato de imagen).
- Haz clic en "Guardar" para agregar el equipo.

### Editar Equipo
- En la vista de Gestión, haz clic en "Editar" junto al equipo que deseas modificar.
- Actualiza el nombre y/o el escudo.
- Haz clic en "Actualizar" para guardar los cambios.

### Eliminar Equipo
- En la vista de Gestión, haz clic en "Borrar" junto al equipo que deseas eliminar.
- Confirma la eliminación en el diálogo emergente.

### Ver Equipos
- Haz clic en "Tabla" en la barra de navegación para ver la lista completa de equipos.

## Autor

Desarrollado por Jhon Alejandro Escobar Lozada.
