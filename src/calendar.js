import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import esLocale from '@fullcalendar/core/locales/es'

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
        start: '2026-08-07'
      },

      {
        title: '⚽ Olímpic - Alzira',
        start: '2026-08-14'
      }

    ]

  })

  calendar.render()

}