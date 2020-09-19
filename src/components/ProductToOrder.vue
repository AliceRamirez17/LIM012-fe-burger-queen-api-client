<template>
    <div class="products-to-order">
        <button v-for="(product, index) in breakfast" :key="index" class="each-product-to-order">
            <h4> {{ product.name }} </h4>
            <h3> {{ product.price }} </h3>
        </button>
    </div>
</template>

<script>
export default {
    name: 'ProductToOrder',
    data() {
        return {

        }
    },
    props: {
        products: Array,
        type: String,
    },
    computed: {
        breakfast(){
            return this.products.filter(product => product.type === this.type)
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
        justify-content: space-between;

        .each-product-to-order {
            @include width-height(120px, 80px);
            border: 1px solid black;
        }
    }

</style>