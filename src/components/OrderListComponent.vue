<template>
    <div class="order-list-container">
        <div class="orders-to-send"></div>
        <div class="orders-delivered"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .order-list-container {
        display: grid;
        grid-template-columns: 48% 4% 48%;
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        padding: 40px 0;
        box-sizing: border-box;
        position: relative;

        .orders-to-send {
            grid-column: 1 / 2;
        }

        .orders-delivered {
            grid-column: 3 / 4;
            border: 1px solid black;
            border-radius: 20px;
        }
    }
</style>