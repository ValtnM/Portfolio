<template>
  <div class="content">
    <div class="profile">
      <h2>Qui suis-je ?</h2>
      <hr>
      <div class="profile__content">
        <div class="parcours">
          <h3>Mon parcours</h3>
          <hr>
          <p>
            Après 4 années en tant que projectionniste de cinéma, j'ai décidé de me reconvertir dans l'informatique et plus particulièrement le développement web.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum asperiores veniam voluptates sed, laudantium voluptate nisi officiis aut veritatis provident totam, vero obcaecati a. Officia quo perferendis ut reiciendis hic.
          </p>
        </div>
        <div class="formation">
          <h3>Ma formation</h3>
          <hr>
          <div class="openclassrooms">
            <img src="../assets/logo_openclassrooms.png" alt="Logo openclassrooms">
            <p class="infos">
              Développeur Web - Openclassrooms<br>
              Titre RNCP de niveau 5<br>
              De mai 2021 à janvier 2022
            </p>
          </div>
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

}
</script>

<style scoped lang="scss">
  .content {
    display: flex;
    width: 100%;
    height: 600px;
    margin: 0;
    background: #E8F9F5;
    color: black;

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
    text-transform: uppercase;
    margin-top: 30px;
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
      justify-content: space-around;

      hr {
        width: 150px;
        margin: 20px auto;
      }
    }

    .parcours {
      width: 45%;
      height: 300px;
      border: 1px white solid;
      border-radius: 15px;
      box-shadow: 0 2px 5px black;
      padding: 15px;
      background: #f9f9f9;

      &:hover {
        background: #F3F3FF;
      }

      p {
        text-align: justify;
      }
    }

    .formation {
      width: 45%;
      height: 300px;
      border: 1px white solid;
      border-radius: 15px;
      box-shadow: 0 2px 5px black;
      padding: 15px;
      background: #f9f9f9;

      &:hover {
        background: #F3F3FF;
      }

      .openclassrooms {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;

        .infos {
          text-align: left;
          margin: auto 0;
        }

        img {
          width: 80px;
          height: 80px;
          margin-right: 15px;
        }
      }

    }
  }
</style>