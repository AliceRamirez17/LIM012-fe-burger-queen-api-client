<template>
    <div class="products-to-order">
        <button v-for="(product, index) in newArrProducts" :key="index" class="each-product-to-order" @click="addPrice(product.name)">
            <h5> {{ product.name }} </h5>
            <h3 :style="colorStyle"> {{ 'S/ ' + product.price }} </h3>
        </button>
        <extra-modal v-if="modal" @close="modal=false" />
    </div>
</template>

<script>
import ExtraModal from './ExtrasModal.vue'
export default {
    name: 'ProductToOrder',
    components: {
        ExtraModal
    },
    data() {
        return {
            qty: 0,
            price: Number,
            modal: false
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
                price: parseInt(productSelected[0].price)
            }
            this.$emit('addProduct', obj)
            if(index === 'Hamburguesa simple' || index === 'Hamburguesa doble') {
                this.modal = true
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

        .each-product-to-order {
            display: flex;
            flex-direction: column;
            align-items: center;
            @include width-height(110px, 70px);
            border: 1px solid black;
            border-radius: 10px;

            h5 {height: 50%}

            h3 {
                width: 100%;
                height: 50%;
                border-bottom-right-radius: 10px;
                border-bottom-left-radius: 10px;
            }
        }

        .extra {
            justify-content: center;
            font-weight: 800;
        }
    }

</style>