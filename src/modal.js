export function mostrarPartido(datos) {

  let modal = document.getElementById("modal");

  if (!modal) {

    modal = document.createElement("div");
    modal.id = "modal";
    modal.className = "modal";

    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-content">

      <h2>⚽ ${datos.title}</h2>

      <p><strong>📅 Fecha:</strong> ${datos.fecha}</p>

      <p><strong>🕗 Hora:</strong> ${datos.hora}</p>

      <p><strong>📍 Campo:</strong> ${datos.campo}</p>

      <div class="modal-buttons">

        <button id="cerrarModal">Cerrar</button>

      </div>

    </div>
  `;

  modal.style.display = "flex";

  document.getElementById("cerrarModal").onclick = () => {
    modal.style.display = "none";
  };

  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };

}