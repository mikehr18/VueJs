<template>
<div>
  <div class="content">
    <div class="chat">
      <h3 style="color:white">THINGS TO DO</h3>
      <div class="emojis">
        <Emoji v-for="item in emojis" :key="item" :caracter="item" @agregar="agregar_emoji"/>
      </div>
      <div class="campo">
        <input type="text" v-model="texto"/>
        <button @click="agregar_tarea()" >✅</button>
      </div>  
    </div>
    <br>
    <div class="tareas">
      <Tarea v-for="item in tareas" :key="item" :texto="item" :deshabilitado="editando"/>
    </div>
  </div>
</div>
</template>

<script>
import Emoji from '@/components/Emoji.vue'
import Tarea from '@/components/Tarea.vue'

export default {
  components: {
    Emoji,
    Tarea
  },

  data() {
    return {
      emojis: [
        "🥑",
        "🍊",
        "🍄",
        "🥩",
        "🍔",
        "🍩",
        "🍺",
        "🍆",
        "🍑",
        "🥐",
        "🐱"
      ],
      tareas: [],
      texto: "",
      editando: false,
      select: -1
    };
  },

  methods: {
    agregar_emoji(caracter) {
      this.texto = this.texto + caracter;
    },
    agregar_tarea() {
      if(this.texto != "") {
        if(this.editando) {
          if(this.select != -1) {
            this.tareas[this.select] = this.texto;
            this.editando = false
          }
        }
        else {
          this.tareas.push(this.texto);
        }
        this.texto = "";
      }
    },
    eliminar_tarea(texto) {
      var index = this.tareas.indexOf(texto);
      if (index > -1) {
        this.tareas.splice(index, 1);
      }
    },
    modificar_tarea(texto) {
      this.select = this.tareas.indexOf(texto);
      this.editando = true;
      this.texto = texto;
    }
  }
};
</script>

<style scoped>
.content {
  width: 30%;
  margin-top: 10px;
  margin-left: 20%;
}

.chat {
  height: 50vh;
  text-align: center;
  border: 1px solid;
  display: grid;
  grid-template-rows: 1fr 8fr 2fr;
  align-items: center;
  background-color: black
}

.emojis {
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  justify-self: center;
}

.campo {
  width: 90%;
  height: 60%;
  margin-top: 10px;
  text-align: center;
  display: grid;
  grid-template-columns: 4fr 1fr;
  justify-self: center;
  grid-gap: 10px;
  margin-bottom: 10px;
}

.campo button {
  box-sizing: border-box;
}

.tareas {
  border: 1px solid;
}

.tareas div{
  width: 90%;
  border: 1px solid;
  margin: 10px auto;
  height: 50px;
}

</style>