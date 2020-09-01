<template>
  <div class="mainContainer">
    <LogoBanner/>
    <PageEditsContainer/>
  </div>
</template>

<script>
import LogoBanner from '@/components/LogoBanner.vue'
import PageEditsContainer from '@/components/PageEditsContainer.vue' 

export default {
  name: 'App',
  components: {LogoBanner, PageEditsContainer}
}
</script>

<style>
html{
  width: 500px;
  height: 600px;
  overflow-y: hidden;
}
</style>
