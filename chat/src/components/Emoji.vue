<template>
  <button @click="recibe(caracter)">{{ caracter }}</button>
</template>

<script>
export default {
  props: {
    caracter: {
      type: String,
      required: true,
      default: "default"
    }
  },

  methods: {
    recibe(caracter) {
      this.$emit('agregar', caracter);
    }
  }
}
</script>

<style scoped>
button {
  border: 1px solid;
  background-color: transparent;
  font-size: 30px;
}
</style>