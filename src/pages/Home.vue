<template>
  <v-img
    src="https://i.pinimg.com/736x/8f/cf/56/8fcf56b9650e598c5f83af747fa989e9.jpg"
    width="100%"
  ></v-img>
  <v-row>
    <v-col cols="6">
      <v-img
        src="https://agroschio.agr.br/wp-content/uploads/2022/10/Mask-group.jpg"
        alt="car"
        max-width="950"
        class="w-100"
      >
      </v-img>
    </v-col>
    <v-col class="pa-9 mt-3 ml-10">
      <p class="text-display-medium ma-0 font-weight-bold deliver_color">
        We delivery health and test to the world.
      </p>
      <p class="text-title-medium text-grey-darken-1">
        Corresponding to 22% of brazilian apple production and commercialization on the Domestic
        Market, the fruit is offered throughout the national territory 12 months per year, in
        addition to the economic importance of the company in the regions where it operates.
      </p>
      <p class="text-title-medium text-grey-darken-1">
        This means that Schio apples provide taste and health for the lives of millions of people
        worldwide.
      </p>
      <v-btn class="text-uppercase font-weight-bold rounded-lg" size="x-large" color="indigo"
        >Know More</v-btn
      >
    </v-col>
  </v-row>
  <v-row>
    <v-col col="6" class="pa-9 mt-3 ml-10">
      <p class="text-display-medium ma-0 font-weight-bold deliver_color"></p>
      <p class="text-title-medium text-grey-darken-1">
        Schio Group’s growth in the world market over the past 15 years is the result of an intense
        export strategy and precisely focused on expanding its investment in technology and the new
        cultivars.
      </p>
      <p class="text-title-medium text-grey-darken-1">
        Schio apples are recognized for their quality and taste, being exported to more than 40
        countries spread across Europe, Asia, Middle East and Central America.
      </p>
    </v-col>
    <v-col cols="6">
      <v-img
        src="https://agroschio.agr.br/wp-content/uploads/2022/11/mapa-azul-ingles.gif"
        alt="car"
        max-width="950"
        class="w-100"
      >
      </v-img>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="6">
      <v-carousel hide-delimiters>
        <v-carousel-item
          src="https://agroschio.agr.br/wp-content/uploads/2022/12/Group-408.png"
          contain
        ></v-carousel-item>

        <v-carousel-item
          src="https://agroschio.agr.br/wp-content/uploads/2022/12/Group-407.png"
          contain
        ></v-carousel-item>

        <v-carousel-item
          src="https://agroschio.agr.br/wp-content/uploads/2022/12/Group-410.png"
          contain
        ></v-carousel-item>

        <v-carousel-item
          src="https://agroschio.agr.br/wp-content/uploads/2022/12/Group-409.png"
          contain
        ></v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col class="pa-9 mt-10 ml-10">
      <p class="text-display-medium ma-0 font-weight-bold deliver_color">Our Apples</p>
      <p class="text-title-medium text-grey-darken-1">
        We planted 4 different types of apples: Fuji, Gala, Cripps Pink and Granny Smith.
      </p>
      <p class="text-title-medium text-grey-darken-1">
        Each variety with a unique flavor and texture that stand out for their qualities and
        puculiarities.
      </p>
      <v-btn class="text-uppercase font-weight-bold rounded-lg" size="large" color="indigo"
        >See All</v-btn
      >
    </v-col>
  </v-row>
  <div class="mt-16">
    <v-img src="https://agroschio.agr.br/wp-content/uploads/2022/11/Container-home-ingles.png">
    </v-img>
    <v-row no-gutters class="button-container">
      <v-col cols="6" class="pa-0 button-col">
        <v-img
          class="button-image"
          style="margin-top: -21%"
          height="180"
          src="https://agroschio.agr.br/wp-content/uploads/2022/11/ewewe.png"
        ></v-img>
        <router-link class="relative" rounded="0">
          <v-btn
            width="100%"
            flat
            style="background-color: #ea425b"
            height="80%"
            class="rounded-s-xl text-white text-headline-small button-left"
            >RECIPES</v-btn
          >
        </router-link>
      </v-col>
      <v-col cols="6" class="pa-0 button-col">
        <v-img
          class="button-image"
          style="margin-top: -21%"
          height="180"
          src="https://agroschio.agr.br/wp-content/uploads/2022/11/divertidamaca.png"
        ></v-img>
        <router-link class="relative">
          <v-btn
            width="100%"
            height="80%"
            flat
            style="background-color: #ea425b"
            class="text-white rounded-e-xl text-headline-small button-right"
            >Fun Apple</v-btn
          >
        </router-link>
      </v-col>
    </v-row>
  </div>
  <div class="ma-16">
    <p class="text-display-medium text-center font-weight-bold text-grey-darken-3">
      THE BRANDS FOR CHILDREN'S FUN
    </p>
    <div class="brands-bg-section">
      <v-row class="d-flex justify-center align-center">
        <v-col cols="4">
          <v-img
            src="https://agroschio.agr.br/wp-content/uploads/2022/10/Group-437.png"
            class="h-auto w-25"
          ></v-img>
        </v-col>
        <v-col cols="4">
          <v-img
            src="https://agroschio.agr.br/wp-content/uploads/2022/10/Group-437.png"
            class="h-auto w-25"
          ></v-img>
        </v-col>
        <v-col cols="4">
          <v-img
            src="https://agroschio.agr.br/wp-content/uploads/2022/10/Group-437.png"
            class="h-auto w-25"
          ></v-img>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
const bgImage = 'https://agroschio.agr.br/wp-content/uploads/2022/10/Vector-7-2.png'
const bgImg = 'https://agroschio.agr.br/wp-content/uploads/2022/10/Group-439.png'
const bgBanner = 'https://agroschio.agr.br/wp-content/uploads/2022/09/banner-foto-editada-min.png'
</script>

<style scoped>
.deliver_color {
  color: #333333;
}

.button-left,
.button-right {
  border: none !important;
  box-shadow: none !important;
}
.button-left {
  border-bottom-right-radius: 0px !important;
  border-top-right-radius: 0px !important;
}
.button-right {
  border-bottom-left-radius: 0px !important;
  border-top-left-radius: 0px !important;
}
.button-left:hover {
  color: rgb(133, 222, 133);
}
.button-right:hover {
  color: rgb(133, 222, 133);
}

.button-container {
  position: relative;
}

.button-col {
  position: relative;
}

.button-image {
  position: relative;
  width: 100%;
}

.button-col .v-btn {
  position: relative;
  z-index: 1;
}

@media (max-width: 960px) {
  .button-col .v-img {
    height: 120px !important;
  }

  .button-col .v-btn {
    height: 80px !important;
    font-size: 14px;
  }
}

@media (max-width: 600px) {
  .button-col .v-img {
    height: 80px !important;
  }

  .button-col .v-btn {
    height: 60px !important;
    font-size: 12px;
  }
}
.brands-bg-section {
  width: 100%;
  min-height: 200px;
  background-image: url('https://agroschio.agr.br/wp-content/uploads/2022/10/Vector-7-2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}

@media (max-width: 960px) {
  .brands-bg-section {
    padding: 1rem 0;
    min-height: 120px;
  }
}

@media (max-width: 600px) {
  .brands-bg-section {
    padding: 0.5rem 0;
    min-height: 80px;
  }
}
</style>