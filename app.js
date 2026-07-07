// ================================
// OLÍMPIC PLANNER v0.1
// ================================

// --------- MODO OSCURO ---------

const botonModo = document.getElementById("modo");

if(localStorage.getItem("tema")=="oscuro"){
    document.body.classList.add("dark");
    botonModo.innerHTML="☀️";
}

botonModo.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("tema","oscuro");

        botonModo.innerHTML="☀️";

    }else{

        localStorage.setItem("tema","claro");

        botonModo.innerHTML="🌙";

    }

});


// -------- BOTÓN GOOGLE CALENDAR --------

document.querySelector(".calendar").addEventListener("click",()=>{

    window.location.href="pretemporada.ics";

});


// -------- CUENTA ATRÁS --------

const info=document.querySelector(".info");

const partido=new Date("2026-08-14T20:00:00");

const hoy=new Date();

const dias=Math.ceil((partido-hoy)/(1000*60*60*24));

if(dias>0){

    info.innerHTML += "<br><br>⏳ Faltan <b>"+dias+"</b> días.";

}else{

    info.innerHTML += "<br><br>⚽ ¡Hoy hay partido!";

}
