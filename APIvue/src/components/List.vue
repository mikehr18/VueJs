<template>
<div class="hello">
    <pre>

    <!-- {{info}} -->
<!--     
    <b-input class="date" type="date"/>
    <b-input class="date" type="date"/>
    <b-button type="summit" variant="primary">ACEPTAR</b-button> -->
    <b-card  v-for="item in info.data" :key="item" :img-src=item.url img-width="400px" img-height="400px" img-alt="Card image" img-left class="mb-3">
     <h4> {{item.title}}</h4> 
      <h5>By: {{item.author}}</h5>
      {{item.date}}
      <br>
      <div class="center">
      <b-button id="btnEliminar" variant="danger" @click="eliminar(item.id)" >❌ Eliminar </b-button>
      </div>

 
</b-card>


    </pre>

</div>
</template>

<script>
import { HTTP, BASE_URL } from "@/services/http.js";
export default {
  props: {
    info: [],
    infoF: []
  },

  methods: {
    getImages(q) {
      HTTP.get(q)
        .then(response => {
          this.info = response;
        })
        .catch(error => {
          alert(error);
        })
        .finally();
    },

    getImagesWithFetch(q) {
      fetch(BASE_URL+q)
        .then(function(response) {
          return response.json();
        })
        .then(myJson => {
          this.infoF = myJson;
        });
    },

    eliminar(id) {
      HTTP.delete('/'+id,
        {
          id: id
        }
      )
      .then(() => {
        alert("Operación exitosa!");
      })
      .catch(error => {
        alert(error);
      })
      .finally();
      this.$parent.inicio();
    },
  },

  created() {
    // this.getImages("/search/anime?q=digimon");
    this.getImages("");
    
    // this.getImagesWithFetch("/search/anime?q=pokemon");
    // this.getImagesWithFetch("/anime");
  }
}
</script>

<style>
#btnEliminar {
  justify-content: center;
  float: left;
}
</style>