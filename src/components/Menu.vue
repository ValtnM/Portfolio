<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a href="#">
        <h1 class="navbar-brand" href="#">Mon portfolio</h1>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#profile">Mon profil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills">Mes compétences</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">Mes projets</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contactez-moi</a>
          </li>
        </ul>        
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Menu',
   methods: {
  
  }
}
</script>

<style scoped lang="scss">
  h1 {
    font-size: 2em;
    font-family: 'Dancing Script';
  }

  nav {
    width: 100vw;
    height: 80px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    padding: 30px 50px;
    font-size: 1.5em;    
  }

  @media screen and (max-width: 1080px) {
    nav {
      font-size: 1.2em;
    }
  }

  @media screen and (max-width: 992px) {
    nav {
      padding: 10px 50px 0 50px;
      height: auto;
      min-height: 80px;
    }
  }

  @media screen and (max-width: 400px) {
    nav {
      padding: 0 20px;
    }
  }

  @media screen and (max-height: 580px) {
    nav {
      position: static;
    }
  }
</style>
