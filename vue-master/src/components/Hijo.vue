<template>
  <div>
    <span>{{texto}}</span>
    <button @click="cambio('Nuevo texto')">Cambio de texto</button>
  </div>
</template>

<script>
export default {
  props: {
    texto: {
      type: String
    }
  },
  methods: {
      cambio( text){ 
          this.$emit('cambiotexto',text);
      }
  },
};
</script>


<style lang="css">
</style>