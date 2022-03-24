<template>
  <div class="foot">
      <a href="#">
        <h2>Mon Portfolio</h2>
      </a>
      <ul class="foot-nav">
          <li><a href="#profile">Qui suis-je ?</a></li>
          <li><a href="#skills">Mes compétences</a></li>
          <li><a href="#projects">Mes projets</a></li>
          <li><a href="#contact">Contactez-moi</a></li>
      </ul>
      <div class="copyright">
          <font-awesome-icon class="copyright-icon" icon="copyright" />
          <p>2022 Valentin MONTEIRO, Tous droits réservés.</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    .foot {
        background: #212529;

        h2 {
            font-size: 2.2em;
            font-family: 'Dancing Script';
            color: #f9f9f9;
            padding: 30px 0 10px 0;
        }

        &-nav {
            width: 500px;
            margin: auto;
            display: flex;
            justify-content: space-around;
            list-style: none;
            padding: 0;

            a {
                color: #f7f7f7;
            }
        }

        .copyright {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 40px 0 20px 0;
            font-size: 0.9em;
            font-family: Roboto;

            &-icon {
                width: 15px;
                height: 15px;
                color: white;
            }

            p {
                margin: auto 10px;
                line-height: 20px;
                color: white;
            }
        }
    }

    @media screen and (max-width: 570px) {
        .foot-nav {
            width: 100%;
            flex-direction: column;
        }

        .copyright {
            font-size: 0.7em!important;
        }
    }
</style>