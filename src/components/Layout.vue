<template>
  <v-app>

    <!-- ================= NAVBAR ================= -->
    <v-app-bar
      app
      fixed
      elevate-on-scroll
      scroll-behavior="elevate"
      height="78"
      class="Mori-navbar px-6"
    >

      <!-- LOGO -->
      <div class="d-flex align-center ga-3">
        <router-link to="/">
          <v-img
            :src="logo"
            width="260"
            height="220"
            cover
          />
        </router-link>
      </div>

      <v-spacer />

      <!-- DESKTOP MENU -->
      <div class="d-none d-md-flex ga-2">

        <router-link to="/">
          <v-btn variant="text" :class="{ 'active-link': route.path === '/' }" class="nav-link">{{ $t('home') }}</v-btn>
        </router-link>

        <router-link to="/about">
          <v-btn variant="text"  :class="{ 'active-link': route.path === '/about' }" class="nav-link">{{ $t('about') }}</v-btn>
        </router-link>

        <router-link to="/brand">
          <v-btn variant="text" :class="{ 'active-link': route.path === '/brand' }" class="nav-link">{{ $t('brands') }}</v-btn>
        </router-link>

        <router-link to="/kids-car">
          <v-btn variant="text" :class="{ 'active-link': route.path === '/kids-car' }" class="nav-link">{{ $t('kidsBrands') }}</v-btn>
        </router-link>

        <router-link to="/contact">
          <v-btn variant="text"  :class="{ 'active-link': route.path === '/contact' }" class="nav-link">{{ $t('contact') }}</v-btn>
        </router-link>

      </div>

      <v-spacer />
      <div class="d-none d-md-flex">
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" class="lang-btn text-white">

            <span v-if="selectedLang === 'en'" class="fi fi-us"></span>
            <span v-else-if="selectedLang === 'es'" class="fi fi-es"></span>
            <span v-else class="fi fi-af"></span>

            <v-icon size="18" class="ml-3">mdi-chevron-down</v-icon>

          </v-btn>
        </template>

        <v-list class="lang-menu">

          <v-list-item
            :class="{ activeLang: selectedLang === 'en' }"
            @click="changeLanguage('en')"
          >
            <v-list-item-title class="d-flex justify-center align-center"><span class="fi fi-us"></span></v-list-item-title>
          </v-list-item>

          <v-list-item
            :class="{ activeLang: selectedLang === 'es' }"
            @click="changeLanguage('es')"
          >
            <v-list-item-title class="d-flex justify-center align-center"><span class="fi fi-es"></span></v-list-item-title>
          </v-list-item>

          <v-list-item
            :class="{ activeLang: selectedLang === 'da' }"
            @click="changeLanguage('da')"
          >
            <v-list-item-title class="d-flex justify-center align-center"><span class="fi fi-af"></span></v-list-item-title>
          </v-list-item>

        </v-list>
      </v-menu>
      </div>
      <v-spacer />

      <v-btn
        class="rounded-pill text-white font-weight-bold px-6 d-none d-md-flex"
        style="background:#d40000;"
        to="/discover"
      >
        {{ $t('discover') }}
      </v-btn>

      <v-app-bar-nav-icon
        class="d-flex d-md-none text-white"
        @click="drawerToggle"
      />

    </v-app-bar>

    <!-- ================= DRAWER ================= -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      class="bg-black"
      location="right"
    >

      <v-list nav class="luxury-menu pa-3">

        <v-list-item to="/" class="luxury-item rounded-xl mb-2">
          <v-list-item-title>{{ $t('home') }}</v-list-item-title>
        </v-list-item>

        <v-list-item to="/about" class="luxury-item rounded-xl mb-2">
          <v-list-item-title>{{ $t('about') }}</v-list-item-title>
        </v-list-item>

        <v-list-item to="/brand" class="luxury-item rounded-xl mb-2">
          <v-list-item-title>{{ $t('brands') }}</v-list-item-title>
        </v-list-item>

        <v-list-item to="/kids-car" class="luxury-item rounded-xl mb-2">
          <v-list-item-title>{{ $t('kidsBrands') }}</v-list-item-title>
        </v-list-item>

        <v-list-item to="/discover" class="luxury-item rounded-xl mb-2">
          <v-list-item-title>{{ $t('discover') }}</v-list-item-title>
        </v-list-item>

        <v-list-item to="/contact" class="luxury-item rounded-xl">
          <v-list-item-title>{{ $t('contact') }}</v-list-item-title>
        </v-list-item>
      </v-list>

        <div class="lang-drawer pa-4">

          <div class="lang-title mb-3">
            Choose Language
          </div>

          <div class="d-flex justify-center ga-4">

            <div
              class="lang-item"
              :class="{ activeLang: selectedLang === 'en' }"
              @click="changeLanguage('en')"
            >
              <span class="fi fi-us"></span>
            </div>

            <div
              class="lang-item"
              :class="{ activeLang: selectedLang === 'es' }"
              @click="changeLanguage('es')"
            >
              <span class="fi fi-es"></span>
            </div>

            <div
              class="lang-item"
              :class="{ activeLang: selectedLang === 'da' }"
              @click="changeLanguage('da')"
            >
              <span class="fi fi-af"></span>
            </div>

          </div>
        </div>

    </v-navigation-drawer>

    <v-main>
      <slot />
    </v-main>

    <v-footer class="Mori-footer text-white px-8">

      <v-container fluid>
        <v-row :class="selectedLang === 'da' ? 'rtl-row' : ''">

          <v-col cols="12" md="4" class="d-flex flex-column" :class="selectedLang === 'da' ? 'align-end text-right' : 'align-start text-left'">
            <v-img :src="logo" height="130" width="230" cover />

            <p class="text-grey-lighten-1">
              {{ $t('built_for_speed') }}
            </p>

            <div class="d-flex ga-3">
              <v-btn icon variant="text" href="https://instagram.com/" target="_blank" rel="noopener noreferrer" > <v-icon color="white">mdi-instagram</v-icon> </v-btn> <v-btn icon variant="text" href="https://facebook.com/" target="_blank" rel="noopener noreferrer" > <v-icon color="white">mdi-facebook</v-icon> </v-btn> <v-btn icon variant="text" href="https://youtube.com/" target="_blank" rel="noopener noreferrer" > <v-icon color="white">mdi-youtube</v-icon> </v-btn> <v-btn icon variant="text" href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" > <v-icon color="white">mdi-linkedin</v-icon> </v-btn> </div>
          </v-col>

          <v-col cols="12" md="3" :class="selectedLang === 'da' ? 'text-right' : ''"> 

            <p class="text-h6 font-weight-bold mb-4">
              {{ $t('quickLinks') }}
            </p>

            <div class="d-flex flex-column ga-2">
              <router-link to="/">
                <span class="footer-link">{{ $t('home') }}</span>
              </router-link>

              <router-link to="/about">
                <span class="footer-link">{{ $t('about') }}</span>
              </router-link>

              <router-link to="/brand">
                <span class="footer-link">{{ $t('brands') }}</span>
              </router-link>

              <router-link to="/kids-car">
                <span class="footer-link">{{ $t('kidsBrands') }}</span>
              </router-link>

              <router-link to="/discover">
                <span class="footer-link">{{ $t('discover') }}</span>
              </router-link>

              <router-link to="/contact">
                <span class="footer-link">{{ $t('contact') }}</span>
              </router-link>
            </div>

          </v-col>

          <v-col cols="12" md="5" class="d-flex flex-column justify-center" :class="selectedLang === 'da' ? 'text-right' : ''">

            <p class="address">
              <strong>📍 {{ $t('location') }}:</strong>
              {{ $t('mori_luxury_location') }}
            </p>
            <p class="address"><strong>📞 {{ $t('phone') }}:</strong> {{ $t('phone_number') }}</p>
            <p class="address"><strong>📧 {{ $t('email') }}:</strong> {{ $t('email_value') }}</p>
          </v-col>

        </v-row>

        <v-divider class="my-6" />

        <div class="text-center text-grey-lighten-1">
          © 2026 Mori Motors
        </div>

      </v-container>

    </v-footer>

  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {useRoute} from 'vue-router'
