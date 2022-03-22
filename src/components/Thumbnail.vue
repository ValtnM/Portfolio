<template>
    <div class="project">
        <img :src="require('@/assets/' + project.image + '')" :alt="project.alt">
        <div class="infos">
            <h4>{{ project.name }}</h4>
            <hr>
            <p>{{ project.short }}</p>
            <!-- <button class="btn btn-primary">Plus d'infos...</button> -->
        </div>
    </div>
</template>

<script>

export default {
    props: ['project']
}
</script>

<style scoped lang="scss">
    .project {
        width: 300px;
        height: 175px;
        position: relative;
        display: inline-block;
        border-radius: 20px;
        box-shadow: 0 2px 5px black;
        cursor: pointer;
        margin: 20px;
        img {
            width: 300px;
            height: 175px;
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
</style>