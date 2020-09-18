<template>
    <div class="new-order-container">
        <div class="food-options">
            <button>Desayuno</button>
            <button>Almuerzo</button>
        </div>
        <div class="resume-order">
            <h1>Enviar pedido</h1>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

@import "../scss/main.scss";

    .new-order-container {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-column: 1 / 4;

        .food-options {
            grid-column: 1 / 2;
        }

        .resume-order {
            grid-column: 2 / 3;
        }
    }

</style>