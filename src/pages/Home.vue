<template>
  <div class="home-page">
    <v-img
      src="https://i.pinimg.com/1200x/2f/b9/e7/2fb9e727fa912717d0c654fb096678e4.jpg"
      height="90vh"
      cover
    >
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
    </v-img>

    <v-container class="py-16">
      <v-row align="center">

        <v-col cols="12" md="6">
          <v-img
            src="https://i.pinimg.com/736x/94/36/ae/9436ae78bcbd280a43d54bebbc4db59a.jpg"
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
          <v-img
            src="https://agroschio.agr.br/wp-content/uploads/2022/11/mapa-azul-ingles.gif"
            height="350"
            cover
            class="rounded-xl elevation-10"
          />
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
              <v-img src="https://i.pinimg.com/1200x/77/71/7b/77717bcab0f2ddeffbbf8c58049c14f8.jpg" height="220" cover />
              <v-card-title>{{$t('ferrari')}}</v-card-title>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card>
              <v-img src="https://i.pinimg.com/1200x/40/d1/ce/40d1cebcca2aae2e8789fd0536a4f693.jpg" height="220" cover />
              <v-card-title>{{$t('lamborghini')}}</v-card-title>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card>
              <v-img src="https://i.pinimg.com/1200x/99/f7/5c/99f75c6303d5ba08eef9c4205c6ba846.jpg" height="220" cover />
              <v-card-title>{{$t('porsche')}}</v-card-title>
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
            <v-carousel-item src="https://i.pinimg.com/1200x/1a/5a/2a/1a5a2a42167c80ca05effddc592fd420.jpg" cover />
            <v-carousel-item src="https://i.pinimg.com/1200x/e4/88/53/e48853dda8e9f92ff88e66426649370d.jpg" cover />
            <v-carousel-item src="https://i.pinimg.com/1200x/77/71/7b/77717bcab0f2ddeffbbf8c58049c14f8.jpg" cover />
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
            <v-carousel-item src="https://i.pinimg.com/736x/39/99/3f/39993f7e406ab7b4398aeeaa52cc47b3.jpg" cover />
            <v-carousel-item src="https://i.pinimg.com/736x/cf/31/ed/cf31edc4b038c48a028e1538a8b9a0ef.jpg" cover />
            <v-carousel-item src="https://i.pinimg.com/1200x/b7/0a/6e/b70a6e78867368c3b53761254cc43837.jpg" cover />
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

    <v-img
      src="https://i.pinimg.com/1200x/fe/05/58/fe055827e454608f0d9db9e74c2fdc42.jpg"
      height="60vh"
      cover
    >
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

<style scoped>
.home-page {
  background: #0b0b0b;
}

.hero-overlay {
  height: 100%;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(2px);
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
  text-shadow: 0 10px 30px rgba(0,0,0,0.8);
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
  border-left: 4px solid #ce0f0fdb;
  padding-left: 12px;
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
  background: rgba(0,0,0,0.6);
}
</style>