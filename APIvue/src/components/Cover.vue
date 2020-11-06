<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
     
    >
    <b-carousel-slide
        caption=" 🌟 We are made of start-stuff... "
       >
        <template v-slot:img>
          <img 
            class="d-block w-100"
            width="1024 px"
            height="480 px"
            src="https://apod.nasa.gov/apod/image/1901/chilepan_buer_1400.jpg">
        </template>
      </b-carousel-slide>


     <b-carousel-slide
        caption=" We are a way for the cosmos to know itself. 🌟 ">
        <template v-slot:img>
          <img 
            class="d-block w-100"
            width="1024 px"
            height="480 px"
            src="https://apod.nasa.gov/apod/image/1901/Cuadrantidas30estelasDLopez1024.jpg"
            >
        </template>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      

      <b-carousel-slide
        caption="APOD NASA 🌟"
        text="Uso de la API de la NASA.
        By Mike .-.">
        <template v-slot:img>
          <img 
            class="d-block w-100"
            width="1024 px"
            height="480 px"
            src="https://apod.nasa.gov/apod/image/1901/SH2-308Laubing1024.jpg"
            >
        </template>
      </b-carousel-slide>

    </b-carousel>

  </div>
  

</template>

<script>

  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
        console.log(slide)

        
      },
      onSlideEnd(slide) {
        this.sliding = false
        console.log(slide)
      }
    }
  }
</script>

<style scoped>
#slide{
width: 400;
height: 400;
}
</style>