<template>
    <div class="products-to-order">
        <div v-for="(product, index) in breakfast" :key="index" class="each-product-to-order">
            <h3> {{ product.name }} </h3>
            <h3> {{ product.price }} </h3>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        products: Array,
    },
    computed: {
        breakfast(){
            return this.products.filter( product => product.type = "breakfast" )
        }
    },
}
</script>

<style lang="scss">

@import "../scss/main.scss";

    .products-to-order {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

</style>