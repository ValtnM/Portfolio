<template>
  <div class="content">
    <div id="projects" v-if="this.staticMenu == true"></div>
      <div class="projects">
          <div class="projects-title">
            <font-awesome-icon class="folder-open-icon" icon="folder-open" />
            <h2>Mes Projets</h2>
          </div>
          <hr>
          <div class="projects-list">
            <thumbnail class="thumbnail" v-for="(project, index) in projects" :key="index" :project="project">
                <!-- <project-details :project="project"></project-details> -->

            </thumbnail>
          </div>
          
      </div>
      <div class="projects-image">
        <img src="../assets/projets.jpg" alt="">
        <div class="filter"></div>
      </div>
  </div>
</template>

<script>
import Thumbnail from './Thumbnail.vue'
// import ProjectDetails from './ProjectDetails.vue'

export default {
    data() {
        return {
            projects: [
                {
                    name: "Reservia",
                    short: "Intégration d'une maquette en HTML et CSS",
                    image: "reservia.png",
                    alt: "Aperçu du projet Reservia",
                    description: "C'est un projet que j'ai réalisé durant ma formation avec Openclassrooms. L'objectif était de réaliser l'intégration d'une maquette en HTML et CSS sans l'utilisation de frameworks. Les difficultés ici étaient de rendre la page responsive et de rester fidèle à la maquette",
                    skills: ["Reproduction d'une maquette graphique en HTML et CSS", "Adaptation de la page à toutes les tailles d'écran"],
                    technologies: ['html.png', 'css.png']

                },
                {
                    name: "Ohmyfood",
                    short: "Dynamisation d'une page web avec des animations CSS",
                    image: "ohmyfood.png",
                    alt: "Aperçu du projet Ohmyfood"
                }
            ]
        }
    },
    props: ['staticMenu'],
    components: {
        'thumbnail': Thumbnail,
        // 'project-details': ProjectDetails
    }
}
</script>

<style scoped lang="scss">
    .content {
        display: flex;
        background: #EAF9FD;
        height: 600px;
    }

    .projects {
        width: 65%;
        margin-left: 20px;

        &-title {
            display: flex;
            align-items: center;
            margin-top: 30px;

            .folder-open-icon {
                display: inline;
                height: 35px;
                margin-bottom: 0.5rem;
                margin-right: 15px;
            }
        }

        h2 {
            font-size: 2.5em;
            text-align: left;
            color: black;
        }

        hr {
            margin-top: 0;
            margin-bottom: 50px;
        }

        .projects-list {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }
        
        
    }

    .projects-image {
        width: 35%;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .filter {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: linear-gradient(90deg, rgba(234,249,253,1) 0%, rgba(234,249,253,0) 100%);
        
        }    
    }

    @media screen and (max-width: 992px) {
        .content {
            flex-direction: column;
            height: auto;
        }

        .projects {
            width: 100%;
            margin: 0;
            padding: 0 10px;
        }

        .projects-image {
            width: 100%;
            height: 600px;

            .filter {
                background: linear-gradient(180deg, rgba(234,249,253,1) 0%, rgba(255,255,255,0) 50%, rgba(255,232,232,1) 100%);
            }
        }
    }

    @media screen and (max-width: 570px) {
        h2 {
            font-size: 1.8em!important;
        }
    }
</style>