<script setup>
const props = defineProps({
    product:{
        type: Object,
        required: true
    }
})
</script>
<template>
<article class="product-wrapper">
  <div class="product-photo mb-4">
    <img class="" :src="product.src" :srcset="product.srcset" :alt="product.alt ? product.alt : product.name" width="306" height="306">
  </div>
  <h1 class="font-bold text-heading-small" v-html="product.name"></h1>
  <p class="mt-1 text-dark-400" v-html="product.description"></p>
  <div class="price font-bold">{{formatPrice(product.price)}}</div>
  <atoms-reakt-button expanded>Koupit</atoms-reakt-button>
</article>
</template>

<script>
</script>

<style>

</style>