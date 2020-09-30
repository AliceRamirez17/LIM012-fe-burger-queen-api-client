<template>
    <div class="new-order-container">
        <div class="food-options">
            <template>
                <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-header class="green accent-3">Desayuno</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <product-to-order :products="products"
                            @addProduct="addProductToList"
                            :type="type1" :colorStyle="type1 ? colorBreakfast : 'none'" />
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header>Almuerzo</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <product-to-order :products="products"
                            @addProduct="addProductToList"
                            :type="type2" :colorStyle="type2 ? colorLunch : 'none'" @showModal="showModal" />
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </template>
        </div>
        <div class="resume-order">
            <div class="add-client">
                <label for="client">Cliente</label>
                <input type="text" id="client">
            </div>
            <h3 class="title-resume">Resumen</h3>
            <div class="container-list">
                <div v-for="(productSel, index) in listProductSelec" :key="index" class="product-selec">
                    <button @click="addQty(productSel)"></button>
                    <p>{{ productSel.qty }}</p>
                    <div class="name-btn">
                        <p>{{ productSel.name }}</p>
                        <button @click="decQty(productSel)"></button>
                    </div>
                    <p class="price-product">{{ 'S/' + productSel.price }}</p>
                </div>
            </div>
            <div class="total-price">
                <h2>Total</h2>
                <h2>{{ 'S/' + totalPrice }}</h2>
            </div>
            <button class="send-order" :style="btnColor">Enviar pedido</button>
        </div>
        <extra-modal v-if="modal" @close="modal=false" :arr="arrEx"/>
    </div>
</template>

<script>
import ProductToOrder from './ProductToOrder.vue';
import { getProducts } from '../controllers/products.js';
import ExtraModal from './ExtrasModal.vue'

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
            arr:[],
            eachProduct: {},
            totalPrice: 0,
            qty: 0,
            modal: false,
            arrEx:[]

        }
    },
    props: {
        btnColor: Object,
    },
    components: {
        ProductToOrder,
        ExtraModal
    },
    mounted () {
        getProducts(token)
        .then(response => {
            return this.products = response
        })
    },
    methods: {
        addProductToList(obj){
            this.listProductSelec.push(
                this.eachProduct = {
                    qty: this.qty + 1,
                    name: obj.name,
                    price: obj.price
                }
            )
            this.totalPrice = this.totalPrice + parseInt(this.eachProduct.price)
        },
        addQty(product){
            this.totalPrice = this.totalPrice + product.price
            const index = this.listProductSelec.indexOf(product)
            if(index !== -1) {
                product.qty++
            }
        },
        decQty(product){
            this.totalPrice = this.totalPrice - product.price
            const index = this.listProductSelec.indexOf(product)
            if(index !== -1) {
                if(product.qty === 1){
                    this.listProductSelec.splice(index, 1)
                } else if (product.qty > 1){
                    product.qty--
                }
            }  
        },
        showModal(){
            this.modal = true
            this.arrEx = this.$refs.ProductToOrder.showExtras()
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
        position: relative;

        .food-options {
            grid-column: 1 / 2;

            product-to-order {
                padding: 0;
            }
        }

        .resume-order {
            grid-column: 3 / 4;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 12% 8% 60% 10% 10%;
            border: 1px solid black;
            border-radius: 20px;

            .add-client {
                display: flex;
                justify-content: space-between;
                align-items: center;
                grid-row: 1 / 2;
                padding: 0 20px;

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

            .title-resume {
                text-align: left;
                grid-row: 2 / 3;
                padding: 0 20px;
                border-bottom-width: 1px;
                border-bottom-style: solid;
            }

            .container-list {
                display: flex;
                flex-direction: column;
                grid-row: 3 / 4;
                padding: 20px;

                .product-selec {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    margin-bottom: 5px;

                    p{
                        font-size: 16px
                    }

                    button {
                        width: 20px;
                        height: 20px;
                        background-image: url(../assets/btn-plus.svg);
                        background-size: cover;
                    }
                    .name-btn {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        width: 70%;

                        button {
                            background-image: url(../assets/btn-less.svg);
                        }
                    }

                    .price-product {
                        width: 10%;
                        text-align: right;
                    }
                }
            }

            .total-price {
                display: flex;
                flex-direction: row;
                padding: 0 20px;
                grid-row: 4 / 5;
                border-top-width: 1px;
                border-top-style: solid;
                align-items: center;
                justify-content: space-between;
            }

            .send-order {
                width: 100%;
                height: 100%;
                border-bottom-left-radius: 20px;
                border-bottom-right-radius: 20px;
                grid-row: 5 / 6;
                grid-column: 1 / 2;
                font-size: 22px;
                font-weight: 700;
            }
        }
    }

</style>