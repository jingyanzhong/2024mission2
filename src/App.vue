<script setup>
// import { storeToRefs } from 'pinia'
import { RouterView } from 'vue-router'
// import { useCounterStore } from './stores/counter'
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/HeaderComponent.vue'
import Footer from './components/FooterComponent.vue'
// const store = useCounterStore()
// const { count, doubleCount } = storeToRefs(store)
// const { increment } = store
</script>

<template>
  <Header></Header>
  <div class="menu-m-bg"></div>
  <main>
    <RouterView></RouterView>
  </main>
  <Footer></Footer>
</template>

<style>

</style>
