<template>
  <v-img
    src="https://i.pinimg.com/1200x/2f/b9/e7/2fb9e727fa912717d0c654fb096678e4.jpg"
    width="100%"
  >
  <p class="text-center text-white text-display-large">Welcome to Our Car Brands</p>  
</v-img>
  <v-row>
    <v-col cols="6">
      <v-img
        src="https://i.pinimg.com/736x/94/36/ae/9436ae78bcbd280a43d54bebbc4db59a.jpg"
        alt="car"
        class="rounded-xl ml-5 align-center mt-10 w-100"
        max-width="600"
      >
      </v-img>
    </v-col>
    <v-col class="pa-8">
      <p class="text-display-medium ma-0 font-weight-bold deliver_color">
        About Our Luxury Car Collection
      </p>
      <p class="text-title-medium text-grey-darken-1">
        We bring together a curated selection of the world’s most iconic luxury car brands, representing the highest level of automotive design, performance, and innovation. Our focus is on showcasing legendary names that define speed, style, and engineering excellence.
      </p>
      <p class="text-title-medium text-grey-darken-1">
        Each brand we present reflects a unique spirit of the automotive world—from precision and comfort to extreme performance and bold design. Together, they represent a lifestyle of luxury, power, and passion for cars that inspire enthusiasts around the world.
      </p>
      <v-btn class="text-uppercase font-weight-bold rounded-lg" size="x-large" color="indigo"
        >Know More</v-btn
      >
    </v-col>
  </v-row>
  <v-row>
    <v-col col="6" class="pa-8 ml-10">
      <p class="text-display-small ma-0 font-weight-bold deliver_color"></p>
      <p class="text-title-large text-grey-darken-1">
        he global presence of our luxury car brands is built on innovation, performance, and design excellence. Each brand focuses on advanced engineering to create powerful and stylish cars.
      </p>
      <p class="text-title-large text-grey-darken-1">
          We export to 4 continents and more than 40 countries, including Europe, North America, Asia, and the Middle East, delivering a world-class luxury driving experience.
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
      <v-carousel hide-delimiters class="ma-5" style="border-radius:20px; overflow:hidden;">
        <v-carousel-item
          src="https://i.pinimg.com/1200x/77/71/7b/77717bcab0f2ddeffbbf8c58049c14f8.jpg"
          alt="ferrari"
          contain
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="https://i.pinimg.com/1200x/40/d1/ce/40d1cebcca2aae2e8789fd0536a4f693.jpg"
          alt="lambo"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="https://i.pinimg.com/1200x/99/f7/5c/99f75c6303d5ba08eef9c4205c6ba846.jpg"
          alt="porsche"
          contain
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="https://i.pinimg.com/1200x/1a/5a/2a/1a5a2a42167c80ca05effddc592fd420.jpg"
          alt="mclaren"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="https://i.pinimg.com/1200x/e4/88/53/e48853dda8e9f92ff88e66426649370d.jpg"
          alt="buggati"
          cover
        ></v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col class="pa-9 mt-10 ml-10">
      <p class="text-display-medium ma-0 font-weight-bold deliver_color">Our Luxury Car Brands</p>
      <p class="text-title-medium text-grey-darken-1">
        We showcase five of the most iconic luxury car brands in the world. Ferrari is known for its racing heritage and timeless Italian design, while Lamborghini stands out with bold, aggressive styling and extreme performance. Porsche combines precision engineering with everyday usability and sportiness.
      </p>
      <p class="text-title-medium text-grey-darken-1">
        On the other hand, McLaren focuses on cutting-edge technology and lightweight supercars built for speed. Bugatti represents the peak of luxury and power, creating some of the fastest and most exclusive cars ever made.
      </p>
      <v-btn class="text-uppercase font-weight-bold rounded-lg" size="large" color="indigo"
        >See All</v-btn
      >
    </v-col>
  </v-row>
  <div class="mt-16">
    <v-img src="https://i.pinimg.com/1200x/55/21/fe/5521fe6059176e6f6df594394fa33e2e.jpg"
    width="100%"
    >
    </v-img>
    <v-row no-gutters class="button-container">
      <v-col cols="6" class="pa-0 button-col">
        <v-img
          class="button-image"
          style="margin-top: -21%"
          height="180"
          src="https://agroschio.agr.br/wp-content/uploads/2022/11/ewewe.png"
        ></v-img>
        <v-btn
          width="100%"
          flat
          style="background-color: #ea425b"
          height="80%"
          class="rounded-s-xl text-white text-headline-small button-left"
          >Luxury Sports Cars</v-btn
        >
      </v-col>
      <v-col cols="6" class="pa-0 button-col">
        <v-img
          class="button-image"
          style="margin-top: -21%"
          height="180"
          src="https://agroschio.agr.br/wp-content/uploads/2022/11/divertidamaca.png"
        ></v-img>
        <v-btn
          width="100%"
          height="80%"
          flat
          style="background-color: #ea425b"
          class="text-white rounded-e-xl text-headline-small button-right"
          >Affordable Sports Cars</v-btn
        >
      </v-col>
    </v-row>
  </div>
  <div class="mb-0">
    <p class="text-display-medium mb-0 text-center font-weight-bold text-grey-darken-3">
      THE BRANDS FOR CHILDREN'S FUN
    </p>
    
    <div class="brands-bg-section" :style="{ backgroundImage: `url(${bgImage})` }">
          <v-col>
          <v-img
          src="https://agroschio.agr.br/wp-content/uploads/2022/10/Group-437.png"
          class="left-image"
          ></v-img>
        </v-col>
        <v-col>

          <v-img
          src="https://agroschio.agr.br/wp-content/uploads/2022/10/Group-325.png"
          class="center-image"
          ></v-img>
        </v-col>
        <v-col>

          <v-img
          src="https://agroschio.agr.br/wp-content/uploads/2022/10/Group-438.png"
          class="right-image"
          ></v-img>
        </v-col>
      </div>
  </div>
      <v-row>
        <v-col class="pa-9 mt-10 ml-10">
          <p class="text-display-medium ma-0 font-weight-bold deliver_color">Our Luxury Kids Car Brands</p>
          <p class="text-title-medium text-grey-darken-1">
            We present luxury kids car brands inspired by Mercedes-Benz, BMW, Range Rover, Bentley, and Lamborghini, bringing iconic automotive design into fun and stylish ride-on vehicles for children.
          </p>
          <p class="text-title-medium text-grey-darken-1">
            Each brand combines safety, comfort, and entertainment, offering a unique driving experience that reflects the elegance and performance of real luxury cars.
          </p>
          <v-btn class="text-uppercase font-weight-bold rounded-lg" size="large" color="indigo"
            >See All</v-btn
          >
        </v-col>
        <v-col cols="6">
          <v-carousel hide-delimiters class="ma-5" style="border-radius:20px; overflow:hidden;">
        <v-carousel-item
          src="https://i.pinimg.com/736x/39/99/3f/39993f7e406ab7b4398aeeaa52cc47b3.jpg"
          alt="Mercedes-Benz"
          contain
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="https://i.pinimg.com/736x/cf/31/ed/cf31edc4b038c48a028e1538a8b9a0ef.jpg"
          alt="BMW"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="https://i.pinimg.com/1200x/8d/c1/91/8dc191458bea6c6a99d678b5690dbbce.jpg"
          alt="range rover"
          contain
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="https://i.pinimg.com/1200x/16/17/eb/1617eb4f1bf8e728467171ba101af46b.jpg"
          alt="bently"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="https://i.pinimg.com/1200x/b7/0a/6e/b70a6e78867368c3b53761254cc43837.jpg"
          alt="lamborghini"
          cover
        ></v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
  <div>
    <v-img
      :src="bgImg"
    >
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="5" class="">
        <div class="pa-5">
          <p class="text-display-medium ma-0 font-weight-bold text-white">From Design to Drive Experience</p>
          <div style="width:350px;">
            <p class="text-title-medium text-white pt-5">
             We bring together the world of luxury cars and kids ride-on vehicles, inspired by iconic brands like Mercedes-Benz, BMW, Range Rover, Bentley, and Lamborghini, combining real automotive design with playful innovation.
            </p>
        </div>

      <v-btn
              class="text-uppercase font-weight-bold mb-3 rounded-lg mt-auto text-white"
              size="large"
              style="background-color: #ea425b;"
              >
              See More
            </v-btn>
          </div>
          </v-col>
    </v-row>
  </v-img>
  </div>
  <div>
     <v-img
        :src="bgBanner"
        height="500"
        cover
