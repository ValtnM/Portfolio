<template>
  <div class="skills">
        <div id="skills" v-if="this.staticMenu == true"></div>
        <div class="skills-image">
            <img src="../assets/skills.jpg" alt="Ampoule">
            <div class="skills-filter"></div>
        </div>
        <div class="description">
            <div class="skills-title">
                <font-awesome-icon class="wrench-icon" icon="wrench" />                
                <h2>Mes compétences</h2>
            </div>
            <hr>
            <div class="allskills">
                <div class="hardskills">
                    <div class="html">
                        <h4>HTML/CSS</h4>
                        <div class="bar">
                            <div class="empty"></div>
                            <div class="full"></div>
                        </div>
                    </div>
                    <div class="js">
                        <h4>JavaScript ES6</h4>
                        <div class="bar">
                            <div class="empty"></div>
                            <div class="full"></div>
                        </div>
                    </div>
                    <div class="reactjs">
                        <h4>React.js</h4>
                        <div class="bar">
                            <div class="empty"></div>
                            <div class="full"></div>
                        </div>
                    </div>
                    <div class="nodejs">
                        <h4>Node.js</h4>
                        <div class="bar">
                            <div class="empty"></div>
                            <div class="full"></div>
                        </div>
                    </div>
                    <div class="vuejs">
                        <h4>Vue.js</h4>
                        <div class="bar">
                            <div class="empty"></div>
                            <div class="full"></div>
                        </div>
                    </div>
                    <div class="sql">
                        <h4>SQL</h4>
                        <div class="bar">
                            <div class="empty"></div>
                            <div class="full"></div>
                        </div>
                    </div>
                    <div class="typescript">
                        <h4>TypeScript</h4>
                        <div class="bar">
                            <div class="empty"></div>
                            <div class="full"></div>
                        </div>
                    </div>
                    <div class="github">
                        <h4>GitHub</h4>
                        <div class="bar">
                            <div class="empty"></div>
                            <div class="full"></div>
                        </div>
                    </div>
                </div>
                <div class="softskills">
                    <div class="critical-spirit">
                        <h4>Esprit critique</h4>
                        <div class="bar">
                            <div class="empty"></div>
                            <div class="full"></div>
                        </div>
                    </div>
                    <div class="conscientious">
                        <h4>Consciencieux</h4>
                        <div class="bar">
                            <div class="empty"></div>
                            <div class="full"></div>
                        </div>
                    </div>
                    <div class="team-spirit">
                        <h4>Esprit d'équipe</h4>
                        <div class="bar">
                            <div class="empty"></div>
                            <div class="full"></div>
                        </div>
                    </div>
                    <div class="learn-ability">
                        <h4>Capacité à apprendre</h4>
                        <div class="bar">
                            <div class="empty"></div>
                            <div class="full"></div>
                        </div>
                    </div>
                    <div class="autonomy">
                        <h4>Autonome</h4>
                        <div class="bar">
                            <div class="empty"></div>
                            <div class="full"></div>
                        </div>
                    </div>
                    <div class="perseverance">
                        <h4>Persévérant</h4>
                        <div class="bar">
                            <div class="empty"></div>
                            <div class="full"></div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
  </div>
</template>

<script>
export default {
    props: ['staticMenu'],
    methods: {
        runAnimation(){
            const bar = document.querySelectorAll('.full')
            const topOfBlock = bar[0].getBoundingClientRect().top;

            for(let i = 0; i < bar.length; i++) {
                if(topOfBlock - (innerHeight/2) < 0) {
                    bar[i].classList.add('active')
                }
            }
        }
    },
    created(){
        window.addEventListener('scroll', this.runAnimation);
    }
}
</script>

<style scoped lang="scss">

    .skills {
        position: relative;
        display: flex;
        height: 650px;

        h2 {
            font-size: 2.5em;
            color: black;
            text-align: left;
        }
        &-image {
            width: 35%;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        &-filter {
            width: 35%;
            height: 650px;
            background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,238,218,1) 100%);
            position: absolute;
            left: 0;
            bottom: 0;
            right: 0;
        }
        .description {
            width: 65%;
            background: #FFEEDA;

            .skills-title {
                display: flex;
                align-items: center;
                margin-top: 30px;

                .wrench-icon {
                    display: inline;
                    height: 35px;
                    margin-bottom: 0.5rem;
                    margin-right: 15px;
                }
            }

            hr {
                color: black;
                margin-top: 0;
                margin-bottom: 50px;
            }
        }

        .allskills {
            display: flex;
            padding-bottom: 20px;
        }

        .hardskills, .softskills {
            width: 45%;
            margin: 0 50px ;

            &:last-child {
                margin-bottom: 20px;
            }

            h4 {
                font-size: 1.1em;
                color: black;
                text-align: left;
            }
            
            .bar {
                position: relative;
                width: 100%;
                margin-bottom: 20px;
                .empty {
                    width: 100%;
                    height: 10px;
                    background: white;
                    border-radius: 10px;
                }
                .full {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 90%;
                    height: 10px;
                    background: yellow;
                    border-radius: 10px;
                }
            }
            .critical-spirit, .conscientious, .html {
                .full {
                    width: 90%;
                    background: #FF0000;
                    transform: scaleX(0);
                    transform-origin: left;
                    
                }
            }
            .team-spirit, .js {
                .full {
                    width: 85%;
                    background: #FF3A00;
                    transform: scaleX(0);
                    transform-origin: left;
                }
            }
            .learn-ability, .autonomy, .nodejs, .reactjs {
                .full {
                    width: 80%;
                    background: #D68910;
                    transform: scaleX(0);
                    transform-origin: left;
                }
            }
            .perseverance, .vuejs, .sql {
                .full {
                    width: 75%;
                    background: #D4AC0D;
                    transform: scaleX(0);
                    transform-origin: left;
                }
            }
            .github, .typescript {
                .full {
                    width: 70%;
                    background: #F1C40F;
                    transform: scaleX(0);
                    transform-origin: left;
                }
            }
            .active {
                animation: fillBar 2s forwards;
            }
        }
    }

    @keyframes fillBar {
        0% {
            transform: scaleX(0);
        }
        100% {
            transform: scaleX(1);
        }
    }

    @media screen and (max-width: 992px) {
        .skills {
            flex-direction: column;
            height: auto;

            .skills-image {
                order: 2;
                width: 100%;
                height: 600px;

                .skills-filter {
                    height: 600px;
                    width: 100%;
                    background: linear-gradient(180deg, rgba(255,238,218,1) 0%, rgba(255,255,255,0) 50%, rgba(234,249,253,1) 100%);
                }
            }

            .description {
                order: 1;
                width: 100%;
                padding: 0 10px;
            }
        }
    }

    @media screen and (max-width: 660px) {
        .allskills {
            flex-direction: column;
            padding-bottom: 0;

            .hardskills, .softskills {
                width: 90%;
                margin: 0 auto 30px auto;
            }
        }
    }

    @media screen and (max-width: 570px) {
        h2 {
            font-size: 1.8em!important;
        }
    }
</style>