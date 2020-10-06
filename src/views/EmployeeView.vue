<template>
    <div class="create-order-container">
        <nav-component fullname="employee" :style="newOrder ? colorNewOrder : colorOrderList"></nav-component>
        <btn-back linkBack="/home" />
        <NewOrder v-if="newOrder" :btnColor="colorNewOrder"/>
        <OrderList v-if="orderList" :orders="orders"/>
        <div class="buttons-employee">
            <button @click="showNewOrder" class="btn-manager" :style="newOrder ? colorNewOrder : 'none'">Nuevo pedido</button>
            <button @click="showOrderList" class="btn-manager" :style="orderList ? colorOrderList : 'none'">Pedidos listos</button>
        </div>
    </div>
</template>

<script>
import { getOrders } from '../controllers/orders.js'

import navComponent from '../components/NavComponent.vue';
import NewOrder from '../components/NewOrderComponent.vue';
import OrderList from '../components/OrderListComponent.vue';
import orderList from '../components/OrderListComponent';
import BtnBack from '../components/BtnBackComponent.vue';

const token = 'qwerryuipuq';

export default {
    data() {
        return {
            newOrder: true,
            orderList: false,
            colorNewOrder: {
                'background-color': '#FF9F51',
                'border': 'none'
            },
            colorOrderList: {
                'background-color': '#00E282',
                'border': 'none'
            },
            orders: [],
        }
    },
    components: {
        navComponent,
        NewOrder,
        orderList,
        BtnBack,
        OrderList
    },
    mounted () {
      getOrders(token)
        .then(response => {
            console.log(response);
            return this.orders = response
        })
    },
    methods: {
      showNewOrder(){
        this.newOrder = true,
        this.orderList = false
      },
      showOrderList(){
        this.orderList = true,
        this.newOrder = false
      },
    }
}
</script>

<style lang="scss">

@import "../scss/main.scss";

    .create-order-container {
        height: 100vh;
        display: grid;
        grid-template-columns: 10% 80% 10%;
        grid-template-rows: 10% 78% 12%;

        .buttons-employee {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            grid-column: 1 / 4;
            grid-row: 3 / 4;
            border-top: 1px solid black;
        }
    }

</style>