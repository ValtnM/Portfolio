<template>
  <div id="app">
    <banner></banner>
    <div v-if="staticMenu == false" class="anchor" id="profile"></div>
    <menu-header v-if="displayMenu == true"></menu-header>
    <profile :staticMenu="staticMenu"></profile>
    <div v-if="staticMenu == false" class="anchor" id="skills"></div>
    <skills :staticMenu="staticMenu"></skills>
    <div v-if="staticMenu == false" class="anchor" id="projects"></div>
    <projects :staticMenu="staticMenu"></projects>
    <div v-if="staticMenu == false" class="anchor" id="contact"></div>
    <contact :staticMenu="staticMenu"></contact>
    <foot></foot>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import Menu from './components/Menu.vue'
import Profile from './components/Profile.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Foot from './components/Foot.vue'

export default {
  name: 'App',
  components: {
    "banner": Banner,
    "menu-header": Menu,
    "profile": Profile,
    "skills": Skills,
    'projects': Projects,
    'contact': Contact,
    'foot': Foot
  },
  data() {
    return {
      displayMenu: false,
      staticMenu: false
    }
  },
  methods: {    
    showMenu() {
        if(window.innerHeight <= 580) {
          this.displayMenu = true;
          this.staticMenu = true;
        } else if(window.scrollY >= (window.innerHeight - 80))   {
          this.displayMenu = true;
          this.staticMenu = false;
        } else {
          this.displayMenu = false;
          this.staticMenu = false;
        }
    }
  },
  created() {
    
    window.addEventListener('scroll', this.showMenu)
  }
}
</script>

<style lang="scss">
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  text-decoration: none!important;
}

.anchor {
  position: relative;
  top: -80px;
}

</style>