>
  <div
    class="fill-height d-flex flex-column justify-center align-start text-white px-6 px-sm-12 px-md-16"
    style="gap:20px; max-width:700px;"
  >
    <p class="text-center ms-md-16">#InLoveWithBrandCars</p>
    <div class="d-flex ga-3 ga-md-5 ms-md-5">

      <v-btn icon variant="text" href="https://instagram.com" target="_blank">
        <v-icon size="38" color="pink-darken-1">mdi-instagram</v-icon>
      </v-btn>

      <v-btn icon variant="text" href="https://facebook.com" target="_blank">
        <v-icon size="42" color="blue">mdi-facebook</v-icon>
      </v-btn>

      <v-btn icon variant="text" href="https://linkedin.com" target="_blank">
        <v-icon size="40" color="light-blue">mdi-linkedin</v-icon>
      </v-btn>

      <v-btn icon variant="text" href="https://youtube.com" target="_blank">
        <v-icon size="42" color="red">mdi-youtube</v-icon>
      </v-btn>

    </div>
  </div>
</v-img>
  </div>
</template>

<script setup>
const bgImage =
  "https://agroschio.agr.br/wp-content/uploads/2022/10/Vector-7-2.png";
const bgImg = 'https://i.pinimg.com/1200x/fe/05/58/fe055827e454608f0d9db9e74c2fdc42.jpg'
const bgBanner = 'https://i.pinimg.com/736x/11/bf/e4/11bfe4e6cba59e4f53f78706d9385667.jpg'
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
  width: 100vw;
  height: 73vw;
  display: flex;
}

.center-image{
  margin-top:65%;
  height:80%;
}

.right-image{
  margin-top:40%;
  height:80%;
}

.left-image{
  margin-top:30%;
  height:80%
}
</style>