<template>
 <div>

      <!-- <b-button variant="success" v-b-modal.modal-1>Agregar Imagen</b-button> -->
<!-- <b-modal id="modal-1" title="Agregar Imagen"> -->
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


  <!-- </b-modal> -->
    
  </div>
</template>

<script>
import { HTTP } from "@/services/http.js";
export default {
  data() {
    return {
      author: "",
      date: "",
      explanation: "",
      title: "",
      url: ""
    };
  },
  
  props: {
    id:{
      type: Number,
      required: true,
      default: -1
    }
  },

  methods: {
    validar: function(event) {
      if(this.author == "" && this.date == "" && this.explanation == "" && this.title == "" && this.url == "") {
        event.preventDefault();
      }
      else {
        this.modificar();
        return true;
      }
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
      if(this.title != "") {
        obj["title"] = this.title;
      }
      if(this.url != "") {
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
  }
}
};
</script>