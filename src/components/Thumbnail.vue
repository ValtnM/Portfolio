<template>
    <div class="project-container">
        <div class="project" @click="showDetails()">
            <img :src="require('@/assets/' + project.image + '')" :alt="project.alt">
            <div class="infos">
                <h4>{{ project.name }}</h4>
                <hr>
                <p>{{ project.short }}</p>
            </div>
        </div>
        
        <project-details v-if="displayDetails == true" :currentProject="this.project" @closeDetails="closeDetailsWindow()"></project-details>
    </div>
</template>

<script>
import ProjectDetails from './ProjectDetails.vue'


export default {
    data() {
        return {
            currentProject: this.project,
            displayDetails: false
        }
    },
    props: ['project'],
    components: {
        'project-details': ProjectDetails
    },

    methods: {
        test(){
            console.log(this.currentProject);
        },
        showDetails() {
            this.displayDetails = true;
        },
        closeDetailsWindow() {
            this.displayDetails = false;
        }
    }
}
</script>

<style scoped lang="scss">
    
    .project {
        width: 300px;
        height: 175px;
        position: relative;
        border-radius: 20px;
        box-shadow: 0 2px 5px black;
        cursor: pointer;
        margin: 20px auto;
        img {
            width: 100%;
            height: 100%;
            border-radius: 20px;
            object-fit: cover;

        }
        
        &:hover .infos {
            display: block;
        }

        .infos {
            display: none;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            height: 100%;
            background: rgba(0,0,0,0.7);
            color: white;
            border-radius: 20px;
            padding: 20px 0;

            hr {
                width: 50px;
                margin: 10px auto 30px auto;
            }
        }
    }

    @media screen and (max-width: 400px) {
        .project {
            width: 80%;
        }
    }
</style>