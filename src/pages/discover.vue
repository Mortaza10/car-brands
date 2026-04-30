<template>
  <v-container fluid class="vision-page pa-0"
  :class="$i18n.locale === 'da' ? 'rtl-mode' : 'ltr-mode'"
  >

    <div class="hero d-flex align-center justify-center text-center">
      <div>

        <h1 class="text-h3 font-weight-black text-white">
          {{ $t('vision_title') }}
        </h1>

        <p class="text-grey-lighten-1 mt-3">
          {{ $t('vision_subtitle') }}
        </p>

      </div>
    </div>

    <v-container class="py-12">

      <v-row>

        <v-col cols="12" md="6">
          <v-card class="glass-card pa-6">

            <v-img
              :src="ferrari1"
              height="260"
              cover
              class="rounded-lg"
            />

            <h2 class="section-title mt-5">{{ $t('luxury_cars') }}</h2>

            <p class="text-grey-lighten-1">
              {{ $t('luxury_cars_text') }}
            </p>

          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card class="glass-card pa-6">

            <v-img
              :src="kids1"
              height="260"
              cover
              class="rounded-lg"
            />

            <h2 class="section-title mt-5">{{ $t('kids_cars') }}</h2>

            <p class="text-grey-lighten-1">
              {{ $t('kids_cars_text') }}
            </p>

          </v-card>
        </v-col>

      </v-row>

    </v-container>

    <v-container class="py-10 text-center">

      <h2 class="text-h4 font-weight-black text-white">
        {{ $t('our_vision') }}
      </h2>

      <p class="text-grey-lighten-1 mt-4 mx-auto vision-text">
        {{ $t('our_vision_text') }}
      </p>

    </v-container>

    <v-sheet class="final-section py-16 text-center">

      <h2 class="text-white text-h4 font-weight-black">
        {{ $t('final_vision_title') }}
      </h2>

      <v-btn class="mt-6" to="/brand">
        {{ $t('explore_brands') }}
      </v-btn>

    </v-sheet>

  </v-container>
</template>
<script setup>
  import ferrari1 from '@/assets/img/discover/ferrari1.jpg'
  import kids1 from '@/assets/img/discover/kids1.jpg'
</script>

<style scoped>
.vision-page {
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

.glass-card {
  background: rgba(20, 20, 20, 0.7);
  border: 1px solid rgba(255, 0, 0, 0.1);
  border-radius: 18px;
}

.section-title {
  color: white;
  font-weight: 900;
  padding-left: 10px;
  padding-right: 10px;
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

.vision-text {
  max-width: 700px;
  font-size: 16px;
  line-height: 1.8;
  text-align: center !important;
}

.final-section {
  background: linear-gradient(135deg, #000000, #1a0000, #b30000);
  text-align: center !important;
}

.v-btn {
  background: linear-gradient(90deg, #ff1a1a, #b30000) !important;
  color: white !important;
  font-weight: bold;
}
</style>