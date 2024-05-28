<template>

<div class="px-12 pt-3 max-w-screen-2xl mx-auto flex justify-between">

  <h2 class = "text-3xl font-bold">Meilleures ventes</h2>
  <button class="border border-indigo-950 rounded-xl text-xl p-1 flex items-center p-2">Filtres <img src="@/components/icons/filtre.svg" width="25"></button>

</div>

  <div class="px-12 pt-6 pb-12 max-w-screen-2xl mx-auto">
    <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

      <li v-for="product in products" :key="product.id"
          class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
        <RouterLink :to="{ name: 'product', params: { id: product.id } }">
        <div class="flex w-full items-center justify-between space-x-6 p-6">
          <div class="flex-1 truncate">
            <div class="flex items-center justify-center">
              <img class="h-72" :src="product.image" alt="" />
            </div>
            <h3 class="truncate text-2xl font-medium text-gray-900">{{ product.title }}</h3>
            <p class="mt-1 truncate text-sm text-gray-500">{{ product.description }}</p>
          </div>
        </div>
        </RouterLink>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="flex w-0 flex-1 ">
              <p
                class="justify-between p-6 relative -mr-px inline-flex w-0 flex-1 items-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-2xl font-semibold text-gray-900">
                {{ product.price }} €
                <AddToCartButton :product="product"></AddToCartButton>
              </p>

            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useFetch } from '@vueuse/core'
import AddToCartButton from '@/components/AddToCartButton.vue'
const { data: products } = useFetch('https://fakestoreapi.com/products?limit=20').json()
</script>