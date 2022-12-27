<template>

  <Header title="Covid-19 Tracker" subTitle />
  <router-view />
</template>

<script>
import Header from './components/Header.vue';
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>

</style>