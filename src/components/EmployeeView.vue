<template>
    <div class="create-order-container">
        <nav-component fullname="employee" :style="colorEmployee"></nav-component>
        <btn-back linkBack="/home" />
        <new-order v-if="newOrder"/>
        <order-list v-if="orderList"/>
        <div class="buttons-employee">
            <button class="btn-manager" :style="newOrder ? colorEmployee : 'none'">Nuevo pedido</button>
            <button class="btn-manager">Pedidos listos</button>
        </div>
    </div>
</template>

<script>
import navComponent from './NavComponent.vue';
import newOrder from './NewOrderComponent.vue';
import orderList from './OrderListComponent';
import BtnBack from './BtnBackComponent.vue';

export default {
    data() {
        return {
            newOrder: true,
            orderList: false,
            colorEmployee: {
                'background-color': '#FF9F51',
                'border': 'none'
            }
        }
    },
    components: {
        navComponent,
        newOrder,
        orderList,
        BtnBack
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