<template>
  <v-container fluid class="brands-page pa-0">
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
            <v-carousel-item
              src="https://i.pinimg.com/1200x/77/71/7b/77717bcab0f2ddeffbbf8c58049c14f8.jpg"
              
            ></v-carousel-item>
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
            <v-carousel-item
              src="https://i.pinimg.com/1200x/40/d1/ce/40d1cebcca2aae2e8789fd0536a4f693.jpg"
              contain
            ></v-carousel-item>
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
            <v-carousel-item
              src="https://i.pinimg.com/1200x/e4/88/53/e48853dda8e9f92ff88e66426649370d.jpg"
              contain
            ></v-carousel-item>
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
            <v-carousel-item
              src="https://i.pinimg.com/1200x/1a/5a/2a/1a5a2a42167c80ca05effddc592fd420.jpg"
              contain
            ></v-carousel-item>
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
            <v-carousel-item
              src="https://i.pinimg.com/1200x/99/f7/5c/99f75c6303d5ba08eef9c4205c6ba846.jpg"
              contain
            ></v-carousel-item>
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
            <v-carousel-item src="https://i.pinimg.com/1200x/eb/dc/db/ebdcdb8c36eb578ddeb9dc16591e2fd0.jpg" contain ></v-carousel-item>
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
            <v-carousel-item
              src="https://i.pinimg.com/1200x/96/c7/f2/96c7f256fda831046a160a232bf37831.jpg"
              contain
            ></v-carousel-item>
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
            <v-carousel-item
              src="https://i.pinimg.com/1200x/29/b1/ef/29b1ef9d44f92987170b202bde94ec3b.jpg"
              contain
            ></v-carousel-item>
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

.hero {
  height: 40vh !important;
  background: linear-gradient(135deg, #000000, #1a0000, #b30000) !important;
}

.section-title {
  color: white;
  font-size: 28px;
  font-weight: 900;
  border-left: 4px solid #b30000;
  padding-left: 10px;
  margin-bottom: 20px;
}

.v-carousel {
  border-radius: 16px;
  overflow: hidden;
}
</style>