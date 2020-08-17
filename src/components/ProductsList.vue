<template>
    <div class="products-list">
        <div v-for="(product, index) in show" :key="index" class="each-product">
            <div class="product-img">
                <img :src="product.image" alt="">
            </div>
            <h3> {{ product.name }} </h3>
            <button class="edit-product-btn"></button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'productsList',
    data() {
        return {
            page: 0,
        }
    },
    props: {
        products: Array,
    },
    computed: {
        show(){
            return this.products.slice(this.page*6, this.page*6 + 6)
        }
    },
    methods: {
        increase(){
            this.page++;
        },
        decrease(){
            this.page--;
        }
    }
}
</script>

<style lang="scss">
    .products-list {
        display: flex;
        width: 90%;
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        margin: 40px auto;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        .each-product {
            display: flex;
            position: relative;
            width: 32%;
            height: 200px;
            flex-direction: column;
            align-items: center;
            border-radius: 20px;
            padding: 0;
            border: 1px solid #000;

            h3 {
                font-family: Livvic, Helvetica, Arial, sans-serif;
                font-size: 25px;
                width: 80%;
            }

            .product-img {
                width: 100%;
                height: 60%;
                
                img {
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    border-top-left-radius: 20px;
                    border-top-right-radius: 20px;
                    object-fit: cover;
                }
            }

            .edit-product-btn {
                width: 50px;
                height: 50px;
                border: none;
                position: absolute;
                top: 10px;
                right: 10px;
                background-color: #FF5E53;
                border-radius: 10px;
                background-image: url(../assets/btn-edit.svg);
                background-size: 70%;
                background-repeat: no-repeat;
                background-position: center;
            }
        }    
    }
</style>