<template>
  <div id="app">
    <!-- <ejemplos /> -->
    <card-list />
    <!-- <show-n> </show-n> -->
  </div>
</template>

<script>
import ejemplos from "@/components/ejemplos.vue";
import CardList from "@/components/CardList.vue";
import ShowN from "@/components/ShowN.vue";
import Padre from "@/components/Padre.vue";


export default {
  components: {
    ejemplos,
    CardList,
    ShowN
  }
};
</script>

<style>
</style>
