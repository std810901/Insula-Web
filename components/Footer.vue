<template>
  <div>
    <div id="footer_block" class="footer_block" :class="footerBlockClass">
      <img v-if="useUniverseImg" class="universe" src="~assets/images/img-footer.svg" width="100%" />
      <div class="container-fluid g-0">
        <div class="row">
          <div class="col-12">
            <div class="title">{{ $t('contactUsFooter') }}</div>
            <!-- <div
              class="title"
              data-en="Let’s Connect"
              data-zh="聯繫我們"
              data-lang-set
            ></div> -->
          </div>
          <div class="col-12">
            <div class="contact_us">
              <a href="mailto:marketing@talfin.ai"
                ><span>marketing@talfin.ai</span></a
              >
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="logo">
              <a href="/">
                <img
                  id="footer_brand_img"
                  src="~assets/images/logo_insula_en_ko.svg"
                />
              </a>
            </div>
          </div>
          <div class="col-lg-6 col-12 d-flex flex-column-reverse">
            <div id="copy_right" class="copy_right">
              ©2021 Insula •
              <a
                id="privacy-link"
                href="javascript:;"
                data-bs-toggle="modal"
                data-bs-target="#privacyModal"
                style="color: unset"
                >Privacy Policy<br class="d-block d-sm-none"
              /></a>
              Powered by
              <a id="talfinLink" target="_blank" style="color: unset" :href="getTalfinLink">Talfin</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Policy -->
    <div
      id="privacyModal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="privacyModal"
      aria-hidden="true"
    >
      <div
        class="
          modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl
        "
      >
        <div class="modal-content">
          <div class="modal-header" style="border-bottom: unset">
            <span class="title">{{ $t('privacyPolicy') }}</span>
            <!-- <span
              class="title"
              data-en="Privacy Policy"
              data-zh="隱私權政策"
              data-lang-set
            ></span> -->
            <button
              type="button"
              class="btn-close m-0"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div
            class="modal-body"
            :data-en="privacyPolicyEN"
            :data-zh="privacyPolicyTW"
            data-lang-set
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { privacyPolicyEN } from '../assets/html-file/privacyPolicyEN'
import { privacyPolicyTW } from '../assets/html-file/privacyPolicyTW'
export default {
  data() {
    return {
      privacyPolicyEN,
      privacyPolicyTW,
      talfinLink: {
        zh: 'https://www.talfin.ai/',
        en: 'https://www.talfin.ai/en/homepage/'
      }
    }
  },
  created () {
    // console.log(footerapi)
  },
  computed: {
    ...mapState('i18nLang', {
      languageSetting: state => state.lang,
    }),
    ...mapState('classMapping', {
      footerBlockClass: state => state.footerBlockClass,
    }),
    ...mapState('enableImgMapping', {
      useUniverseImg: state => state.useUniverseImg
    }),
    // getMt0Class () {
    //   // console.log('設定mt-0')
    //   if (this.notUseMt0ClassPaths.includes(this.$route.path)) return ''
    //   return 'mt-0'
    // },
    // getUniverseImg () {
    //   console.log('前端決定顯示是否顯示圖片')
    //   if (this.$store.state.showUniverseImgPaths.includes(this.$route.path)) return true
    //   return false
    // },
    getTalfinLink () {
      switch (this.languageSetting) {
        case 'zh': return this.talfinLink.zh
        case 'en': return this.talfinLink.en
        default: return this.talfinLink.en
      }
    }
  }
}
</script>

<style></style>
