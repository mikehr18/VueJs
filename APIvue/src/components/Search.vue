<template>
<div class="container">
  <div class="row" v-if="info.data != ''">
   
   
   
   
    <!-- <div class="col s12 m6 xl4 offset-xl4 offset-m3">
      <div class="card medium horizontal hoverable #b0bec5 blue-grey lighten-3">
        <div class="card-image valign-wrapper">
          <img :src=info.data.image_url>
        </div>
        <div class="card-stacked valign-wrapper">
          <div class="card-content valign-wrapper">
            <div>
              <p class="card-title-font-size center"><b> ({{ info.data.id }}) {{ info.data.title }}</b></p>
              <p class="card-font-size center hide-on-med-and-down">{{ info.data.synopsis }}</p>
              <div>
                <p class="card-footer-font-size right-align" style="color: green;">
                  Episodes: {{ info.data.episodes }} 
                </p>
              </div>
              <br>
              <a class="btn-floating btn-large waves-effect waves-light right" @click="eliminar(info.data.id)"><i class="material-icons">delete</i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
<b-card :img-src=info.data.url img-width="400px" img-height="400px" img-alt="Card image" img-left class="mb-3">
     <h4> {{info.data.title}}</h4> 
      <h5>By: {{info.data.author}}</h5>
      {{info.data.date}}
      <br>
      

  <div class="row center">
        <br>
        <!-- <b-button variant="warning" v-b-modal.modal-2 >Editar</b-button> -->
        <b-button variant="danger" @click="eliminar(info.data.id)" >Eliminar</b-button>                                            
</div>
</b-card>

  </div>
  <div v-else>
    <h4 class="center">No se encontró la imagen.</h4>
  </div>
</div>
</template>

<script>
import { HTTP } from "@/services/http.js";
export default {
  props: {
    info: [],
    id:{
      type: Number,
      required: true,
      default: -1
    }
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
    this.getImages("/"+this.id);
  }
}

</script>

