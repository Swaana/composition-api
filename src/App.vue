<template>
  <div id="app">
    <the-header />
    <b-container class="mt-4">
      <router-view />
    </b-container>
  </div>
</template>

<style lang="scss">
</style>
<script>
import TheHeader from '@/components/TheHeader'
export default {
  components: { TheHeader }
}
</script>
