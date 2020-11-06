<template>
    <div>
        <hijo :texto="texto" @cambiotexto="cambio"/>
    </div>
</template>

<script>
import Hijo from "@/components/Hijo.vue"
export default {
    components:{
        Hijo
    },
    data() {
        return {
            texto:"Ejemplo"
        }
    },
    methods: {
        cambio( texto  ){
        this.texto = texto;
        }
    },
    
}
</script>


<style lang="css">
    
</style>