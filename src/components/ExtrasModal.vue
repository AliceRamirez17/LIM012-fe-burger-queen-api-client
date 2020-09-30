<template>
    <div class="modal">
        <div class="modal-extra">
            <button class="btn-close-modal" @click="$emit('close')"></button>
            <div v-for="(extra, index) in arr" :key="index" class="each-product-to-order">
                <h5> {{ product.name }} </h5>
                <h3 :style="colorStyle"> {{ 'S/ ' + product.price }} </h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        arr: Array
    }
}
</script>

<style scoped lang="scss">

@import "../scss/main.scss";

    .modal {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgba($color: #000000, $alpha: 0.4);
        z-index: 2;

        .modal-extra {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 440px;
            height: 400px;
            background-color: white;
            border-radius: 20px;
            padding: 40px;
        }

        .btn-close-modal {
            position: absolute;
            top: 40px;
            right: 40px;
            width: 50px;
            height: 50px;
            outline: none;
            cursor: pointer;
            @include background-img(transparent,'../assets/btn-exit.svg', contain, none, 50%);
        }

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
    }

</style>