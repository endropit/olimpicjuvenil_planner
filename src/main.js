import './style.css';
import { crearCalendario } from './calendar';

const app = document.getElementById('app');

app.innerHTML = `
<header class="cabecera">
  <img src="/img/olimpic.jpg" class="logo" alt="Escudo Olímpic">

  <div>
    <h1>Olímpic Planner</h1>
    <p>Juvenil A</p>
  </div>
</header>

<main>
  <div id="calendar"></div>
</main>
`;

crearCalendario(document.getElementById('calendar'));