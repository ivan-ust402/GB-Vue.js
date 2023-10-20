<template>
    <div class="product-details">
        <div class="product-details__name">
            <h3>Название продукта: </h3>
            <p>{{ product.name }}</p>
        </div>
        <div class="product-details__price">
            <h3>Цена продукта: </h3>
            <p>{{ formattedPrice }}</p>
        </div>
        <div class="product-details__available">
            <h3>Есть в наличии: </h3>
            <p v-if="product.available === true" class="product-details__available-text">&#10004; Available </p>
            <p v-else class="product-details__notavailable-text">&#10006; Out of stock</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                product: {
                    name: 'Лампочка светодиодная "IEK"',
                    price: 1.2,
                    available: true,
                },
            }
        },
        computed: {
            formattedPrice() {
                return `$${this.product.price}`;
            },
        },
    }
</script>

<style lang="scss" scoped>
.product-details {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 500px;
    border: 1px solid #6b6a6a;
    padding: 20px;
    border-radius: 50px;
    color: #6b6a6a;
    &:hover {
        background-color: #f3f3f3;
    }
    &__name {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    &__price {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    &__available {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    &__available-text {
        color: green;
    }
    &__notavailable-text {
        color: red;
    }
}
</style>