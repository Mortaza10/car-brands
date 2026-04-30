<template>
  <v-container
    fluid
    class="kids-page pa-0"
    :class="$i18n.locale === 'da' ? 'rtl-mode' : 'ltr-mode'"
  >
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
      <v-row align="center">
        <v-col cols="12" md="6">
          <v-carousel hide-delimiters class="kids-carousel">
            <v-carousel-item :src="benz1" cover />
          </v-carousel>
        </v-col>

        <v-col cols="12" md="6">
          <h2 class="section-title">{{ $t('mercedes_kids_title') }}</h2>
          <p class="text-grey-lighten-1 text-body-1">
            {{ $t('mercedes_kids_text') }}
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="py-12">
      <v-row align="center">
        <v-col cols="12" md="6">
          <v-carousel hide-delimiters class="kids-carousel">
            <v-carousel-item :src="lambo2" cover />
          </v-carousel>
        </v-col>

        <v-col cols="12" md="6">
          <h2 class="section-title">{{ $t('lamborghini_kids_title') }}</h2>
          <p class="text-grey-lighten-1 text-body-1">
            {{ $t('lamborghini_kids_text') }}
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="py-12">
      <v-row align="center">
        <v-col cols="12" md="6">
          <v-carousel hide-delimiters class="kids-carousel">
            <v-carousel-item :src="bmw3" cover />
            <v-carousel-item :src="rangerover3" cover />
          </v-carousel>
        </v-col>

        <v-col cols="12" md="6">
          <h2 class="section-title">{{ $t('bmw_range_kids_title') }}</h2>
          <p class="text-grey-lighten-1 text-body-1">
            {{ $t('bmw_range_kids_text') }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script setup>
 import benz1 from '@/assets/img/kids/benz1.jpg'
 import bmw3 from '@/assets/img/kids/bmw3.jpg'
 import rangerover3 from '@/assets/img/kids/rangerover3.jpg'
 import lambo2 from '@/assets/img/kids/lambo2.jpg'
</script>

<style scoped>
.kids-page {
  background: #050505;
}

.ltr-mode {
  direction: ltr;
  text-align: left;
}

.rtl-mode {
  direction: rtl;
  text-align: right;
}

.hero {
  height: 40vh;
  background: linear-gradient(135deg, #000000, #1a0000, #b30000);
  text-align: center !important;
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
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 20px;
}

.ltr-mode .section-title {
  border-left: 5px solid #ff2d2d;
  border-right: none;
}

.rtl-mode .section-title {
  border-right: 5px solid #ff2d2d;
  border-left: none;
}

.ltr-mode p {
  text-align: left;
}

.rtl-mode p {
  text-align: right;
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