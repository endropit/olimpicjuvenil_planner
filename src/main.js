import './style.css';
import { crearCalendario } from './calendar';

const app = document.getElementById('app');

app.innerHTML = `
<header class="cabecera">

  <img src="/img/olimpic.png" class="logo" alt="Olímpic">

  <div class="titulo">
    <h1>OLÍMPIC PLANNER</h1>
    <p>Juvenil A · Temporada 2026/27</p>
  </div>

</header>

<section class="next-match">

  <h2>⚽ Próximo partido</h2>

  <div class="match-card">

      <div class="team">
          <img src="/img/olimpic.png">
          <span>Olímpic</span>
      </div>

      <div class="vs">
          <strong>VS</strong>
          <small>Viernes 7 agosto</small>
          <small>20:00</small>
      </div>

      <div class="team">
          <img src="/img/llosa.png">
          <span>Llosa</span>
      </div>

  </div>

</section>

<section class="calendar-section">

    <div id="calendar"></div>

</section>
`;

crearCalendario(document.getElementById('calendar'));