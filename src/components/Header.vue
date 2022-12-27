<template>
  <header class="text-center bg-blue-800 text-white p-4 mb-10 ">
    <div class="text-3xl md:text-5xl font-bold mb-3"> <i class="fa fa-viruses"></i>{{ title }}</div>
    <p class="text-blue-300">API By<a class="text-blue-300">Covid-19</a></p>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'Default title'
    },
    linkTitle: {
      type: String,
    }
  }
}
</script>