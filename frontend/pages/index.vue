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
  export default defineNuxtComponent({
    async asyncData() {
      // to fetch data use $fetch (or install Axios or whatever you want)
      return {
        modelFilters: [
            {
            "name": "Brusel",
            "checked": false,
            "id": 0
          }, {
            "name": "Diplomat",
            "checked": false,
            "id": 1
          }, {
            "name": "Orlík",
            "checked": false,
            "id": 2
          },{
            "name": "Pavouk",
            "checked": false,
            "id": 3
          },{
            "name": "Spartak",
            "checked": false,
            "id": 4
          }
        ],
        products: [{
            src: "/hodinky.jpg",
            srcset: "/hodinky.jpg, /hodinky@2x.jpg 2x",
            name: "Prim Brusel 39",
            price: 79900,
            description: "Nerezová ocel",
            modelId: 0,
          },{
            src: "/hodinky.jpg",
            srcset: "/hodinky.jpg, /hodinky@2x.jpg 2x",
            name: "Prim Brusel 42",
            price: 89900,
            description: "Nerezová ocel",
            modelId: 0,
          },
        ]
      }
    },
    data() {
      return {
        headerTitle: "Hodinky PRIM"
        // this is where you might want to define your variable data
      }
    },
    methods:  {
      applyFilters(){
        console.log(this.modelFilters)
      }
    },
  })
</script>