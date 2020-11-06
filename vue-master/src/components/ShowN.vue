<template>
  <div>
    <h1 class="color" @click="toggle()">Mostrar / Ocultar</h1>
    <p
      v-if="show"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tenetur quisquam voluptate. Minima similique dolor officia adipisci tenetur nobis, blanditiis culpa corrupti deserunt esse ex soluta, voluptas quaerat magni iste!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    toggle() {
      this.show = this.show == true ? false : true;

      //   return !this.show;
    }
  }
};
</script>

<style lang="css"  scoped>
.color {
  color: red;
}
</style>