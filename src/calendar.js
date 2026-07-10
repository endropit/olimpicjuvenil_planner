import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import esLocale from '@fullcalendar/core/locales/es'
import { mostrarPartido } from './modal'

export function crearCalendario(elemento) {

  const calendar = new Calendar(elemento, {

    plugins: [
      dayGridPlugin,
      interactionPlugin,
      listPlugin
    ],

    initialView: 'dayGridMonth',

    locale: esLocale,

    firstDay: 1,

    height: 'auto',

    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,listMonth'
    },

    events: [

      {
        title: '⚽ Olímpic - Llosa',
        start: '2026-08-07T20:00:00',
        extendedProps: {
          campo: "La Murta",
          rival: "Llosa"
        }
      },

      {
        title: '⚽ Olímpic - Alzira',
        start: '2026-08-14T20:00:00',
        extendedProps: {
          campo: "La Murta",
          rival: "Alzira"
        }
      }

    ],

    eventClick(info) {

      const e = info.event.extendedProps

      mostrarPartido({

        title: info.event.title,

        fecha: info.event.start.toLocaleDateString('es-ES'),

        hora: info.event.start.toLocaleTimeString('es-ES', {
          hour: '2-digit',
          minute: '2-digit'
        }),

        campo: e.campo

      })

    }

  })

  calendar.render()

}