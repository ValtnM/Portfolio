<template>
  <div id="app">
    <banner></banner>
    <menu-header v-if="displayMenu == true"></menu-header>
    <div class="anchor" id="profile"></div>
    <profile></profile>
    <div class="anchor" id="skills"></div>
    <skills></skills>
    <div class="anchor" id="projects"></div>
    <projects></projects>
    <div class="anchor" id="contact"></div>
    <contact></contact>
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
      displayMenu: false
    }
  },
  methods: {
    showMenu() {
      window.addEventListener('scroll', (e) => {
        if(e.path[1].scrollY >= (e.path[1].window.innerHeight - 80)){
          this.displayMenu = true;
        } else {
          this.displayMenu = false;
        }
        console.log(e.path[1]);
        // console.log(e.path[1].scrollY);
      })
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
