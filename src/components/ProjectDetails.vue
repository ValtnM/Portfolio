<template>
    <div class="content">
        <font-awesome-icon @click="closeDetails()" class="xmark-icon" icon="xmark" />
        <div class="details">
            <div class="details-title">
                <h3>{{currentProject.name}}</h3>
                <hr>
            </div>
            <div class="description">
                <img :src="require('@/assets/' + currentProject.image + '')" alt="">
                <div class="description-text">
                    <p>{{ currentProject.description }}</p>
                    <a :href="currentProject.link" target="blank">
                        <button class="btn btn-success">Accéder au site</button>
                    </a>
                </div>
                <hr>
            </div>
            <div class="skills">
                <div class="tasks">
                    <h4>Tâches effectuées</h4>
                    <ul>
                        <li v-for="(skill, index) in currentProject.skills" :key="index">{{ skill }}</li>
                    </ul>
                </div>
                <div class="technologies">
                    <img v-for="(technology, index) in currentProject.technologies" :key="index" :src="require('@/assets/' + technology + '')" alt="">
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['currentProject'],
    methods: {
        closeDetails() {
            this.$emit('closeDetails', false)
        }
    }
}
</script>

<style scoped lang="scss">
    .content {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0,0,0,0.6);
        z-index: 100;
    }

    .details {   
        width: 80%;
        height: 90vh;
        margin: 50px auto;
        padding: 30px 40px;
        background: rgba(0,0,0,0.9);
        overflow: scroll;
    }

    .xmark-icon {
        position: absolute;
        top: 50px;
        right: 100px;
        color: white;
        font-size: 3em;
        cursor: pointer;
    }

    .details-title {
        margin-bottom: 50px;
        h3 {
            color: white;
            font-size: 3em;
        }
        hr {
            color: white;
            width: 40%;
            height: 2px;
            margin: 0 auto;
        }

    }

    .description {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        img {
            width: 40%;
            // height: auto;
            object-fit: contain;
            margin: 0;
            vertical-align: top;
        }

        &-text {
            width: 40%;
            p {
                font-size: 1.5em;
                color: white;
                text-align: justify;
            }
            button {
                font-size: 1.4em;
                margin-top: 30px;
            }
        }

        hr {
            display: none;
        }

    }

    .skills {
        display: flex;
        justify-content: space-around;
        .tasks {
            width: 40%;
            margin-top: 50px;
            

            h4 {
                font-size: 1.9em;
                color: white;
                margin-bottom: 20px;
            }

            li {
                font-size: 1.5em;
                color: white;
                text-align: left;
            }
        }

        .technologies {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            width: 40%;
            margin-top: 30px;

            img {
                width: 150px;
                height: 150px;
                padding: 10px 5px;
                object-fit: contain;
            }
        }
    }

    @media screen and (max-width: 1400px) {
        .xmark-icon {
            top: 5px;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    @media screen and (max-width: 972px) {
        .description {
            flex-direction: column;

            img {
                width: 100%;
                margin: auto;
            }

            &-text {
                width: 100%;
                margin:  30px auto;
            }

            hr {
                display: block;
                width: 40%;
                height: 2px;
                color: white;
                margin: 30px auto;
            }
        }

        .skills {
            flex-direction: column;

            .tasks, .technologies {
                width: 100%;
                margin: 20px auto;
            }
        }
    }

    @media screen and (max-width: 500px) {
        .content {
            font-size: 0.7em!important;

            .technologies {
                img {
                    width: 100px;
                    height: 100px;
                }
            }
        }
        h3 {
            font-size: 2em!important;
        }
    }
</style>