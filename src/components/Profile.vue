<template>
  <div class="content">
    <div class="profile">
      <div class="profile-title">
        <font-awesome-icon class="address-card-icon" icon="address-card" />
        <h2>Mon profil</h2>
      </div>
      <hr>
      <div class="profile__content">
        <div class="infos">
          <div class="parcours" @click="parcoursLog">
            <h3>Qui suis-je ?</h3>
            <hr>
            <p>
              Après avoir exercé plusieurs années en tant que projectionniste de cinéma, j'ai décidé de me reconvertir dans l'informatique et plus particulièrement le développement web.
              Au terme d'un parcours de formation avec Openclassrooms, j'ai obtenu mon diplôme.<br>
              Aujourd'hui, je suis en mesure de répondre aux attentes des entreprises, et c'est avec beaucoup de motivation que je souhaite mettre à leur service les compétences que j'ai acquises.
            </p>
          </div>
          <div class="formation">
            <h3>Ma formation</h3>
            <hr>
            <div class="openclassrooms">
              <img src="../assets/openclassrooms.jpg" alt="Logo openclassrooms">
              <p>
                <span>Développeur Web</span><br>
                Titre RNCP de niveau 5<br>
                De mai 2021 à janvier 2022
              </p>
            </div>
          </div>
        </div>
        <div class="cv">
          <a href="./CV_Valentin_Monteiro.pdf" target="blank">
            <button class="btn btn-primary">
              <font-awesome-icon class="file-arrow-down-icon" icon="file-arrow-down" />
              <div>Consulter mon CV</div>            
            </button>
          </a>
        </div>
      </div>
    </div>
    <div class="profile-img">
      <img src="../assets/parcours.jpg" alt="Diplôme">
      <div class="profile-filter"></div>
    </div>
  </div>
</template>

<script>
export default {  
  methods: {
    runAnimation() {
      const parcours = document.querySelector('.parcours')
      const formation = document.querySelector('.formation')
      
      let topOfBlock = parcours.getBoundingClientRect().top;
      if(topOfBlock - (innerHeight / 2 )< 0) {
        parcours.classList.add('parcours-active');
        formation.classList.add('formation-active')
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.runAnimation)
  }
}
</script>

<style scoped lang="scss">
  .content {
    display: flex;
    width: 100%;
    height: auto;
    margin: 0;
    background: #E8F9F5;
    color: black;

    .profile-title {
      display: flex;
      align-items: center;
      margin-top: 30px;

      .address-card-icon {
        display: inline;
        height: 35px;
        margin-bottom: 0.5rem;
        margin-right: 15px;
      }
    }

    .profile-img {
      width: 35%;
      position: relative;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .profile-filter {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1;
          background: linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(232,249,245,1) 100%);
        }
      } 
      
  }

  h2 {
    font-size: 2.5em;
    text-align: left;
    // text-transform: uppercase;
  }

  hr {
    margin-top: 0;
    margin-bottom: 50px;
  }

  .profile {
    width: 65%;
    margin: 0 30px;

    h3 {
      font-size: 2em;
    }

    &__content {
      display: flex;
      flex-direction: column;

      hr {
        width: 150px;
        margin: 20px auto;
      }

      .infos {
        display: flex;
        justify-content: space-around;        
      }

      .cv .btn {
        text-transform: uppercase;
        margin-bottom: 50px;

        .file-arrow-down-icon {
          font-size: 2.5em;
          padding: 10px;
        }
      }
    }

    .parcours {
      width: 45%;
      height: auto;
      border: 1px white solid;
      border-radius: 15px;
      box-shadow: 0 2px 5px black;
      padding: 15px;
      background: #f9f9f9;
      margin-bottom: 30px;
      opacity: 0;

      
      &-active {
        animation: block 600ms forwards 200ms;
      }

      &:hover {
        background: #F3F3FF;
      }

      p {
        text-align: justify;
      }
    }


    .formation {
      width: 45%;
      border: 1px white solid;
      border-radius: 15px;
      box-shadow: 0 2px 5px black;
      padding: 15px;
      background: #f9f9f9;
      margin-bottom: 30px;
      opacity: 0;

      &-active {
        animation: block 600ms forwards;
      }

      &:hover {
        background: #F3F3FF;
      }

      .openclassrooms {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;        

        p {
          display: inline;
          text-align: left;
          margin: auto 0;
          
          span {
            font-size: 1.2em;
            font-weight: 500;
          }
        }

        img {
          width: 120px;
          // height: 120px;
          margin-right: 15px;
        }
      }

    }
  }


  @media screen and (max-width: 1380px) {
    .openclassrooms {
      flex-direction: column;

      p {
        text-align: center!important;

      }
    }

    img {
      margin-bottom: 20px!important;
      margin-right: 0!important;
    }
  }

  @media screen and (max-width: 1080px) {
    .infos {
      flex-direction: column;
      margin: auto;

      .parcours {
        width: 90%;
        margin: 0 auto 30px auto;
        &-active {
          animation: block 600ms forwards;
        }
      }

      .formation {
        width: 90%;
        margin: 0 auto 30px auto;
        &-active {
          animation: block 600ms forwards 200ms;
        }

        .openclassrooms {
          flex-direction: row;
        }
      }
    }
  }

  @media screen and (max-width: 992px) {
    .content {
      flex-direction: column;
      height: auto;

      .profile-img {
        width: 100%;
        height: 600px;
        margin-top: 10px;

        .profile-filter {
          height: 100%;
          background: linear-gradient(180deg, rgba(232,249,245,1) 0%, rgba(255,255,255,0) 50%, rgba(255,238,218,1) 100%);
        }
      }
    }

    .profile {
      width: 100%;
      padding: 0 10px;
      margin: 0;
    }
  }

  @media screen and (max-width: 570px) {
    .parcours, .formation {
      height: auto!important;
    }

    h2 {
      font-size: 1.8em;
    }
  }

  @media screen and (max-width: 450px) {
    .formation, .parcours {
      font-size: 0.8em;
      .openclassrooms {
        flex-direction: column!important;
      }
    }
  }

  @keyframes block {
    0% {
      opacity: 0;
      transform: translateX(-200px);
    }
    60% {
      transform: translateX(0);
    }
    80% {
      opacity: 0.9;
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>