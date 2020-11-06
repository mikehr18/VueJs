<template>
  <div class="hello">
    <pre>

    <!-- {{info}} -->
<!--     
    <b-input class="date" type="date"/>
    <b-input class="date" type="date"/>
    <b-button type="summit" variant="primary">ACEPTAR</b-button> -->
    <b-card v-for="item in info.data" :key="item" :img-src=item.url img-width="400px" img-height="400px" img-alt="Card image" img-left class="mb-3">
     <h4> {{item.title}}</h4> 
      <h5>By: {{item.author}}</h5>
      {{item.date}}
      <br>
      

  <div class="row center">
      
        <b-button variant="warning" v-b-modal.modal-2 >Editar</b-button>
        <b-button variant="danger" @click="eliminar(item.id)" >Eliminar</b-button>                                            
</div>
</b-card>


    </pre>
    

    <!-- <h1>Consumo de apis con fetch</h1>
    <pre>

    {{infoF}}
    <span v-for="item in infoF.data" :key="item">
      {{item.url}}
      <img :src=item.url height="400px" width="400px">
    </span>
    </pre>
     -->
<b-modal id="modal-2" title="Editar Imagen">
<b-form @click="modificar(item.id)"   @reset="onReset" v-if="show">
      <b-form-group id="input-group-0" label="Copyrigth" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.author"
          required
          placeholder="Enter author"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="Date:"
        label-for="input-1"
      >
        <b-form-input
          class="date" 
          type="date"
          id="input-1"
          v-model="form.date"
          required
          placeholder="Date"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Explanation:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.explanation"
          required
          placeholder="Explanation"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-7" label="Title:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.title"
          required
          placeholder="Title"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-8" label="Url:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.url"
          required
          placeholder="Url"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>


  </b-modal>

     <b-button v-b-modal.modal-1>Agregar Imagen</b-button>

  <b-modal id="modal-1" title="Agrgar Imagen">
<b-form @submit.stop.prevent="validar" method="POST"  @reset="onReset" v-if="show">
      <b-form-group id="input-group-0" label="Copyrigth" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.author"
          required
          placeholder="Enter author"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="Date:"
        label-for="input-1"
      >
        <b-form-input
          class="date" 
          type="date"
          id="input-1"
          v-model="form.date"
          required
          placeholder="Date"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Explanation:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.explanation"
          required
          placeholder="Explanation"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-7" label="Title:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.title"
          required
          placeholder="Title"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-8" label="Url:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.url"
          required
          placeholder="Url"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" name="action">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>


  </b-modal>
   
  </div>
</template>

<script>
import { HTTP, BASE_URL } from "@/services/http.js";
export default {
  props: {
    msg: String,
    info: [],
    infoF: [],
    img: {
      titulo: "titulo de la imagen",
      base64: "qropewfiuhsgdfbds89wwh",
      likes: 400
    }
  },
   data() {
      return {
        urlImagen: "hh",
        form: {
          author: '',
          date: '',
          explanation: '',
          title:'',
          url:''
         
        },
        show: true
      }
    },

  methods: {
    getImages(q) {
      HTTP.get(q)
        .then(response => {
          // handle success
          this.info = response;
          //console.log(response.data.copyright);
        })
        .catch(error => {
          // handle error
          alert(error);
        })
        .finally();
    }
    // ,
    // postImage(img) {
    //   HTTP.post( img )
    //     .then(response => {
    //       // handle success
    //       if( response.code == 100){
    //         print('hey') 
    //       }
    //       this.info = response;
    //     })
    //     .catch(error => {
    //       // handle error
    //       alert(error);
    //     })
    //     .finally();
    // }
    ,
     onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.author = ''
        this.form.date = null
        this.form.explanation = ''
        this.form.title = ''
        this.form.url = ''




        
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },

    getImagesWithFetch(q) {
      fetch(BASE_URL+q)
        .then(function(response) {
          return response.json();
        })
        // .then(function(myJson) {
        //   this.infoF = myJson
        // });
        .then(myJson => {
          this.infoF = myJson;
          this.urlImagen=this.infoF.url;

        });
    }, 
    modificar() {
      var obj = {};
      if(this.author.replace(/\s/g, '') !== "") {
        obj["author"] = this.author;
      }
       if(this.date.replace(/\s/g, '') !== "") {
        obj["date"] = this.date;
      }
      if(this.explanation.replace(/\s/g, '') !== "") {
        obj["explanation"] = this.explanation;
      }
      if(this.title.replace(/\s/g, '') !== "") {
        obj["title"] = this.title;
      } 
      if(this.url.replace(/\s/g, '') !== "") {
        obj["url"] = this.url;
      }
      HTTP.put('/'+this.id, obj)
      .then(() => {
        alert("Operación exitosa!");
      })
      .catch(error => {
        alert(error);
      })
      .finally();
    this.$parent.inicio();
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

    validar: function(event) {
      if(this.author == "" || this.date == "" || this.explanation == "" || this.title == "" || this.url == ""){
        event.preventDefault();
      }
      else {
        this.crear();
        return true;
      }
    },

    crear() {
      HTTP.post('',
        {
          author: this.author,
          date: this.date,
          explanation: this.explanation,
          title: this.title,
          url: this.url
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
  }


  },

  created() {
    this.getImages("");
    //this.getImages("apod?api_key=NEc2hHHqnnYFlI9Wz06IRMnn0ZwSaw1NQuPkuwA2&start_date=2019-02-06&end_date=2019-02-15");
    //this.getImagesWithFetch("apod?api_key=NEc2hHHqnnYFlI9Wz06IRMnn0ZwSaw1NQuPkuwA2&start_date=2019-01-01&end_date=2019-01-10");
  },

  


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input {
width: 200px;
}

</style>
