<template>
  <div class="tarea">
    <span>{{ texto }}</span>
    <button @click="modifica(texto)" :disabled="deshabilitado">✏️</button>
    <button @click="elimina(texto)" :disabled="deshabilitado">🗑️</button>
  </div>
</template>

<script>
export default {
  props: {
    deshabilitado: {
      type: Boolean,
      required: true,
      default: false
    },
    texto: {
      type: String,
      required: true,
      default: "Predeterminado"
    }
  },

  methods: {
    elimina(texto) {
      this.$parent.eliminar_tarea(texto);
    },
    modifica(texto) {
      this.$parent.modificar_tarea(texto);
    }
  }
}
</script>

<style scoped>
.tarea {
  padding: 0 10px;
  display: grid;
  grid-template-columns: 7fr 1fr 1fr;
  grid-gap: 10px;
  align-content: center;
  align-items: center;
  text-align: center;
  background-color: gray;
  color: aliceblue;
}

.tarea button {
  border: 1px solid;
  font-size: 20px;
}

</style>