<template>
  <div>
    <h1>lista de cards</h1>
     <!-- Prueba: {{valor}} -->
    <!-- <div v-for="contador in 20">
      <span v-if="contador==5">Contador: {{contador}}</span>
      <span v-else-if="contador==1">ELSE IF: {{contador}}</span>
      <span v-else>Otro numero: {{contador}}</span>
    </div> -->

    <!-- <card-twitter v-for="item in 20" :key="item"

    ></card-twitter> -->

    <!-- <card-twitter/> -->

    <custom-select  :items="paises" @cambiarvalor="cambiarDefault"/>
    <custom-select title="Estado" :items="estados"/>
    <custom-select title="Municipio"/>
  </div>
</template>

<script>
import CardTwitter from "@/components/CardTwitter.vue";
import CustomSelect from "@/components/CustomSelect.vue";
export default {
  components: {
    CardTwitter,
    CustomSelect
  },

  data() {
    return {
      valor: "prueba",
      idPadre: 1,
      paises:[
       'México',
       'Panamá',
       'USA'
      ],
      estados:[
       'Edo México',
       'Michoacán',
       'Sinaloa'
      ]
    };
  },

  beforeCreate() {
    console.log("Before create");
  },
  created() {
    console.log("Iniciar");
    this.valor = 100;
  },
  beforeMount() {
      console.log("antes de mostrar dom");
  },
  mounted() {
     console.log("montado"); 
  },

  methods: {
  },
};
</script>

<style lang="css">
</style>