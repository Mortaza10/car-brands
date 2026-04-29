<template>
  <v-container fluid class="contact-page pa-0"
  :class="$i18n.locale === 'da' ? 'rtl-mode' : 'ltr-mode'"
  >

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
              color="red"
              bg-color="white"
              variant=solo
              base-color="white"
              class="mt-4 input-field"
            />

            <v-text-field
              :label="$t('email')"
              color="red"
              variant=solo
              bg-color="white"
              base-color="white"
              class="input-field text-decoration-none"
            />

            <v-textarea
              :label="$t('message')"
              rows="5"
              color="red"
              variant=solo
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

            <div class="mt-6 text-white" :class="$i18n.locale === 'da' ? 'text-right' : ''">

              <p class="address"><strong>📍 {{ $t('location') }}:</strong> {{ $t('mori_luxury_location') }}</p>
              <p class="address"><strong>📞 {{ $t('phone') }}:</strong> {{ $t('phone_number') }}</p>
              <p class="address"><strong>📧 {{ $t('email') }}:</strong> {{ $t('email_value') }}</p>

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

      <h4 class="text-grey-lighten-1 mt-2">
        {{ $t('final_subtitle') }}
      </h4>

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

/* English */
.ltr-mode {
  direction: ltr;
  text-align: left;
}

/* Dari */
.rtl-mode {
  direction: rtl;
  text-align: right;
}

/* Hero */
.hero {
  height: 40vh;
  background: linear-gradient(135deg, #000000, #1a0000, #b30000);
  text-align: center !important;
}

/* Card */
.contact-card {
  background: #0f0f0f;
  border-radius: 18px;
  border: 1px solid rgba(255, 0, 0, 0.15);
}

/* Inputs */
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

/* Title */
.section-title {
  color: white;
  font-weight: 900;
  padding-left: 10px;
  padding-right: 10px;
}

/* English border */
.ltr-mode .section-title {
  border-left: 5px solid #ff2d2d;
  border-right: none;
}

/* Dari border */
.rtl-mode .section-title {
  border-right: 5px solid #ff2d2d;
  border-left: none;
}

/* Paragraphs */
.ltr-mode p {
  text-align: left;
}

.rtl-mode p {
  text-align: right;
}

/* Better RTL inputs */
.rtl-mode :deep(.v-field input),
.rtl-mode :deep(.v-field textarea) {
  text-align: right;
}

/* Info */
.info-box {
  padding: 10px;
}

/* Button */
.send-btn {
  background: linear-gradient(90deg, #ff1a1a, #b30000) !important;
  color: white !important;
  font-weight: bold;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(255, 0, 0, 0.3);
}

/* Final section */
.final-section {
  background: linear-gradient(135deg, #000000, #1a0000, #b30000);
  text-align: center !important;
}
/* Fix Vuetify text fields for Dari RTL */
.rtl-mode :deep(.v-field__input) {
  direction: rtl !important;
  text-align: right !important;
  justify-content: flex-end !important;
}

.rtl-mode :deep(textarea) {
  direction: rtl !important;
  text-align: right !important;
}

.rtl-mode :deep(input) {
  direction: rtl !important;
  text-align: right !important;
}

/* Label move right */
.rtl-mode :deep(.v-label) {
  right: 16px !important;
  left: auto !important;
  transform-origin: top right !important;
  text-align: right !important;
}

html[dir="rtl"] .address{
  direction: rtl;
  text-align: right;
  unicode-bidi: embed;
}

html[dir="rtl"] .address strong{
  margin-left: 6px;
}

html[dir="rtl"] .address span{
  direction: ltr;
  unicode-bidi: bidi-override;
  display: inline-block;
}
</style>