import { useI18n } from 'vue-i18n'
import logo from '@/assets/img/Mori Logo 2.png'
import 'flag-icons/css/flag-icons.min.css'

const drawer = ref(false)
const route = useRoute()

const drawerToggle = () => {
  drawer.value = !drawer.value
}

const { locale } = useI18n()

const selectedLang = ref('en')

const changeLanguage = (lang) => {
  drawer.value = false
  setTimeout(() => {

    selectedLang.value = lang
    locale.value = lang

    // ✅ SAVE LANGUAGE
    localStorage.setItem('lang', lang)

    if (lang === 'da') {
      document.documentElement.setAttribute('dir', 'rtl')
      document.documentElement.setAttribute('lang', 'da')
    } else {
      document.documentElement.setAttribute('dir', 'ltr')
      document.documentElement.setAttribute('lang', lang)
    }

  }, 200)
}
onMounted(() => {
  const savedLang = localStorage.getItem('lang')

  if (savedLang) {
    selectedLang.value = savedLang
    locale.value = savedLang
  } else {
    selectedLang.value = 'en'
    locale.value = 'en'
  }

  if (selectedLang.value === 'da') {
    document.documentElement.setAttribute('dir', 'rtl')
  } else {
    document.documentElement.setAttribute('dir', 'ltr')
  }
})

</script>

