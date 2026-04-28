<template>
  <v-container fluid class="contact-page pa-0">

    <div class="hero d-flex align-center justify-center text-center">
      <div>

        <h1 class="text-white text-h3 font-weight-black">
          {{ $t('contact_title') }}
        </h1>

        <p class="text-grey-lighten-1 mt-3">
          {{ $t('contact_subtitle') }}
        </p>

      </div>
    </div>

    <v-container class="py-12">

      <v-row align="center">

        <v-col cols="12" md="6">
          <v-card class="contact-card pa-6">

            <h2 class="section-title">{{ $t('send_message') }}</h2>

            <v-text-field
              :label="$t('your_name')"
              variant="outlined"
              color="red"
              bg-color="white"
              base-color="white"
              class="mt-4 input-field"
            />

            <v-text-field
              :label="$t('email')"
              variant="outlined"
              color="red"
              bg-color="white"
              base-color="white"
              class="input-field"
            />

            <v-textarea
              :label="$t('message')"
              variant="outlined"
              rows="5"
              color="red"
              bg-color="white"
              base-color="white"
              class="input-field"
            />

            <v-btn class="mt-4 send-btn" block size="large">
              {{ $t('send_btn') }}
            </v-btn>

          </v-card>
        </v-col>

        <v-col cols="12" md="6">

          <div class="info-box">

            <h2 class="section-title">{{ $t('get_in_touch') }}</h2>

            <p class="text-grey-lighten-1 mt-4">
              {{ $t('contact_description') }}
            </p>

            <div class="mt-6 text-white">

              <p><strong>📍 {{ $t('location') }}:</strong> {{ $t('mori_luxury_location') }}</p>
              <p><strong>📞 {{ $t('phone') }}:</strong> {{ $t('phone_number') }}</p>
              <p><strong>📧 {{ $t('email') }}:</strong> {{ $t('email_value') }}</p>

            </div>

            <v-img
              src="https://i.pinimg.com/1200x/55/21/fe/5521fe6059176e6f6df594394fa33e2e.jpg"
              height="220"
              cover
              class="rounded-xl mt-6"
            />

          </div>

        </v-col>

      </v-row>

    </v-container>

    <v-sheet class="final-section py-14 text-center">

      <h2 class="text-white text-h4 font-weight-black">
        {{ $t('final_title') }}
      </h2>

      <p class="text-grey-lighten-1 mt-2">
        {{ $t('final_subtitle') }}
      </p>

      <v-btn class="mt-5 send-btn" to="brand">
        {{ $t('explore_brands') }}
      </v-btn>

    </v-sheet>

  </v-container>
</template>

<style scoped>
.contact-page {
  background: #050505;
}

.hero {
  height: 40vh;
  background: linear-gradient(135deg, #000000, #1a0000, #b30000);
}

.contact-card {
  background: #0f0f0f;
  border-radius: 18px;
  border: 1px solid rgba(255, 0, 0, 0.15);
}

.input-field {
  margin-top: 12px;
}

:deep(.v-field input),
:deep(.v-field textarea) {
  color: #000 !important;
}

:deep(.v-field) {
  background-color: white !important;
  border-radius: 12px;
}

.section-title {
  color: white;
  font-weight: 900;
  border-left: 5px solid #ff2d2d;
  padding-left: 10px;
}

.info-box {
  padding: 10px;
}

.send-btn {
  background: linear-gradient(90deg, #ff1a1a, #b30000) !important;
  color: white !important;
  font-weight: bold;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(255, 0, 0, 0.3);
}

.final-section {
  background: linear-gradient(135deg, #000000, #1a0000, #b30000);
}
</style>