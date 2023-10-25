<template>
    <div class="loupe">
        <img :src="require('@/assets/img/icons/loupe.svg')" >
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .loupe {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 132px;
        height: 132px;
        border: none;
        border-radius: 50%;
        background-color: #fff;
        filter: drop-shadow(0px 10px 20px rgba(192, 192, 192, 0.25));
        z-index: 100;
    }
</style>