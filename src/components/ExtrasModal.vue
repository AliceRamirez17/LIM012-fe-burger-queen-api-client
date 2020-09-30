<template>
    <div class="modal">
        <div class="modal-extra">
            <button class="btn-close-modal" @click="$emit('close')"></button>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
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
            align-items: flex-start;
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
    }

</style>