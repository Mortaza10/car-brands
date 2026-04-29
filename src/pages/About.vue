<template>
  <v-container fluid class="about-page pa-0"
  :class="$i18n.locale === 'da' ? 'rtl-mode' : 'ltr-mode'"
  >

    <v-sheet class="hero d-flex align-center justify-center text-center">
      <div>
        <h1 class="text-white text-h2 font-weight-black">
          {{ $t('about_mori_title') }}
        </h1>

        <p class="hero-text mt-4">
          {{ $t('about_mori_subtitle') }}
        </p>
      </div>
    </v-sheet>

    <v-container class="py-16">
      <v-row align="center">

        <v-col cols="12" md="6">
          <h2 class="section-title">
            {{ $t('our_company') }}
          </h2>

          <p class="text-grey-darken-2 mt-4">
            {{ $t('our_company_text1') }}
          </p>

          <p class="text-grey-darken-2 mt-4">
            {{ $t('our_company_text2') }}
          </p>
        </v-col>

        <v-col cols="12" md="6">
          <v-img
            src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023"
            height="360"
            cover
            class="rounded-xl elevation-8"
          />
        </v-col>

      </v-row>
    </v-container>

    <v-sheet class="luxury-section py-16">
      <h2 class="text-center text-h4 font-weight-black text-white mb-10">
        {{ $t('luxury_car_collection') }}
      </h2>

      <v-container>
        <v-row>

          <v-col cols="12" md="4">
            <v-card class="card-dark">
              <v-img
                src="https://images.unsplash.com/photo-1542362567-b07e54358753"
                height="240"
                cover
              />
              <v-card-title class="text-white">
                {{ $t('supercars') }}
              </v-card-title>
              <v-card-text class="text-grey-lighten-1">
                {{ $t('supercars_text') }}
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="card-dark">
              <v-img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
                height="240"
                cover
              />
              <v-card-title class="text-white">
                {{ $t('executive_luxury') }}
              </v-card-title>
              <v-card-text class="text-grey-lighten-1">
                {{ $t('executive_luxury_text') }}
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="card-dark">
              <v-img
                src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
                height="240"
                cover
              />
              <v-card-title class="text-white">
                {{ $t('custom_editions') }}
              </v-card-title>
              <v-card-text class="text-grey-lighten-1">
                {{ $t('custom_editions_text') }}
              </v-card-text>
            </v-card>
          </v-col>

        </v-row>
      </v-container>
    </v-sheet>

    <v-container class="py-16">

      <h2 class="text-center text-h4 font-weight-black mb-10 kids-title">
        {{ $t('kids_luxury_collection') }}
      </h2>

      <v-row align="center">

        <v-col cols="12" md="6">
          <v-img
            src="https://i.pinimg.com/736x/b1/14/06/b1140694ce0e2dff556fab2f562a1200.jpg"
            height="350"
            cover
            class="rounded-xl elevation-6"
          />
        </v-col>

        <v-col cols="12" md="6">
          <p class="text-grey-darken-2">
            {{ $t('kids_luxury_text1') }}
          </p>

          <p class="text-grey-darken-2 mt-4">
            {{ $t('kids_luxury_text2') }}
          </p>
        </v-col>

      </v-row>
    </v-container>

    <v-sheet class="footer-quote py-16 text-center">
      <h2 class="text-white text-h4 font-weight-black">
        {{ $t('luxury_has_no_age') }}
      </h2>
      <h5 class="text-grey-lighten-1 mt-3">
        {{ $t('dreams_drive_reality') }}
      </h5>
    </v-sheet>

  </v-container>
</template>

<style scoped>
.about-page {
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
  height: 40vh;
  background:
    linear-gradient(120deg, rgba(0,0,0,0.85), rgba(120,0,0,0.6)),
    url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7");
  background-size: cover;
  background-position: center;
}

.hero-text {
  color: #ddd;
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
}

.section-title {
  font-size: 32px;
  font-weight: 900;
  color: #ffffff;
  padding-left: 12px;
  padding-right: 12px;
}

.ltr-mode .section-title {
  border-left: 5px solid #b30000;
  border-right: none;
}

.rtl-mode .section-title {
  border-right: 5px solid #b30000;
  border-left: none;
}

.ltr-mode p {
  text-align: left;
}

.rtl-mode p {
  text-align: right;
}

.hero,
.footer-quote,
.kids-title {
  text-align: center !important;
}

.luxury-section {
  background: #000;
}

.card-dark {
  background: #141414;
  border-radius: 16px;
  transition: 0.3s;
}

.card-dark:hover {
  transform: translateY(-8px);
}

.kids-title {
  color: white;
  position: relative;
}

.kids-title::after {
  content: "";
  width: 120px;
  height: 3px;
  background: #b30000;
  display: block;
  margin: 10px auto 0;
}

.footer-quote {
  background: linear-gradient(to right, #000, #1a0000);
}
</style>