<template>
    <div class="options-container">
        <nav-component fullname="manager" :style="colorHome" :colorFont="colorFont"></nav-component>
        <section class="img-container">
            <img src="../assets/burger-queer-logo.png" alt="">
        </section>
        <div class="group-options">
            <router-link to="/create-order" class="btn-options">Crear orden</router-link>
            <router-link to="/employees" class="btn-options">Administrar usuarios y/o productos</router-link>
        </div>
    </div>
</template>

<script>
import NavComponent from '../components/NavComponent.vue';

export default {
    data() {
        return {
            colorHome: {
                'background-color': 'black',
            },
            colorFont: {
                'color': 'white',
            }
        }
    },
    components: {
        NavComponent
    }
    
}
</script>

<style lang="scss">

@import '../scss/main.scss';

    .options-container {
        height: 100vh;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 10% 78% 12%;

        .img-container {
            background-color: black;
            background-image: url('../assets/background-img-logo.png');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            grid-column: 1 /2;
            grid-row: 2 / 4;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: 40%;
            }
        }

        .group-options {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            grid-column: 2 /3;
            grid-row: 2 / 4;

            .btn-options {
                width: 60%;
                padding: 20px 20px;
                border-radius: 10px;
                background-color: $color3;
                text-decoration: none;
                color: $color1;
                font-size: 24px;
                font-weight: 800;
            }
        }
    }

</style>