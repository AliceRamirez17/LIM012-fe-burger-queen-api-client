<template>
    <div class="modal">
        <div class="modal-product">
            <h2>Imagen</h2>
            <h2>Nombre de producto</h2>
            <h2>Cantidad en existencia</h2>
            <h2>Precio</h2>
            <button class="btn-close-modal" @click="$emit('close')"></button>
            <button class="submit-modal">{{ button }}</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        button: String,
        addFunction: Function,
    },
}
</script>

<style lang="scss">
    @mixin background-img($color, $url, $size, $border, $radius) {
        background-color: $color;
        background-image: url($url);
        background-size: $size;
        border: $border;
        border-radius: $radius;
    }

    .modal {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color: rgba($color: #000000, $alpha: 0.4);

        .modal-product{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 480px;
            height: 580px;
            background-color: white;
            border-radius: 20px;
            padding: 40px;

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

            .submit-modal {
                width: 330px;
                height: 60px;
                align-self: center;
                border-radius: 10px;
                background-color: #FF5E53;
                border-style: none;
                font-size: 28px;
                font-weight: 600;
                outline: none;
                cursor: pointer;
            }
        }
    }
</style>