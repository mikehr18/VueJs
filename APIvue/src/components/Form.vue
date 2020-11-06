<template>
  <div>

      <b-button variant="success" v-b-modal.modal-1>Agregar Imagen</b-button>

  <b-modal id="modal-1" title="Agregar Imagen">
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

      <b-button type="submit" @click="crear()" variant="primary" name="action">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>


  </b-modal>
    
  </div>
</template>

<script>
import { HTTP } from "@/services/http.js";
  export default {
    data() {
      return {
        author: '',
          date: '',
          explanation: '',
          title: '',
          url: '',
        form: {
          author: '',
          date: '',
          explanation: '',
          title: '',
          url: '',
          
        },
        show: true
      };
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.author = ''
        this.form.date = ''
        this.form.explanation = ''
        this.form.title = ''
        this.form.url = ''

      
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      validar: function(event) {
      if(this.author == "" && this.date == "" && this.explanation == "" && this.title == "" && this.url == "") {
        event.preventDefault();
      }
      else {
        this.crear();
        return true;
      }
    },
 crear() {
      HTTP.post('/',
        {
          author: this.form.author,
          date: this.form.date,
          explanation: this.form.explanation,
          title: this.form.title,
          url: this.form.url
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

    }
  }
</script>