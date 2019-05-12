<template>
  <div id="app" class="container">
    <Map/>
    <Detail/>
    <Graph/>
  </div>
</template>

<script>
import Map from './components/Map.vue'
import Detail from './components/Detail.vue'
import Desk from './components/Desk.vue'
import  Graph from './components/Graph'



export default {

  components: {
    Map,
    Detail,
    Desk,
    Graph
  }
}
</script>

<style>
</style>
