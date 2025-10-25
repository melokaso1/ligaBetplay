import "../css/style.css"

// Limpiar localStorage para probar carga de equipos predeterminados
localStorage.clear();

let container = document.getElementById("body-info");
let equipos = JSON.parse(localStorage.getItem('equipos')) || [];

// Equipos predeterminados
const equiposPredeterminados = [
  { nombre: 'Atletico bucaramanga', src: 'public/fotos equipos/atlBucaramanga.png' },
  { nombre: 'Millonarios', src: 'public/fotos equipos/Millonarios-Futbol.png' },
  { nombre: 'America de cali', src: 'public/fotos equipos/america.png' },
  { nombre: 'Nacional', src: 'public/fotos equipos/nacional.png' }
];

// Si no hay equipos en localStorage, cargar los predeterminados
if (equipos.length === 0) {
  equipos = [...equiposPredeterminados];
  localStorage.setItem('equipos', JSON.stringify(equipos));
}

let editIndex = -1;
let currentView = 'tabla'; // 'tabla' o 'gestion'

function tabla() {
  currentView = 'tabla';
  updateButtonStyles();
  let html = `
    <div class="bg-linear-to-br from-blue-800 to-slate-900 p-2 md:p-4 lg:p-6 shadow-2xl">
      <h2 class="text-lg md:text-xl lg:text-2xl font-bold mb-4 text-white text-center">Tabla de Equipos</h2>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse min-w-[280px] md:min-w-[300px]">
          <thead>
            <tr class="bg-linear-to-r from-yellow-400 to-yellow-600 text-blue-900 font-bold uppercase tracking-wider">
              <th class="p-1 md:p-2 lg:p-3 text-center text-xs md:text-sm lg:text-base">Nombre del Equipo</th>
              <th class="p-1 md:p-2 lg:p-3 text-center text-xs md:text-sm lg:text-base">Escudo</th>
            </tr>
          </thead>
          <tbody>
  `;
  equipos.forEach((equipo, index) => {
    const imgSrc = equipo.src || `data:image/png;base64,${equipo.base64}`;
    html += `
      <tr class="bg-white/10 hover:bg-white/20 transition duration-300">
        <td class="p-1 md:p-2 lg:p-3 text-white text-center text-xs md:text-sm lg:text-base warp-break-words">${equipo.nombre}</td>
        <td class="p-1 md:p-2 lg:p-3 flex justify-center"><img src="${imgSrc}" alt="Escudo" class="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full border-2 border-yellow-400"></td>
      </tr>
    `;
  });
  html += `
          </tbody>
        </table>
      </div>
    </div>
  `;
  container.innerHTML = html;
}

