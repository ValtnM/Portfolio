<template>
  <div class="contact">
    <div id="contact" v-if="this.staticMenu == true"></div>
    <div class="contact-image">
          <img src="../assets/contact.jpg" alt="Contact">
          <div class="contact-filter"></div>
    </div>
    <div class="description">
        <div class="contact-title">
          <font-awesome-icon class="envelope-icon" icon="envelope" />
          <h2>Me contacter</h2>
        </div>
        <hr>
        <div class="contact-list">
          <div class="email">
            <a href="mailto:valentin.monteiro.pro@gmail.com">
              <img src="../assets/email.png" alt="Arobase">
              <h5>Envoyez-moi un email</h5>
            </a>
          </div>
          <div class="linkedin">
            <a href="https://www.linkedin.com/in/valentinmonteiro/" target="blank">
              <img src="../assets/logo-linkedin.webp" alt="Logo Linkedin">
              <h5>Rejoignez-moi sur LinkedIn</h5>
            </a>
          </div>             
            
        </div>


    </div>
  </div>
</template>

<script>
export default {
  props: ['staticMenu'],
  methods: {
    runAnimation() {
      const email = document.querySelector('.email')
      const linkedin = document.querySelector('.linkedin')
      
      let topOfBlock = email.getBoundingClientRect().top;
      if(topOfBlock - (innerHeight / 2 )< 0) {
        email.classList.add('email-active');
        linkedin.classList.add('linkedin-active')
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.runAnimation)
  }
}
</script>

<style scoped lang="scss">
  a {
    color: black;
  }

  .contact {
    display: flex;
    background: #ffe8e8;
    height: 600px;

    .description {
      width: 65%;
      padding-left: 20px;

      .contact-title {
        display: flex;
        align-items: center;
        margin-top: 30px;

        .envelope-icon {
          display: inline;
          height: 35px;
          margin-bottom: 0.5rem;
          margin-right: 15px;
        }
      }

      hr {
        margin: 0;
      }
    }
  }

  .contact-image {
    position: relative;
    width: 35%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .contact-filter {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(90deg, rgba(234,249,253,0) 0%, rgba(255,232,232,1) 100%);
    }
  }

  h2 {
    font-size: 2.5em;
    text-align: left;
    color: black;
  }

  .contact-list {
    display: flex;
    justify-content: space-around;
    margin: 50px 0 30px 0;

    .email, .linkedin {
      width: 300px;
      height: auto;
      border: 1px black solid;
      border-radius: 20px;
      box-shadow: 0 2px 5px black;
      padding: 20px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      background: white;
      opacity: 0;

      &:hover {
        background: #E8F9F5;
      } 
    }
      
    .email-active {
      animation: blocksAppearance 600ms forwards;
    }
    .linkedin-active {
      animation: blocksAppearance 600ms forwards 200ms;
    }

    img {
      width: 150px;
      margin-bottom: 20px;
    }
  }

  @keyframes blocksAppearance {
      0% {
        transform: translateX(200px);
        opacity: 0;
      }
      60% {
        transform: translateX(0);
      }
      80% {
        transform: translateX(20px);
        opacity: 0.9;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
  }

  @media screen and (max-width: 992px) {
    .contact {
      flex-direction: column;
      height: auto;

      &-image {
        order: 2;
        width: 100%;
        height: 600px;

        .contact-filter {
          background: linear-gradient(180deg, rgba(255,232,232,1) 0%, rgba(255,255,255,0) 100%);
        }
      }

      .description {
        order: 1;
        width: 100%;
        margin: 0;
        padding: 10px;
      }
    }

  }

  @media screen and (max-width:660px) {
    .contact-list {
      flex-direction: column;

      .email, .linkedin {
        width: 90%;
        margin: 30px auto;
      }
    }
  }

  @media screen and (max-width: 570px) {
    h2 {
      font-size: 1.8em;

    }
  }

</style>