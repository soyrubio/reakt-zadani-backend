

<template>
  <div>
    <div class="grid grid-cols-12 gap-6 pt-8">
      <div class="col-span-3">
        <div class="border-b border-dark-200 pb-6">
          <h1 class="text-heading-xl font-bold">{{ headerTitle }}</h1>
        </div>
        <div>
          <h2 class="text-heading-medium font-bold pt-6">Model</h2>
          <label :for="model.id" v-for="(model,i) in modelFilters" :key="i">
            <input type="checkbox" :id="model.id" v-model="model.checked"/>{{model.name}}</label>
          <atoms-reakt-button expanded outlined @click.native="applyFilters()">Aplikovat filtry</atoms-reakt-button>
        </div>
      </div>
      <div class="col-span-9">
        <div class="grid grid-cols-12 gap-6">
          <div class="col-span-6 lg:col-span-4" v-for="(product, i) in products" :key="i">
            <molecules-product-card :product="product"></molecules-product-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const fetchProducts = async (filterIds) => {
  try {
    let url = 'http://localhost:3001/products'
    if (filterIds !== undefined && filterIds.length > 0)
      url = url + '?filter=' + filterIds.join(',')
    console.log(url)
    const products = await $fetch(url)
    return {
      products: products,
    }
  } catch (e) {
    console.log(e)
    return {
      products: [],
    }
  }
}

const fetchModelFilters = async () => {
  try {
    const modelFilters = await $fetch('http://localhost:3001/modelFilters')
    console.log(modelFilters)
    return {
      modelFilters: modelFilters,
    }
  } catch (e) {
    console.log(e)
    return {
      modelFilters: [],
    }
  }
}

export default defineNuxtComponent({
  data() {
    return {
      headerTitle: "Hodinky PRIM",
    }
  },

  async asyncData(){
    try {
      const { modelFilters } = await fetchModelFilters()
      const { products } = await fetchProducts()
      console.log(products, modelFilters)
      return {
        products: products,
        modelFilters: modelFilters,
      }
    } catch (e) {
      console.log(e)
    }
  },

  methods: {
    async applyFilters() {
      console.log(this.modelFilters, this)

      const selectedFilterIds = this.modelFilters
          .filter((model) => model.checked)
          .map((model) => model.id)

      const { products } = await fetchProducts(selectedFilterIds)
      console.log("fetched products", products, 'selectedFilterIds', selectedFilterIds)
      this.products = products
    }
  },
  
})

</script>