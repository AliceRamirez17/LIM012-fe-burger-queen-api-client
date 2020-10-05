<template>
    <div class="products-to-order">
        <button v-for="(product, index) in newArrProducts" :key="index" class="each-product-to-order" @click="addPrice(product.name)">
            <h5> {{ product.name }} </h5>
            <h3 :style="colorStyle"> {{ 'S/ ' + product.price }} </h3>
        </button>
    </div>
</template>

<script>
export default {
    name: 'ProductToOrder',
    components: {
    },
    data() {
        return {
            qty: 0,
            price: Number,
        }
    },
    props: {
        products: Array,
        type: String,
        colorStyle: Object
    },
    computed: {
        newArrProducts(){
            return this.products.filter(product => product.type === this.type)
        }
    },
    methods: {
        addPrice(index){
            const productSelected = this.newArrProducts.filter(productList => index === productList.name)
            // this.price = parseInt(productSelected[0].price)
            const obj = {
                name: productSelected[0].name,
                price: parseInt(productSelected[0].price),
                _id: productSelected[0]._id
            }
            this.$emit('addProduct', obj)
            if(index === 'Hamburguesa simple' || index === 'Hamburguesa doble') {
                this.$emit('showModal') 
            }
        }
    }
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

        .extra {
            justify-content: center;
            font-weight: 800;
        }
    }

</style>