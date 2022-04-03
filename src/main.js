import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
// import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faPhone, faAnglesDown, faCopyright, faAddressCard, faFileArrowDown, faWrench, faFolderOpen, faEnvelope, faXmark)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
