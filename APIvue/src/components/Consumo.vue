<template> 
  <div>
    <br>
<div class="center">
    <div class="row">
      <div class="col s2 offset-s5">
        <div class="center">
          <div class="input-field">
            <input id="name" type="text" class="validate" v-model="id" placeholder="Busque por ID" >
            <label for="name"></label>
          </div>
          <div class="input-field">
            <b-button  variant="outline-info" name="action" @click="validarS()">🔍 Buscar</b-button>
            <!-- <b-button  type="submit" name="action" @click="validarE()">Cambiar</b-button> -->
          </div>
        </div>
      </div>
    </div>
    </div>
    <br>

  <div class="center">
      
        <b-button variant="warning" @click="asignar=0" >🏠 Inicio</b-button>
        <b-button variant="primary" @click="asignar=1" >📄  Listar</b-button>                                            
        <b-button variant="success" @click="asignar=2" >🞦 Agregar</b-button>                                            
</div>
<br>

  
  <span v-if="asignar == 1">
    <List />
  </span>
  <span v-else-if="asignar == 2">
    <Form />
  </span>
  <span v-else-if="asignar == 3">
    <Search :id="this.id"/>
  </span>
  <span v-else-if="asignar == 4">
    <Edit :id="this.id" />
  </span>
</div>
</template>

<script>
import List from '@/components/List.vue'
import Form from '@/components/Form.vue'
import Search from '@/components/Search.vue'
import Edit from '@/components/Edit.vue'

export default {
  components: {
    List,
    Form,
    Search,
    Edit
  },

  data() {
    return {
      asignar: 0,
      id: null
    };
  },
  
  methods: {
    inicio() {
      this.asignar = 0;
    },

    validarS() {
      if(!isNaN(this.id) && this.id != null && this.id.replace(/\s/g, '') !== ""){
        this.asignar = 3;
      }
      else {
        alert("Identificador invalido!");
      }
    },
    
    validarE() {
      if(!isNaN(this.id) && this.id != null && this.id.replace(/\s/g, '') !== ""){
        this.asignar = 4;
      }
      else {
        alert("Identificador invalido!");
      }
    }
  }
};
</script>