function gestion(){
  currentView = 'gestion';
  updateButtonStyles();
  let html = `
    <div class="bg-linear-to-br from-blue-800 to-slate-900 p-2 md:p-4 lg:p-6 shadow-2xl">
      <h2 class="text-lg md:text-xl lg:text-2xl font-bold mb-4 text-white text-center">Gestión de Equipos</h2>
      <div class="overflow-x-auto mb-2 md:mb-4">
        <table class="w-full border-collapse min-w-[280px] md:min-w-[350px]">
          <thead>
            <tr class="bg-linear-to-r from-yellow-400 to-yellow-600 text-blue-900 font-bold uppercase tracking-wider">
              <th class="p-1 md:p-2 lg:p-3 text-center text-xs md:text-sm lg:text-base">Nombre del Equipo</th>
              <th class="p-1 md:p-2 lg:p-3 text-center text-xs md:text-sm lg:text-base">Escudo</th>
            </tr>
          </thead>
          <tbody>
  `;
  equipos.forEach((equipo, index) => {
    const imgSrc = equipo.src || `data:image/png;base64,${equipo.base64}`;
    html += `
      <tr class="bg-white/10 hover:bg-white/20 transition duration-300">
        <td class="p-1 md:p-2 lg:p-3 text-white text-center text-xs md:text-sm lg:text-base warp-break-words">${equipo.nombre}</td>
        <td class="p-1 md:p-2 lg:p-3 flex flex-col items-center gap-2">
          <img src="${imgSrc}" alt="Escudo" class="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full border-2 border-yellow-400">
          <div class="flex flex-col sm:flex-row gap-1">
            <button onclick="editar(${index})" class="bg-blue-500 hover:bg-blue-600 text-white px-1 md:px-2 lg:px-3 py-1 text-xs md:text-sm rounded transition duration-200">Editar</button>
            <button onclick="borrar(${index})" class="bg-red-500 hover:bg-red-600 text-white px-1 md:px-2 lg:px-3 py-1 text-xs md:text-sm rounded transition duration-200">Borrar</button>
          </div>
        </td>
      </tr>
    `;
  });
  html += `
          </tbody>
        </table>
      </div>
      <h3 class="text-base md:text-lg lg:text-xl font-bold mb-4 text-white text-center">${editIndex === -1 ? 'Agregar Equipo' : 'Editar Equipo'}</h3>
      <form id="form-equipo" class="flex flex-col gap-3 md:gap-4 max-w-md mx-auto">
        <input type="text" id="nombre" placeholder="Nombre del equipo" class="bg-white/10 border border-white/30 text-white placeholder-white/70 p-2 md:p-3 focus:border-yellow-400 focus:outline-none transition duration-300 text-sm md:text-base rounded" required>
        <input type="file" id="escudo" accept="image/*" class="bg-white/10 border border-white/30 text-white p-2 md:p-3 focus:border-yellow-400 focus:outline-none transition duration-300 file:mr-2 md:file:mr-4 file:py-1 md:file:py-2 file:px-2 md:file:px-4 file:rounded file:border-0 file:text-xs md:file:text-sm file:font-semibold file:bg-yellow-400 file:text-blue-900 hover:file:bg-yellow-500 rounded" ${editIndex === -1 ? 'required' : ''}>
        <div id="error-message" class="text-red-400 text-center text-xs md:text-sm mb-2"></div>
        <div id="preview" class="mb-2 md:mb-4 flex justify-center"></div>
        <div class="flex flex-col sm:flex-row gap-2 justify-center">
          <button type="submit" class="bg-linear-to-r from-yellow-400 to-yellow-600 text-blue-900 font-bold py-2 md:py-3 px-4 md:px-6 hover:transform hover:-translate-y-1 transition duration-200 text-sm md:text-base rounded">${editIndex === -1 ? 'Guardar' : 'Actualizar'}</button>
          ${editIndex !== -1 ? '<button type="button" onclick="cancelarEdicion()" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 md:py-3 px-4 md:px-6 hover:transform hover:-translate-y-1 transition duration-200 text-sm md:text-base rounded">Cancelar</button>' : ''}
        </div>
      </form>
    </div>
  `;
  container.innerHTML = html;

  // Event listener para preview de imagen
  document.getElementById('escudo').addEventListener('change', (e) => {
    let file = e.target.files[0];
    let errorMessage = document.getElementById('error-message');
    if (file) {
      // Validar que sea una imagen
      if (!file.type.startsWith('image/')) {
        errorMessage.textContent = 'El archivo ingresado no es válido. Por favor, selecciona un archivo de imagen.';
        e.target.value = ''; // Limpiar el input
        document.getElementById('preview').innerHTML = '';
        return;
      } else {
        errorMessage.textContent = ''; // Limpiar mensaje de error si es válido
      }
      let reader = new FileReader();
      reader.onload = (e) => {
        document.getElementById('preview').innerHTML = `<img src="${e.target.result}" alt="Preview" class="w-12 h-12">`;
      };
      reader.readAsDataURL(file);
    } else {
      document.getElementById('preview').innerHTML = '';
      errorMessage.textContent = '';
    }
  });

  // Si estamos editando, precargar datos
  if (editIndex !== -1) {
    document.getElementById('nombre').value = equipos[editIndex].nombre;
    const imgSrc = equipos[editIndex].src || `data:image/png;base64,${equipos[editIndex].base64}`;
    document.getElementById('preview').innerHTML = `<img src="${imgSrc}" alt="Preview" class="w-12 h-12">`;
  }

  // Event listener para el formulario
  document.getElementById('form-equipo').addEventListener('submit', (e) => {
    e.preventDefault();
    let nombre = document.getElementById('nombre').value;
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    let file = document.getElementById('escudo').files[0];
    let base64 = editIndex !== -1 ? equipos[editIndex].base64 : '';

    if (file) {
      // Validar que sea una imagen antes de procesar
      if (!file.type.startsWith('image/')) {
        document.getElementById('error-message').textContent = 'El archivo ingresado no es válido. Por favor, selecciona un archivo de imagen.';
        return;
      }
      let reader = new FileReader();
      reader.onload = function(e) {
        base64 = e.target.result.split(',')[1];
        guardarEquipo(nombre, base64);
      };
      reader.readAsDataURL(file);
    } else if (editIndex !== -1) {
      guardarEquipo(nombre, base64);
    }
  });
}

function guardarEquipo(nombre, base64) {
  if (editIndex !== -1) {
    equipos[editIndex] = { nombre, base64 };
    editIndex = -1;
  } else {
    equipos.push({ nombre, base64 });
  }
  localStorage.setItem('equipos', JSON.stringify(equipos));
  alert('Equipo guardado correctamente');
  if (currentView === 'gestion') {
    gestion(); // Volver a la vista de gestión después de guardar para agregar otro equipo
  } else {
    tabla(); // Volver a la vista de tabla si se guardó desde ahí
  }
}

function editar(index) {
  editIndex = index;
  gestion();
}

function borrar(index) {
  if (confirm('¿Estás seguro de que quieres borrar este equipo?')) {
    equipos.splice(index, 1);
    localStorage.setItem('equipos', JSON.stringify(equipos));
    if (currentView === 'gestion') {
      gestion();
    } else {
      tabla();
    }
  }
}

function cancelarEdicion() {
  editIndex = -1;
  gestion();
}

// Función para actualizar estilos de botones
function updateButtonStyles() {
  const btnTabla = document.getElementById('btn-tabla');
  const btnGestion = document.getElementById('btn-gestion');
  if (btnTabla && btnGestion) {
    btnTabla.classList.toggle('active', currentView === 'tabla');
    btnGestion.classList.toggle('active', currentView === 'gestion');
  }
}

// Hacer funciones globales para onclick en HTML
window.tabla = tabla;
window.gestion = gestion;
window.editar = editar;
window.borrar = borrar;
window.cancelarEdicion = cancelarEdicion;

tabla();
