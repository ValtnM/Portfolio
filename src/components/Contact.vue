<template>
  <div class="contact">
    <div class="contact-image">
          <img src="../assets/contact.jpg" alt="Contact">
          <div class="contact-filter"></div>
    </div>
    <div class="description">
        <h2>Me contacter</h2>
        <hr>
        <div class="contact-list">
          <div class="email">
            <img src="../assets/email.png" alt="Arobase">
            <h5>Envoyez-moi un email</h5>
          </div>
          <div class="linkedin">
            <img src="../assets/logo-linkedin.webp" alt="Logo Linkedin">
            <h5>Rejoignez-moi sur LinkedIn</h5>
          </div>             
            
        </div>


    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
  .contact {
    display: flex;
    background: #ffe8e8;
    height: 600px;

    .description {
      width: 65%;
      padding-left: 20px;

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
    text-transform: uppercase;
    margin-top: 30px;
  }

  .contact-list {
    display: flex;
    justify-content: space-around;
    margin-top: 50px;

    .email, .linkedin {
      width: 300px;
      height: 250px;
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
      transform: scale(1);
      transition: ease-in-out 0.2s;

      &:hover {
        background: #E8F9F5;
        transform: scale(1.1);
      }
    }

    img {
      width: 150px;
    }
  }


</style>