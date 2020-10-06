<template>
    <div class="order-list-container">
        <div class="orders-to-send">
            <div v-for="order in orders" :key="order._id" class="each-order">
                <div class="container-details">
                    <h3>{{ order.client }}</h3>
                    <p>{{ order.dateEntry + ' ' + hour }}</p>
                    <hr>
                    <div v-for="(product, index) in order.products" :key="index">
                        <p class="product-order">{{ product.qty + ' x ' + product.product }}</p>
                    </div>
                    <button class="delete-order-btn"></button>
                </div>
                <button class="delivered-btn">Marcar como entregado</button>
            </div>
        </div>
        <div class="orders-delivered"></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            hour: new Date().getHours() + ':' + new Date().getMinutes()
        }
    },
    props: {
        orders: Array,
    }
}
</script>

<style lang="scss">
    .order-list-container {
        display: grid;
        grid-template-columns: 48% 4% 48%;
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        padding: 40px 0;
        box-sizing: border-box;
        position: relative;

        .orders-to-send {
            grid-column: 1 / 2;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: flex-start;

            .each-order {
                width: 47%;
                border: 1px solid #000;
                border-radius: 10px;
                
                h3, p {text-align: left}

                .container-details {
                    position: relative;
                    padding: 10px;

                    .product-order {
                        font-size: 14px;
                    }

                    .delete-order-btn {
                        width: 30px;
                        height: 30px;
                        background-size: contain;
                        border: none;
                        background-color: transparent;
                        outline: none;
                        cursor: pointer;
                        background-image: url(../assets/btn-delete.svg);
                        position: absolute;
                        top: 5px;
                        right: 5px;
                    }
                }

                .delivered-btn {
                    width: 100%;
                    height: 30px;
                    background-color: black;
                    color: white;
                    border-bottom-left-radius: 10px;
                    border-bottom-right-radius: 10px;
                }
            }
        }

        .orders-delivered {
            grid-column: 3 / 4;
            border: 2px solid #00E282;
            border-radius: 20px;
        }
    }
</style>