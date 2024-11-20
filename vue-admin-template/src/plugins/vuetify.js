import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// Create Vuetify instance
const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi', // default icon set
    aliases,
    sets: {
      mdi,
    },
  },
})

export default vuetify
