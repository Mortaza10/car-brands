<template>
  <transition name="slide-up">
    <v-card
      v-if="showBanner"
      class="cookie-box pa-5"
      elevation="24"
    >
      <div class="d-flex align-start ga-4 flex-wrap">

        <v-icon size="34" color="red-darken-2">
          mdi-cookie
        </v-icon>

        <div class="flex-grow-1">

          <h3 class="text-h6 font-weight-bold text-white mb-2">
            Cookie Preferences Mori
          </h3>

          <p class="text-grey-lighten-1 text-body-2 mb-4">
            We use cookies to enhance your experience, analyze traffic,
            and personalize content for Mori Luxury Brands Cars.
          </p>

          <div class="d-flex ga-3 flex-wrap">

            <v-btn
              class="accept-btn"
              @click="acceptCookies"
            >
              Accept All
            </v-btn>

            <v-btn
              variant="outlined"
              color="white"
              @click="declineCookies"
            >
              Decline
            </v-btn>

          </div>

        </div>

      </div>
    </v-card>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showBanner = ref(false)

onMounted(() => {
  const saved = localStorage.getItem('cookieConsent')

  if (!saved) {
    setTimeout(() => {
      showBanner.value = true
    }, 1000)
  }
})

const acceptCookies = () => {
  localStorage.setItem('cookieConsent', 'accepted')
  showBanner.value = false
}

const declineCookies = () => {
  localStorage.setItem('cookieConsent', 'declined')
  showBanner.value = false
}
</script>

<style scoped>
.slide-up-enter-from + .cookie-box {
  box-shadow: 0 0 0 rgba(0,0,0,0);
}

.slide-up-enter-to .cookie-box {
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}

.cookie-box{
transition: box-shadow 0.5s ease;
  position: fixed;
  bottom: 24px;
  left: 24px;
  right: 24px;
  z-index: 99999;

  max-width: 700px;
  margin: auto;

  background:
  linear-gradient(135deg,#0a0a0a,#141414);

  border:1px solid rgba(255,255,255,.08);
  border-top:2px solid #d40000;

  border-radius:18px;

  backdrop-filter: blur(14px);
}

.accept-btn{
  background:linear-gradient(135deg,#d40000,#7a0000) !important;
  color:white !important;
  font-weight:bold;
}

.accept-btn:hover{
  transform:translateY(-2px);
}

.slide-up-enter-active,
.slide-up-leave-active{
  transition: all .4s ease;
}

.slide-up-enter-from,
.slide-up-leave-to{
  opacity:0;
  transform:translateY(50px);
}

@media(max-width:600px){
  .cookie-box{
    left:12px;
    right:12px;
    bottom:12px;
  }
}

.slide-up-enter-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-up-leave-active {
  transition: all 0.35s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(80px) scale(0.92);
  filter: blur(6px);
}

.slide-up-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(40px) scale(0.96);
  filter: blur(4px);
}
</style>