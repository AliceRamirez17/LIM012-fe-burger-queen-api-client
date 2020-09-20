<template>
    <div class="new-order-container">
        <div class="food-options">
            <template>
                <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-header class="green accent-3">Desayuno</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <product-to-order :products="products" :type="type1" :colorStyle="type1 ? colorBreakfast : 'none'" />
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header>Almuerzo</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <product-to-order :products="products" :type="type2" :colorStyle="type2 ? colorLunch : 'none'" />
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </template>
        </div>
        <div class="resume-order">
            <sum-order />
            <button class="send-order" :style="btnColor">Enviar pedido</button>
        </div>
    </div>
</template>

<script>
import ProductToOrder from './ProductToOrder.vue';
import SumOrder from './SumOrderComponent.vue';
import { getProducts } from '../controllers/products.js'

const token = 'qwerryuipuq';

export default {
    data() {
        return {
            products: [],
            type1: 'breakfast',
            type2: 'lunch',
            colorBreakfast: {
                'background-color': '#00E676'
            },
            colorLunch: {
                'background-color': '#FF5E53'
            }
        }
    },
    props: {
        btnColor: Object
    },
    components: {
        ProductToOrder,
        SumOrder
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
        grid-template-columns: 48% 4% 48%;
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        padding: 40px 0;
        box-sizing: border-box;

        .food-options {
            grid-column: 1 / 2;

            product-to-order {
                padding: 0;
            }
        }

        .resume-order {
            display: flex;
            flex-direction: column;
            height: 100%;
            grid-column: 3 / 4;
            justify-content: space-between;

            .send-order {
                width: 100%;
                height: 10%;
            }
        }
    }

</style>