<template>
  <div>
    <img src="../assets/banner.jpg" alt="">
    <div class="filter"></div>
    <div class="introduction">
        <img src="../assets/photo-valentin.jpg" alt="Photo de Valentin">
        <div class="introduction__text">
            Bonjour,<br>
            <h2>Je suis Valentin Monteiro</h2>
            <hr>
            <h2>Développeur Web</h2>
        </div>
    </div>
    <a href="#profile">
        <font-awesome-icon class="arrow" icon="angles-down" :click="scrollBottom" />
    </a>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
    img {
        height: 100vh;
        width: 100%;
        object-fit: cover;
    }

    .filter {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
    }

    .introduction {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 850px;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        border: 1px white solid;
        padding: 50px;

        img {
            width: 300px;
            height: auto;
            margin-right: 50px;
            border-radius: 20px;
        }

        &__text {
            text-align: left;
            color: white;
            font-size: 1.4em;            
           
        }
    }

    .arrow {
        position: absolute;
        left: 50%;
        bottom: 30px;
        transform: translateX(-50%);
        width: 50px;
        height: 50px;
        color: white;
        animation: arrow 600ms ease-in-out infinite;
    }

    @keyframes arrow {
        0% {
            transform: translateY(0);
        }
        10% {
            transform: translateY(10px);
        }
        100% {
            transform: translateY(0);
        }
    }
</style>