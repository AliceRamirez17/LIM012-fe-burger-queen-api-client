<template>
    <div class="products-to-order">
        <button v-for="(product, index) in breakfast" :key="index" class="each-product-to-order">
            <h4 :style="colorStyle"> {{ product.name }} </h4>
            <h3> {{ 'S/ ' + product.price }} </h3>
        </button>
        <button class="each-product-to-order extra" :style="colorStyle">EXTRAS</button>
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
        colorStyle: Object
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
        justify-content: center;
        padding: 0;

        .each-product-to-order {
            display: flex;
            flex-direction: column;
            align-items: center;
            @include width-height(120px, 80px);
            border: 1px solid black;
            border-radius: 10px;

            h4 {
                width: 100%;
                height: 50%;
                border-top-right-radius: 10px;
                border-top-left-radius: 10px;
            }
        }

        .extra {
            justify-content: center;
            font-weight: 800;
        }
    }

</style>