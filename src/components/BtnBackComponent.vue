<template>
    <div class="container-back">
        <h3>Regresar</h3>
        <router-link :to="linkBack" class="btn-back"></router-link>
    </div>
</template>

<script>
export default {
    props: {
        linkBack: String
    }
}
</script>

<style lang="scss">

@import "../scss/main.scss";

    .container-back {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: end;
        align-items: center;
        justify-self: end;

        h3 {
            font-size: 12px;
            margin-bottom: 10px;
        }

        .btn-back {
            @include width-height(65px, 65px);
            outline: none;
            cursor: pointer;
            @include background-img(transparent,'../assets/btn-back.svg', contain, none, 50%);
            background-size: cover;
        }
    }

</style>