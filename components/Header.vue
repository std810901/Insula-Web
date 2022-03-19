<template>
  <div class="header_section" :class="headerSectionClass">
    <div
      v-if="$route.path === '/'"
      id="campaign_header"
      class="campaign_header p-relative"
    >
      <a class="adclose" href="javascript:;" @click="adClose()">
        <img src="~/assets/images/close.png" alt="" />
      </a>
      <div class="container-fluid">
        <div class="row">
          <div class="d-flex align-items-center col-xl-6 col-lg-5 col-md-6 col-sm-7 col-9 img-text-group">
            <img class="ic-bolt" src="~/assets/images/ic_bolt.svg" alt="" />
            <div class="img-text">
              <div class="hash_tag">#RecruitPeopleNotPaper</div>
              <div class="title">別讓履歷框住你的價值，發掘未知的「軟實力」</div>
              <div class="title2">測驗你的職場軟實力！</div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-7 col-md-6 col-sm-5 col-3 pr-0 p-relative">
            <div class="d-flex justify-content-end align-items-end">
              <span class="sub_title">即日起至2022年2月，限時免費測驗中</span>
              <a class="goto9careers" href="/9careers">
                <img src="~/assets/images/bt_gotoevent.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav id="nav_bar" class="navbar navbar-expand-sm nav_bar">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img id="brand_img" :src="getBrandImg" />
        </a>
        <!-- <button
          class="navbar-toggler material-icons"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          menu 
        </button> -->
        <div id="collapse-nav">
          <!-- <a href="/">目前語言設定: {{ languageSetting }}</a> -->
          <!-- <div id="collapse-nav" class="d-sm-flex d-none"> -->
          <a
            v-if="$route.path.includes('9careers')"
            target="_blank"
            href="https://www.facebook.com/%E5%84%AA%E8%81%98%E8%B3%87%E8%A8%8A%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-114793620300109/"
          >
            <img class="img_rwd fb" src="~/assets/images/bt_facebook.svg" alt="" />
          </a>
          <a
            v-if="$route.path.includes('9careers')"
            href="/"
          >
            <img class="img_rwd home" src="~/assets/images/bt_backtohome.svg" alt="" />
          </a>
          <a
            v-if="!$route.path.includes('9careers')"
            class="language_btn"
            href="javascript:;"
            @click="changeLang($store.state.i18nLang.lang)"
          >
            <span>{{ $t('lang') }}</span>
          </a>
          <NuxtLink
            v-if="$route.path === '/'"
            class="request_btn"
            :to="transferPageAndGo($route, 'form')"
          >
            <span>{{ $t('requestDemo') }}</span>
          </NuxtLink>
        </div>
      </div>
    </nav>
    <!-- <div
      id="offcanvasRight"
      class="offcanvas offcanvas-end"
      data-bs-scroll="true"
      tabindex="-1"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">Menu</h5>
      </div>
      <hr />
      <div class="offcanvas-body">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="language_btn nav-link"
              href="javascript:;"
              @click="changeLang()"
            >
              <span data-en="中文" data-zh="English" data-lang-set
                >English</span
              >
            </a>
          </li>
          <li class="nav-item">
            <NuxtLink
            v-if="$route.name !== 'Form'"
            class="request_btn"
            to="/form"
          >
            <span
              data-en="Request demo"
              data-zh="申請試用"
              data-lang-set
            ></span>
          </NuxtLink>
          </li>
        </ul>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState('i18nLang', {
      languageSetting: (state) => state.lang,
    }),
    ...mapState('theme', {
      themeSetting: (state) => state.theme,
    }),
    ...mapState('classMapping', {
      headerSectionClass: state => state.headerSectionClass
    }),
    getBrandImg() {
      if (this.themeSetting === 'hp') {
        return require('../assets/images/logo_Insula_en_light.svg')
      } else {
        switch (this.languageSetting) {
          case 'zh':
            return require('../assets/images/logo_insula_ch.svg')
          case 'en':
            return require('../assets/images/logo_insula_en.svg')
          default:
            return require('../assets/images/logo_insula_en.svg')
        }
      }
    },
  },
  beforeMount() {
    if (localStorage.getItem('lang') !== '') {
      this.setBrowserLang()
    }
  },
  mounted() {
    this.initLang()
    window.addEventListener('scroll', this.scrolling)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrolling)
  },
  methods: {
    adClose() {
      document.getElementById('campaign_header').style = 'display: none'
    },
    setBrowserLang() {
      const usrlang = (
        navigator.language ||
        navigator.userLanguage ||
        navigator.browserLanguage ||
        navigator.systemLanguage ||
        'en'
      ).toLowerCase()
      // const usrlang = 'en'
      if (usrlang.includes('en'))
        this.$store.commit('i18nLang/setLang', 'en')
      else if (usrlang.includes('zh'))
        this.$store.commit('i18nLang/setLang', 'zh')
      else
        this.$store.commit('i18nLang/setLang', 'en')
    },
    transferPageAndGo(route, toGo) {
      switch (this.languageSetting) {
        case 'zh':
          return this.localePath(toGo)
        case 'en':
          return this.localePath(toGo, 'en')
        default:
          return '/'
      }
    },
    updateEmployeeRole(lang) {
      const xhttp = new XMLHttpRequest()

      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          const range = JSON.parse(xhttp.responseText).result
          const selectTag = document.getElementById('jobRole')
          while (selectTag.firstElementChild !== selectTag.lastElementChild) {
            selectTag.removeChild(selectTag.lastElementChild)
          }
          range.forEach((e) => {
            const optionTag = document.createElement('option')
            optionTag.value = e.id
            optionTag.innerHTML = e.description
            selectTag.appendChild(optionTag)
          })
        }
      }
      xhttp.open(
        'GET',
        'https://api-dev.insula.ai/home/get_employee_role',
        true
      )
      xhttp.setRequestHeader('Accept-Language', lang)
      xhttp.send()
    },
    scrolling() {
      if (window.scrollY > 0) {
        document.getElementById('nav_bar').style.backgroundColor = '#f8f5f1cc'
      } else {
        document.getElementById('nav_bar').style.backgroundColor = 'unset'
      }
      if (window.scrollY > 1300) {
        document.getElementById('gotop_btn').style.visibility = 'visible'
        document.getElementById('gotop_btn').style.opacity = 1
      } else {
        document.getElementById('gotop_btn').style.visibility = 'hidden'
        document.getElementById('gotop_btn').style.opacity = 0
      }
      // harry_potter theme
      if (document.getElementById("harry_potter_bgc")) {
        if (window.scrollY > 0) {
        document.getElementById('nav_bar').style.backgroundColor = '#413d46cc'
      } else {
        document.getElementById('nav_bar').style.backgroundColor = 'unset'
      }
      }
    },
    checkIDExist(id) {
      if (document.getElementById(id)) return true
      else return false
    },
    initLang() {
      if (process.client) {
        const lang = this.$store.state.i18nLang.lang
        this.$i18n.locale = lang
        if (lang === 'en') {
          document.querySelectorAll('[data-lang-set]').forEach((element) => {
            element.innerHTML = element.dataset.en
          })
          document.querySelectorAll('[data-placeholder]').forEach((element) => {
            element.placeholder = element.dataset.en
          })
        } else {
          document.querySelectorAll('[data-lang-set]').forEach((element) => {
            element.innerHTML = element.dataset.zh
          })
          document.querySelectorAll('[data-placeholder]').forEach((element) => {
            element.placeholder = element.dataset.zh
          })
        }
      }
    },
    changeLang(lang) {
      if (process.client) {
        if (lang === 'en') {
          this.$store.commit('i18nLang/setLang', 'zh')
          this.$i18n.locale = 'zh'
          localStorage.setItem('lang', 'zh')

          if (this.$route.path === '/form') this.updateEmployeeRole('zh-TW')
          document.querySelectorAll('[data-lang-set]').forEach((element) => {
            element.innerHTML = element.dataset.zh
          })
          document.querySelectorAll('[data-placeholder]').forEach((element) => {
            element.placeholder = element.dataset.zh
          })
        } else if (lang === 'zh') {
          this.$store.commit('i18nLang/setLang', 'en')
          this.$i18n.locale = 'en'
          localStorage.setItem('lang', 'en')

          if (this.$route.path === '/form') this.updateEmployeeRole('en-US')
          document.querySelectorAll('[data-lang-set]').forEach((element) => {
            element.innerHTML = element.dataset.en
          })
          document.querySelectorAll('[data-placeholder]').forEach((element) => {
            element.placeholder = element.dataset.en
          })
        }
      }
    },
  },
}
</script>

<style></style>
