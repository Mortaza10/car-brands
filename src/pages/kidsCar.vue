<template>
  <v-container fluid class="kids-page pa-0">

    <div class="hero d-flex align-center justify-center text-center">
      <div class="hero-content">

        <h1 class="text-white text-h2 font-weight-black hero-title">
          {{ $t('kids_hero_title') }}
        </h1>

        <p class="text-grey-lighten-1 mt-3 hero-sub">
          {{ $t('kids_hero_sub') }}
        </p>

      </div>
    </div>

    <v-container class="py-12">
      <h2 class="section-title">{{ $t('mercedes_kids_title') }}</h2>

      <v-row align="center">
        <v-col cols="12" md="6">
          <v-carousel hide-delimiters class="kids-carousel">
            <v-carousel-item src="https://i.pinimg.com/1200x/aa/49/32/aa493286bc793120144c959b2b6327ca.jpg" cover />
          </v-carousel>
        </v-col>

        <v-col cols="12" md="6">
          <p class="text-grey-lighten-1 text-body-1">
            {{ $t('mercedes_kids_text') }}
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="py-12">
      <h2 class="section-title">{{ $t('lamborghini_kids_title') }}</h2>

      <v-row align="center">
        <v-col cols="12" md="6">
          <v-carousel hide-delimiters class="kids-carousel">
            <v-carousel-item src="https://i.pinimg.com/1200x/26/f3/89/26f3893ab7638c5d2010366d6ef95c73.jpg" cover />
          </v-carousel>
        </v-col>

        <v-col cols="12" md="6">
          <p class="text-grey-lighten-1 text-body-1">
            {{ $t('lamborghini_kids_text') }}
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="py-12">
      <h2 class="section-title">{{ $t('bmw_range_kids_title') }}</h2>

      <v-row align="center">
        <v-col cols="12" md="6">
          <v-carousel hide-delimiters class="kids-carousel">
            <v-carousel-item src="https://i.pinimg.com/736x/29/20/3e/29203eebf198bf16a8b91a996120073f.jpg" cover />
            <v-carousel-item src="https://i.pinimg.com/736x/63/15/38/631538b686d80f1cc4446959c5b19f40.jpg" cover />
          </v-carousel>
        </v-col>

        <v-col cols="12" md="6">
          <p class="text-grey-lighten-1 text-body-1">
            {{ $t('bmw_range_kids_text') }}
          </p>
        </v-col>
      </v-row>
    </v-container>

  </v-container>
</template>

<style scoped>
.kids-page {
  background: #050505;
}

.hero {
  height: 40vh;
  background: linear-gradient(135deg, #000000, #1a0000, #b30000);
}

.hero-title {
  letter-spacing: 2px;
  text-shadow: 0 0 20px rgba(255, 26, 26, 0.2);
}

.hero-sub {
  font-size: 16px;
  opacity: 0.8;
}

.section-title {
  font-size: 30px;
  font-weight: 900;
  color: white;
  border-left: 5px solid #ff2d2d;
  padding-left: 12px;
  margin-bottom: 20px;
}

.kids-carousel {
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(255, 0, 0, 0.12);
}

@media (max-width: 600px) {
  .section-title {
    font-size: 22px;
  }

  .hero-title {
    font-size: 32px !important;
  }
}
</style>