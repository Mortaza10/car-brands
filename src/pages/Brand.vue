<template>
  <v-container
    fluid
    class="brands-page pa-0"
    :class="$i18n.locale === 'da' ? 'rtl-mode' : 'ltr-mode'"
  >
    <div class="hero d-flex align-center justify-center text-center">
      <div>
        <h1 class="text-white text-h3 font-weight-black">{{ $t('brands_hero_title') }}</h1>
        <p class="text-grey-lighten-1 mt-2">
          {{ $t('brands_hero_text') }}
        </p>
      </div>
    </div>

    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6">
          <v-carousel hide-delimiters class="rounded-xl">
            <v-carousel-item src="/src/assets/img/brand/ferrari-1.jpg"></v-carousel-item>
          </v-carousel>
        </v-col>

        <v-col cols="12" md="6">
          <h2 class="section-title">{{ $t('ferrari') }}</h2>
          <p class="text-grey-lighten-1">
            {{ $t('ferrari_text') }}
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6">
          <v-carousel hide-delimiters class="rounded-xl">
            <v-carousel-item src="/src/assets/img/brand/lambo-2.jpg" contain></v-carousel-item>
          </v-carousel>
        </v-col>

        <v-col cols="12" md="6">
          <h2 class="section-title">{{ $t('lamborghini') }}</h2>
          <p class="text-grey-lighten-1">
            {{ $t('lamborghini_text') }}
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6">
          <v-carousel hide-delimiters class="rounded-xl">
            <v-carousel-item src="/src/assets/img/brand/buggati-3.jpg" contain></v-carousel-item>
          </v-carousel>
        </v-col>

        <v-col cols="12" md="6">
          <h2 class="section-title">{{ $t('bugatti') }}</h2>
          <p class="text-grey-lighten-1">
            {{ $t('bugatti_text') }}
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6">
          <v-carousel hide-delimiters class="rounded-xl">
            <v-carousel-item src="/src/assets/img/brand/mclaren-4.jpg" contain></v-carousel-item>
          </v-carousel>
        </v-col>

        <v-col cols="12" md="6">
          <h2 class="section-title">{{ $t('mclaren') }}</h2>
          <p class="text-grey-lighten-1">
            {{ $t('mclaren_text') }}
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6">
          <v-carousel hide-delimiters class="rounded-xl">
            <v-carousel-item src="/src/assets/img/brand/porsche-5.jpg" contain></v-carousel-item>
          </v-carousel>
        </v-col>

        <v-col cols="12" md="6">
          <h2 class="section-title">{{ $t('porsche') }}</h2>
          <p class="text-grey-lighten-1">
            {{ $t('porsche_text') }}
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6">
          <v-carousel hide-delimiters class="rounded-xl">
            <v-carousel-item src="/src/assets/img/brand/rollsroyce-6.jpg" contain></v-carousel-item>
          </v-carousel>
        </v-col>

        <v-col cols="12" md="6">
          <h2 class="section-title">{{ $t('rolls_royce') }}</h2>
          <p class="text-grey-lighten-1">
            {{ $t('rolls_royce_text') }}
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6">
          <v-carousel hide-delimiters class="rounded-xl">
            <v-carousel-item src="/src/assets/img/brand/bently-7.jpg" contain></v-carousel-item>
          </v-carousel>
        </v-col>

        <v-col cols="12" md="6">
          <h2 class="section-title">{{ $t('bentley') }}</h2>
          <p class="text-grey-lighten-1">
            {{ $t('bentley_text') }}
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6">
          <v-carousel hide-delimiters class="rounded-xl">
            <v-carousel-item src="/src/assets/img/brand/benz-8.jpg" contain></v-carousel-item>
          </v-carousel>
        </v-col>

        <v-col cols="12" md="6">
          <h2 class="section-title">{{ $t('mercedes_benz') }}</h2>
          <p class="text-grey-lighten-1">
            {{ $t('mercedes_benz_text') }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style scoped>
.brands-page {
  background: #0b0b0b;
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
  height: 40vh !important;
  background: linear-gradient(135deg, #000000, #1a0000, #b30000) !important;
  text-align: center !important;
}

.section-title {
  color: white;
  font-size: 28px;
  font-weight: 900;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
}
.ltr-mode .section-title {
  border-left: 4px solid #b30000;
  border-right: none;
}

.rtl-mode .section-title {
  border-right: 4px solid #b30000;
  border-left: none;
}

.ltr-mode p {
  text-align: left;
}

.rtl-mode p {
  text-align: right;
}

.v-carousel {
  border-radius: 16px;
  overflow: hidden;
}
</style>