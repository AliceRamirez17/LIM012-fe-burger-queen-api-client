<template>
    <div class="products-list">
        <div v-for="(product, index) in products" :key="index" class="each-product">
            <h3> {{ product.name }} </h3>
        </div>
    </div>
</template>

<script>

export default {
    name: 'productsList',
    props: {
        products: Array,
    }, 
}
</script>

<style lang="scss">
    .products-list {
        display: flex;
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        flex-direction: column;
        margin: 0 auto;

        .each-product {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 20px 30px;
            box-sizing: border-box;

            h3 {
                font-family: Livvic, Helvetica, Arial, sans-serif;
                font-size: 25px;
                width: 10%;
            }
        }
    }
</style>