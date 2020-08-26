<template>
    <div class="modal">
        <div class="modal-product">
            <h2>Imagen</h2>
            <input type="file" accept=".jpg, .png" required>
            <h2>Nombre de producto</h2>
            <input type="text" v-model="name">
            <h2>Categoría</h2>
            <input type="text" v-model="type">
            <h2>Precio</h2>
            <input type="number" v-model="price">
            <button class="btn-close-modal" @click="$emit('close')"></button>
            <button class="submit-modal" @click="addFunction(productObj)">{{ button }}</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            image: '',
            name: '',
            price: '',
            type: '',
        }
    },
    props: {
        button: String,
        addFunction: Function,
        editName: String,
        editType: String,
        editPrice: Number
    },
    computed: {
        productObj() {
            return {
                image: this.image,
                name: this.name,
                price: this.price,
                type: this.type,
            }
        }
    },
    mounted() {
        if (this.button === 'Guardar cambios') {
            this.name = this.editName
            this.type = this.editType
            this.price = this.editPrice
        }
    }
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

            h2 {
                text-align: left;
            }

            input {
                width: 300px;
                height: 45px;
                border-radius: 10px;
                border-style: none;
                border: 1px solid black;
                outline: none;
                font-size: 22px;
                padding-left: 5px;
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