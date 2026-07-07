// =======================================
// OLÍMPIC PLANNER v0.1
// =======================================

// ---------- MODO OSCURO ----------

const btnModo = document.getElementById("modo");

function aplicarTema() {
    const tema = localStorage.getItem("tema");

    if (tema === "oscuro") {
        document.body.classList.add("dark");
        btnModo.textContent = "☀️";
    } else {
        document.body.classList.remove("dark");
        btnModo.textContent = "🌙";
    }
}

aplicarTema();

btnModo.addEventListener("click", () => {

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("tema", "claro");
    } else {
        localStorage.setItem("tema", "oscuro");
    }

    aplicarTema();

});


// ---------- CUENTA ATRÁS ----------

const fechaPartido = new Date("2026-08-14T20:00:00");

const ahora = new Date();

const diferencia = fechaPartido - ahora;

const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

const info = document.querySelector(".info");

if (info) {

    if (dias > 0) {

        info.innerHTML += `<br><br>⏳ <b>${dias}</b> días para el próximo partido`;

    } else if (dias === 0) {

        info.innerHTML += `<br><br>⚽ ¡HOY HAY PARTIDO!`;

    } else {

        info.innerHTML += `<br><br>✅ Partido disputado`;

    }

}


// ---------- BOTÓN CALENDAR ----------

const botonCalendar = document.querySelector(".calendar");

if (botonCalendar) {

    botonCalendar.addEventListener("click", () => {

        window.location.href = "pretemporada.ics";

    });

}


// ---------- EFECTO TARJETAS ----------

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "scale(1)";

    });

});
