<template>
  <div>
    <label class="color">{{ title }}: </label>
    <select name id>
      <option value="0">Seleccionar</option>
      <option v-for="item in items" :value="item" :key="item">
          {{item}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: "Titulo"
    },
    items: {
      type: Array,
      required: false,
      default: () => []
    }
  }
};
</script>

<style lang="css" scoped>

.color{
    color:red;
}
</style>