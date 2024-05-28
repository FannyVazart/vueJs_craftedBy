<script setup>
import { useCartStore } from '../stores/cart'
import { defineProps } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()

const addToCart = () => {
  cartStore.addToCart(props.product)
}
</script>

<template>
  <button @click="addToCart" class="rounded-xl bg-amber-700 text-amber-100 p-2 text-xl">Ajouter au panier</button>
</template>

<style scoped>

</style>