<style scoped>
.Mori-navbar{
background: linear-gradient(to right, #0a0a0a, #151515) !important;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  border-bottom: 2px solid #ac0505;
}

.brand-name{
  letter-spacing: 3px;
}

.nav-link{
  color: white !important;
  font-weight: 600;
  letter-spacing: 1px;
  position: relative;
}

.nav-link:hover{
  color:#ff2b2b !important;
}

.nav-link::after{
  content:'';
  position:absolute;
  left:12px;
  right:12px;
  bottom:8px;
  height:2px;
  background:#d40000;
  transform:scaleX(0);
  transition:0.3s;
}

.nav-link:hover::after{
  transform:scaleX(1);
}

.active-link {
  color: #d40000 !important;
}

.active-link::after {
  transform: scaleX(1) !important;
}

.Mori-footer{
  background: linear-gradient(to right, #0a0a0a, #151515);
  border-top: 2px solid #ac0505;
}

.footer-link{
  color:#ccc;
  text-decoration:none;
  transition:0.3s;
}

.footer-link:hover{
  color:#ff2b2b;
  padding-left:6px;
}

a:-webkit-any-link{
  text-decoration: none;
}

.v-navigation-drawer{
  border-left: 3px solid #ac0505 !important;
  box-shadow: -8px 0 25px rgba(0,0,0,0.45);
  position: relative;
  overflow: hidden !important;
}

.v-navigation-drawer::after{
  content: '';
  position: absolute;
  top: 0;
  left: 3px;
  width: 1px;
  height: 100%;
  background: rgba(255,255,255,0.12);
}

.v-overlay__content {
  z-index: 2500 !important;
}

.luxury-menu{
  background: linear-gradient(to bottom, #050505, #111111);
  height: 100%;
}

.luxury-item{
  color: white !important;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  transition: all 0.35s ease;
  letter-spacing: 1px;
  font-weight: 600;
  overflow: hidden;
  position: relative;
}

.luxury-item::before{
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  height: 100%;
  background: #d40000;
  transform: scaleY(0);
  transition: 0.35s;
}

.luxury-item:hover{
  background: linear-gradient(to right, #1a0000, #0d0d0d);
  color: #ffffff !important;
  transform: translateX(8px);
  border-color: #d40000;
  box-shadow: 0 0 15px rgba(212,0,0,0.35);
}

.luxury-item:hover::before{
  transform: scaleY(1);
}

.luxury-item .v-list-item-title{
  font-size: 15px;
  align-items: center;
}

.v-list-item--active{
  background: linear-gradient(to right, #d40000, #1a0000) !important;
  color: white !important;
  box-shadow: 0 0 15px rgba(212,0,0,0.4);
}

.lang-btn{
  border-radius: 50px;
  padding: 6px 12px !important;
  min-width: auto !important; 
  backdrop-filter: blur(12px);
  transition: 0.5s;
}

.lang-btn:hover{
  background: #d40000;
  box-shadow: 0 0 18px rgba(212,0,0,0.7);
  transform: translateY(-1px);
}

.lang-menu{
  background: linear-gradient(145deg, #0a0a0a, #111);
  border: 1px solid rgba(212,0,0,0.5);
  border-radius: 14px;
  padding: 6px;
}

.lang-menu .v-list-item{
  border-radius: 10px;
  margin: 4px 0;
  transition: 0.5s;
  color: white;
}

.lang-menu .v-list-item:hover{
  background: linear-gradient(90deg, #d40000, #1a0000);
  transform: translateX(6px);
}

.activeLang{
  background: rgba(212,0,0,0.25) !important;
  border-left: 3px solid #d40000;
  box-shadow: 0 0 12px rgba(212,0,0,0.4);
}

.fi{
  font-size: 20px;
}

.rtl-row {
  flex-direction: row-reverse;
}

.lang-drawer {
  text-align: center;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  padding-bottom: 16px;
}

.lang-title {
  color: #ccc;
  font-size: 14px;
  letter-spacing: 2px;
}

.lang-item {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  cursor: pointer;
  background: rgba(255,255,255,0.05);
  transition: 0.3s;
}

.lang-item:hover {
  background: linear-gradient(90deg, #d40000, #1a0000);
  transform: translateY(-2px);
  box-shadow: 0 0 12px rgba(212,0,0,0.4);
}

.activeLang {
  background: rgba(212,0,0,0.3) !important;
  border: 1px solid #d40000;
  box-shadow: 0 0 12px rgba(212,0,0,0.5);
}

html[dir="rtl"] .v-app-bar {
  direction: rtl;
}


html[dir="rtl"] .v-list-item {
  text-align: right;
}

html[dir="rtl"] .nav-link {
  text-align: right;
}

  html[dir="rtl"] .v-navigation-drawer {
    text-align: right;
  }

html[dir="rtl"] .address{
  direction: rtl;
  text-align: right;
  unicode-bidi: embed;
}

/* Kee.address .addresshone/email readable left to right */
html[dir="rtl"] .address strong{
  margin-left: 6px;
}

html[dir="rtl"] .address span,
html[dir="rtl"] .phone-number,
html[dir="rtl"] .email-value{
  direction: ltr;
  unicode-bidi: bidi-override;
  display: inline-block;
}
</style>
