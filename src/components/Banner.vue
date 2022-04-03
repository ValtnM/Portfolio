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
            max-width: 90%;
            height: auto;
            margin-right: 50px;
            border-radius: 20px;
            object-fit: contain;
        }

        &__text {
            text-align: left;
            color: white;
            font-size: 1.4em;  
            padding: 10px;          
           
        }
    }

    a {
        position: absolute;
        left: 50%;
        bottom: 30px;
        transform: translateX(-50%);
    }

    .arrow {
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

    @media screen and (max-width: 870px) {
        .introduction {
            width: 90%;

            img {
                width: 40%;
                margin: auto;
            }

            &__text {
                font-size: 1em;
            }

            h2 {
                font-size: 1.4em;
            }
        }
    }

    @media screen and (max-width: 690px) and (min-height: 580px) {
        .introduction {
            display: flex;
            flex-direction: column;
            margin: auto;
            max-height: 95vh;

            img {
                width: auto;
                max-height: 50vh;
                margin-bottom: 20px;
            }

            &__text {
                width: 80%;

            }
        }

        a {
            bottom: 20px;
        }

        .arrow {
            height: 30px;
        }
    }

    @media screen and (max-width: 500px) {
        .introduction {
            padding: 50px 20px;
            // img {
            //     width: 90%;
            // }

            &__text {
                width: 90%;
                font-size: 0.8em;
            }
        }
    }

    @media screen and (max-height: 579px) {
        .introduction {
            max-height: 95vh;

            img {
                max-height: 80vh;
            }
        }

        .arrow {
            display: none;
        }
    }
</style>