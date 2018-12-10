<template>
  <div id="app">
    <div class="container">
      <header-app></header-app>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <router-view name="orderingGuide"></router-view>
        </div>
        <div class="col-md-4">
          <router-view name="delivery"></router-view>

        </div>
        <div class="col-md-4">
          <router-view name="history"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    "header-app":Header
  }
}
</script>

<style>
</style>
