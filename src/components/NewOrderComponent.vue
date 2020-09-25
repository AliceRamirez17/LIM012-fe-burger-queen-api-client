<template>
    <div class="new-order-container">
        <div class="food-options">
            <template>
                <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-header class="green accent-3">Desayuno</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <product-to-order :products="products" @show="obtenerPrecio" :type="type1" :colorStyle="type1 ? colorBreakfast : 'none'" />
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header>Almuerzo</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <product-to-order :products="products" @show="obtenerPrecio" :type="type2" :colorStyle="type2 ? colorLunch : 'none'" />
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </template>
        </div>
        <div class="resume-order">
            <div class="container-resume">
                <div class="add-client">
                    <label for="client">Cliente</label>
                    <input type="text" id="client">
                </div>
                <br />
                <h3>Resumen</h3>
                <hr />
                <br />
                <div v-for="(productSel, index) in listProductSelec" :key="index" class="list-products-selec">
                    <p>{{ productSel.name }}</p>
                    <p>{{ productSel.price }}</p>
                </div>
            </div>
            <button class="send-order" :style="btnColor">Enviar pedido</button>
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
            type2: 'lunch',
            colorBreakfast: {
                'background-color': '#00E676'
            },
            colorLunch: {
                'background-color': '#FF5E53'
            },
            listProductSelec: [],
            cadaProduct: {}
        }
    },
    props: {
        btnColor: Object,
    },
    components: {
        ProductToOrder,
    },
    mounted () {
        getProducts(token)
        .then(response => {
            return this.products = response
        })
    },
    methods: {
        obtenerPrecio(obj){
            this.listProductSelec.push(
                this.cadaProduct = {
                    name: obj.name,
                    price: obj.price
                }
            )
        }
    }
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
            grid-column: 3 / 4;
            justify-content: space-between;
            border: 1px solid black;
            border-radius: 20px;

            .container-resume {
                width: 100%;
                padding: 20px;
                box-sizing: border-box;

                .add-client {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    label, input {
                        font-size: 20px;
                        font-weight: 700;
                    }

                    input {
                        border: 1px solid black;
                        height: 30px;
                        border-radius: 10px;
                        text-align: center;
                    }
                }

                h3 {text-align: left}

                .list-products-selec {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;

                    p{font-size: 20px}
                }
            }

            .send-order {
                width: 100%;
                height: 40px;
                border-bottom-left-radius: 20px;
                border-bottom-right-radius: 20px;
            }
        }
    }

</style>