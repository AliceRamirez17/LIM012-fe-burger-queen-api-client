<template>
    <div class="new-order-container">
        <div class="food-options">
            <template>
                <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-header class="green accent-3">Desayuno</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <product-to-order :products="products" :type="type1"></product-to-order>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header>Almuerzo</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <product-to-order :products="products" :type="type2"></product-to-order>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </template>
        </div>
        <div class="resume-order">
            <h1>Enviar pedido</h1>
        </div>
    </div>
</template>

<script>
import ProductToOrder from './ProductToOrder.vue';
import { getProducts } from '../controllers/products.js'

const token = 'qwerryuipuq';

export default {
    data() {
        return {
            products: [],
            type1: 'breakfast',
            type2: 'lunch'
        }
    },
    components: {
        ProductToOrder
    },
    mounted () {
    getProducts(token)
      .then(response => {
        return this.products = response
      })
  },
}
</script>

<style lang="scss">

@import "../scss/main.scss";

    .new-order-container {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-column: 2 / 3;
        grid-row: 2 / 3;

        .food-options {
            grid-column: 1 / 2;
        }

        .resume-order {
            grid-column: 2 / 3;
        }
    }

</style>