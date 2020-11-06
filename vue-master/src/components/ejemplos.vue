<template>
  <div>
    <h1>Hola: {{name}}</h1>
    <h1>Contador: {{contador}}</h1>
        
    <input type="number" v-model="n1"> +
    <input type="number" v-model="n2">
    <h1>total: {{suma}}</h1>
    <h1>{{form.name}} - {{form.edad}}</h1>
    <input type="button" :value="name" />
    <button @click="incrementar()">+</button>
    <button @click="decrementar()">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Arón",
      form: {
        name: "",
        edad: ""
      },
      contador: 0,
      n1: 10,
      n2:20
    };
  },

  methods: {
    incrementar() {
      this.contador = this.contador + 1;
    },
    decrementar() {
      this.contador = this.contador -1;
    }
  },

  computed: {
      suma(){
          return parseInt(this.n1)+parseInt(this.n2);
      }
  },


};
</script>


<style lang="css">
</style>