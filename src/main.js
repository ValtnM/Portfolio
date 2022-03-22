import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
// import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faPhone, faAnglesDown, faCopyright)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
