import propiedadesArriendo from "./arriendo.js";
import propiedadesVenta from "./venta.js";

const propiedadesEnVenta = propiedadesVenta;
const propiedadesEnArriendo = propiedadesArriendo;

document.addEventListener("DOMContentLoaded", function () {
  const contenedorVenta = document.getElementById("propiedadesEnVenta");
  const contenedorArriendo = document.getElementById("propiedadesEnArriendo");

  if (contenedorVenta) {
    pintar(propiedadesEnVenta, contenedorVenta);
  }

  if (contenedorArriendo) {
    pintar(propiedadesEnArriendo, contenedorArriendo);
  }
});

function createCard(propiedades) {
  let smokeIcon = '<i class="fas fa-smoking"></i>';
  let smokeText = "Permitido fumar";
  let petsIcon = '<i class="fas fa-paw"></i>';
  let petsText = "Mascotas permitidas";

  if (!propiedades.smoke) {
    smokeIcon = '<i class="fas fa-smoking-ban text-danger"></i>';
    smokeText = '<span class="text-danger">No se permite fumar</span>';
  }

  if (!propiedades.pets) {
    petsIcon = '<i class="fa-solid fa-ban text-danger"></i>';
    petsText = '<span class="text-danger">No se permiten mascotas</span>';
  }

  return `<div class="col-md-4 mb-4 h-100 mb-3 my-3">
        <div class="card">
            <img
                src="${propiedades.src}"
                class="card-img-top"
                alt="Imagen del departamento"
            />
            <div class="card-body">
                <h5 class="card-title">${propiedades.nombre}</h5>
                <p>
                <i class="fas fa-map-marker-alt"></i>  ${propiedades.lugar}
                </p>
                <p class="card-text">${propiedades.descripcion}</p>
                <p>
                    <i class="fas fa-bed"></i> ${propiedades.habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> ${propiedades.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i>${propiedades.costo}</p>
                <p class="text-success">
                    ${smokeIcon} ${smokeText}
                </p>
                <p class="text-success">
                    ${petsIcon} ${petsText}
                </p>
            </div>
        </div>
    </div>`;
}

function pintar(arreglo, contenedor) {
  let html = "";
  arreglo.forEach((element) => {
    html += createCard(element);
  });
  contenedor.innerHTML = html;
}
