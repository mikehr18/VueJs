<template>
  <div class="card">
     Card {{id}}
  </div>
</template>

<script>
export default {
  props:{
    id:{
      type: Number,
      required: false,
      default: 10
    }
  },
  data() {
    return {
    
    };
  },

  methods: {
   
  },

  computed: {
    
  }
};
</script>


<style lang="css">
.card{
    width: 100px;
    height: 100px;
    background-color: green;

}
</style>