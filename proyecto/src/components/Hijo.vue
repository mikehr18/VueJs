<template>
    <div>
<span>{{texto}}</span>
<button @click="cambio('nuevo texto')">Cambia Texto</button>
    </div>
</template>

<script>
export default {
    props:{
        texto:{
            type: String
        }

    },
    methods:{
        cambio(text){
               this.$emit 
        }

    }
}
</script>
<style scoped>

</style>