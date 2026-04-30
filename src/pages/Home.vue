<template>
  <div class="home-page" :class="$i18n.locale === 'da' ? 'rtl-mode' : 'ltr-mode'">
    <div class="hero-video-wrapper">
      <video autoplay muted loop playsinline class="hero-video">
        <source :src="heroVideo" type="video/mp4" />
      </video>

      <div class="hero-overlay d-flex flex-column align-center justify-center text-center">
        <div class="hero-subtitle text-white">
          {{ $t('welcome_to') }}
        </div>

        <div class="hero-title text-red-darken-4">
          {{ $t('mori_luxury_car_brands') }}
        </div>

        <div class="hero-tagline text-grey-lighten-1 mt-4">
          {{ $t('hero_tagline') }}
        </div>
      </div>
    </div>
    <v-container class="py-16">
      <v-row align="center">
        <v-col cols="12" md="6">
          <v-img
            :src="lambo1"
            height="400"
            cover
            class="rounded-xl elevation-10"
          />
        </v-col>

        <v-col cols="12" md="6">
          <h2 class="section-title">
            {{ $t('about_collection') }}
          </h2>

          <p class="text-grey-lighten-1 mt-4">
            {{ $t('about_collection_text1') }}
          </p>

          <p class="text-grey-lighten-1 mt-4">
            {{ $t('about_collection_text2') }}
          </p>

          <router-link to="/about">
            <v-btn class="mt-6">
              {{ $t('know_more') }}
            </v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="py-16">
      <v-row align="center">
        <v-col cols="12" md="6">
          <h2 class="section-title">
            {{ $t('global_presence') }}
          </h2>

          <p class="text-grey-lighten-1 mt-4">
            {{ $t('global_presence_text1') }}
          </p>

          <p class="text-grey-lighten-1 mt-4">
            {{ $t('global_presence_text2') }}
          </p>
        </v-col>

        <v-col cols="12" md="6">
          <v-img :src="global" height="350" cover class="rounded-xl elevation-10" />
        </v-col>
      </v-row>
    </v-container>

    <v-sheet class="dark-section py-16">
      <h2 class="text-center text-h4 font-weight-black mb-10">
        <span class="text-white">{{ $t('luxury_new') }}</span>
        <span class="text-red-darken-4"> {{ $t('brands_cars') }}</span>
      </h2>

      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-card>
              <v-img :src="ferrari3" height="220" cover />
              <v-card-title>{{ $t('ferrari') }}</v-card-title>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card>
              <v-img :src="lambo3" height="220" cover />
              <v-card-title>{{ $t('lamborghini') }}</v-card-title>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card>
              <v-img :src="porsche3" height="220" cover />
              <v-card-title>{{ $t('porsche') }}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-container class="py-16">
      <h2 class="text-center text-h4 font-weight-black mb-10">
        <span class="text-red-darken-4"> {{ $t('brands_cars') }}</span>
        <span class="text-white">{{ $t('luxury') }}</span>
      </h2>

      <v-row align="center">
        <v-col cols="12" md="6">
          <p class="text-grey-lighten-1">
            {{ $t('brands_text1') }}
          </p>

          <p class="text-grey-lighten-1 mt-4">
            {{ $t('brands_text2') }}
          </p>

          <router-link to="brand">
            <v-btn class="mt-6">
              {{ $t('see_all') }}
            </v-btn>
          </router-link>
        </v-col>

        <v-col cols="12" md="6">
          <v-carousel hide-delimiters class="rounded-xl">
            <v-carousel-item :src="maclaren4" cover />
            <v-carousel-item :src="ferrari4" cover />
            <v-carousel-item :src="buggati4" cover />
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="py-16">
      <h2 class="text-center text-h4 font-weight-black mb-10">
        <span class="text-red-darken-4"> {{ $t('kids_cars') }}</span>
        <span class="text-white">{{ $t('luxury') }}</span>
      </h2>

      <v-row align="center">
        <v-col cols="12" md="6">
          <v-carousel hide-delimiters class="rounded-xl">
            <v-carousel-item :src="lambo5" cover />
            <v-carousel-item :src="bmw5" cover />
            <v-carousel-item :src="benz5" cover />
          </v-carousel>
        </v-col>

        <v-col cols="12" md="6">
          <p class="text-grey-lighten-1">
            {{ $t('kids_text1') }}
          </p>

          <p class="text-grey-lighten-1 mt-4">
            {{ $t('kids_text2') }}
          </p>

          <router-link to="/kids-car">
            <v-btn class="mt-6">
              {{ $t('see_all') }}
            </v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-container>

    <v-img :src="car6" height="60vh" cover>
      <div class="final-overlay d-flex flex-column align-center justify-center text-center">
        <h2 class="text-white text-h4 font-weight-black">
          {{ $t('design_to_drive') }}
        </h2>

        <p class="text-grey-lighten-1 mt-3">
          {{ $t('one_brand_one_vision') }}
        </p>

        <v-btn class="mt-6" to="/discover">
          {{ $t('see_more') }}
        </v-btn>
      </div>
    </v-img>
  </div>
</template>
<script setup>
import heroVideo from '@/assets/video/bg.mp4'
import global from '@/assets/img/home/global-2.gif'
import benz5 from '@/assets/img/home/benz5.jpg'
import bmw5 from '@/assets/img/home/bmw5.jpg'
import buggati4 from '@/assets/img/home/buggati4.jpg'
import car6 from '@/assets/img/home/car6.jpg'
import ferrari3 from '@/assets/img/home/ferrari3.jpg'
import ferrari4 from '@/assets/img/home/ferrari4.jpg'
import lambo1 from '@/assets/img/home/lambo1.jpg'
import lambo3 from '@/assets/img/home/lambo3.jpg'
import lambo5 from '@/assets/img/home/lambo5.jpg'
import maclaren4 from '@/assets/img/home/maclaren4.jpg'
import porsche3 from '@/assets/img/home/porsche3.jpg'
</script>
<style scoped>
.hero-video-wrapper {
  position: relative;
  height: 90vh;
  overflow: hidden;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
}

.home-page {
  background: #0b0b0b;
}

.hero-subtitle {
  font-size: 28px;
  letter-spacing: 4px;
  text-transform: uppercase;
  opacity: 0.9;
}

.hero-title {
  font-size: 64px;
  font-weight: 900;
  letter-spacing: 2px;
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
  margin-top: 10px;
}

.hero-tagline {
  font-size: 18px;
  letter-spacing: 3px;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 38px;
  }

  .hero-subtitle {
    font-size: 18px;
  }

  .hero-tagline {
    font-size: 14px;
  }
}

.section-title {
  font-size: 32px;
  font-weight: 900;
  color: white;
  padding-left: 12px;
  padding-right: 12px;
}

.dark-section {
  background: #000;
}

.v-card {
  background: #141414 !important;
  color: white;
  border-radius: 16px;
}

.v-btn {
  background: #ce0f0fdb !important;
  color: white !important;
  font-weight: bold;
}

.v-btn:hover {
  background: #c81e3a !important;
}

.final-overlay {
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.ltr-mode {
  direction: ltr;
  text-align: left;
}

.rtl-mode {
  direction: rtl;
  text-align: right;
}

.ltr-mode .section-title {
  border-left: 4px solid #ce0f0fdb;
  border-right: none;
}

.rtl-mode .section-title {
  border-right: 4px solid #ce0f0fdb;
  border-left: none;
}

.rtl-mode p {
  text-align: right;
}

.ltr-mode p {
  text-align: left;
}
</style>