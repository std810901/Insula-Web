<template>
  <div>
    <div id="game_demo_block" class="game_demo_block">
      <div class="container-fluid g-0">
        <div class="row">
          <div class="col-lg-1 col-0"></div>
          <div
            class="
              col-lg-5 col-12
              d-flex
              align-items-center
              justify-content-center
            "
          >
            <div id="game_demo_text">
              <div class="title">{{ $t('heroTitle') }}</div>
              <i18n class="sub_title" path="heroSubtext" tag="div">
                <br />
              </i18n>
              <button
                type="button"
                class="btn demo_btn"
                data-bs-toggle="modal"
                data-bs-target="#gameModal"
              >
                {{ $t('playNow') }}
              </button>
            </div>
          </div>
          <div class="col-lg-6 col-12 g-0">
            <div class="video_preview">
              <img src="~assets/images/img-mobile-ma.svg" alt="" />
              <video
                id="video_preview"
                loop
                muted
                autoplay
                playsinline
                width="100%"
                height="100%"
                :src="getVideoPreview"
              ></video>
            </div>
          </div>
          <div class="col-12"></div>
        </div>
      </div>
    </div>
    <div id="feature_block" class="feature_block">
      <div class="d-block d-lg-none">
        <!-- Slider main container -->
        <div class="swiper">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">
              <div class="feature_box">
                <img src="~assets/images/ic-feature-01.png" class="mx-auto" />
                <i18n class="title" path="findRightGuyTitle" tag="div">
                  <br />
                </i18n>
                <div class="sub_title">{{ $t('findRightGuyText') }}11</div>
                <!-- <div
                  class="title"
                  data-en="Recruit People.<br>Not Paper."
                  data-zh="找對人<br>不是找到人"
                  data-lang-set
                ></div> -->
                <!-- <div
                  class="sub_title"
                  data-en="Evaluating people solely based on past experiences is no longer sufficient. We provide an evidence-centered method to objectively quantify soft skills."
                  data-zh="讓選對人才不只靠經驗法則。我們以實證設計(Evidence-centered design)量化候選人的軟技能(Soft skills)。"
                  data-lang-set
                ></div> -->
              </div>
            </div>
            <div class="swiper-slide">
              <div class="feature_box">
                <img src="~assets/images/ic-feature-02.png" class="mx-auto" />
                <i18n class="title" path="trustTheScienceTitle" tag="div">
                  <br />
                </i18n>
                <div class="sub_title">
                  {{ $t('trustTheScienceTitleText') }}
                </div>
                <!-- <div
                  class="title"
                  data-en="Trust the <br>Science."
                  data-zh="相信科學"
                  data-lang-set
                ></div> -->
                <!-- <div
                  class="sub_title"
                  data-en="Supported by psychometrics and behavioral science, we provide data-driven analyses to help you avoid unconscious bias when making hiring decisions."
                  data-zh="在心理學和行為科學的支持下，我們提供數據驅動的分析，降低招募人才時無意識的偏見。"
                  data-lang-set
                ></div> -->
              </div>
            </div>
            <div class="swiper-slide">
              <div class="feature_box">
                <img src="~assets/images/ic-feature-03.png" class="mx-auto" />
                <i18n class="title" path="qualityIsBetterTitle" tag="div">
                  <br />
                </i18n>
                <div class="sub_title">
                  {{ $t('trustTheScienceTitleText') }}
                </div>
                <!-- <div
                  class="title"
                  data-en="Quality over <br>Quantity."
                  data-zh="質勝於量"
                  data-lang-set
                ></div> -->
                <!-- <div
                  class="sub_title"
                  data-en="High turnover is detrimental. We're here to help you hire right by identifying top talent from the get-go."
                  data-zh="降低流動率，讓我們幫助您慧眼獨具，從一開始辨識頂尖人才，達到正確聘用。"
                  data-lang-set
                ></div> -->
              </div>
            </div>
          </div>
          <!-- If we need pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </div>

      <div class="container-fluid g-0 d-none d-lg-block">
        <div class="row">
          <div class="col-lg-4 col-12">
            <div class="feature_box" style="transition-delay: 0s">
              <img src="~assets/images/ic-feature-01.png" class="mx-auto" />
              <i18n class="title" path="findRightGuyTitle" tag="div">
                <br />
              </i18n>
              <div class="sub_title">{{ $t('findRightGuyText') }}</div>
            </div>
          </div>
          <div class="col-lg-4 col-12">
            <div class="feature_box" style="transition-delay: 0.25s">
              <img src="~assets/images/ic-feature-02.png" class="mx-auto" />
              <i18n class="title" path="trustTheScienceTitle" tag="div">
                <br />
              </i18n>
              <div class="sub_title">{{ $t('trustTheScienceTitleText') }}</div>
            </div>
          </div>
          <div class="col-lg-4 col-12">
            <div class="feature_box" style="transition-delay: 0.5s">
              <img src="~assets/images/ic-feature-03.png" class="mx-auto" />
              <i18n class="title" path="qualityIsBetterTitle" tag="div">
                <br />
              </i18n>
              <div class="sub_title">{{ $t('trustTheScienceTitleText') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="candidates_reached_block">
      <div class="reached_number">
        <h1
          id="candidates_reached_nmumber"
          v-html="candidates_reached_nmumber_HTML"
        ></h1>
      </div>
      <i18n class="text_box" path="candidatesReachedText.template" tag="div">
        <strong>{{ $t('candidatesReachedText.reached') }}</strong>
        <br />
        <br />
        <a href="mailto:marketing@talfin.ai" target="_blank">{{
          $t('candidatesReachedText.contactUs')
        }}</a>
      </i18n>
      <!-- <div
        class="text_box"
        data-en="
          <strong>candidates reached</strong>
          <br>
          Curious as to how our games help optimize
          <br>
          your recruitment process?<a href='mailto:marketing@talfin.ai' target='_blank'>Contact us</a>to learn more.
        "
        data-zh="
          <strong>位候選人加入</strong>
          <br>
          好奇我們的遊戲評測如何最佳化招募流程嗎?
          <br>
          <a href='mailto:marketing@talfin.ai' target='_blank'>聯繫我們</a>了解更多
        "
        data-lang-set
      ></div> -->
    </div>
    <div id="talfin_talent_block" class="talfin_talent_block">
      <div class="container-fluid g-0">
        <div class="row">
          <div class="col-lg-6 col-12">
            <img src="~assets/images/img-science-01.svg" />
          </div>
          <div
            class="
              col-lg-5 col-12
              d-flex
              justify-content-center
              align-items-center
            "
          >
            <i18n class="text_box" path="insulaIntro.template" tag="div">
              <strong>{{ $t('insulaIntro.insula') }}</strong>
            </i18n>
            <!-- <div
              class="text_box"
              data-en="
                <strong>Insula, </strong>
                our game platform, features a portfolio of games measuring skills and abilities such as critical thinking, planning, or working memory. The data extracted from in-game actions are consolidated in an in-depth report detailing a candidate's performance.
              "
              data-zh="
                <strong>Insula </strong>
                具一系列遊戲可衡量技能與能力，例如：批判性思考、計劃能力或工作記憶等。從遊戲中蒐集大量數據，呈現深度分析報告。
              "
              data-lang-set
            >
              <div>
                // <a href="#"><span>our science</span></a>
              </div>
            </div> -->
          </div>
          <div class="col-lg-1 col-0"></div>
        </div>
      </div>
    </div>
    <div id="video_introduce_block" class="video_introduce_block">
      <div class="container-fluid g-0">
        <div class="row">
          <div class="col-12">
            <div class="video_box">
              <iframe
                id="video_insula"
                width="100%"
                height="100%"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                :src="getVideoInsula"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="introduce_block" class="introduce_block">
      <div class="container-fluid g-0">
        <div class="row">
          <div class="col-xxl-2 col-lg-1 col-md-0"></div>
          <div class="col-xxl-5 col-lg-6 col-md-12">
            <div class="text_box">
              <div class="title">{{ $t('measuringUnmeasurable') }}</div>
              <i18n class="sub_title" path="measuringText" tag="div">
                <strong>Insula </strong>
                <div></div>
              </i18n>
              <!-- <div
                class="title"
                data-en="Measuring the Unmeasurable"
                data-zh="洞悉未知"
                data-lang-set
              ></div> -->
              <!-- <div
                class="sub_title"
                data-en="
                  Our games measure skills and abilities that are hard to quantify but are crucial to job performance. Leveraging data science and psychology, we are bridging the gap between actual and perceived job performance.
                "
                data-zh="
                  <strong>Insula </strong> 遊戲可測得難以量化的關鍵技能與能力。運用數據科學和心理學，讓工作適配性不再有落差。
                "
                data-lang-set
              ></div> -->
            </div>
          </div>
          <div class="col-lg-1 col-0"></div>
          <div class="col-lg-2 col-12 d-flex align-items-center">
            <div class="amount_of_game_box">
              <div class="first_box">
                <div class="title">
                  <span id="first_number_animation">0</span><small>+</small>
                </div>
                <i18n class="sub_title" path="gameBasedAssessments">
                  <br />
                </i18n>
                <!-- <div
                  class="sub_title"
                  data-en="Game-Based<br>Assessments"
                  data-zh="遊戲評測"
                  data-lang-set
                ></div> -->
              </div>
              <div class="second_box">
                <div class="third_title">{{ $t('covering') }}</div>
                <!-- <div
                  class="third_title"
                  data-en="COVERING"
                  data-zh="涵蓋"
                  data-lang-set
                ></div> -->
                <div id="second_number_animation" class="title">0</div>
                <i18n class="sub_title" path="competencyAreas">
                  <br />
                </i18n>
                <!-- <div
                  class="sub_title"
                  data-en="Competency<br>Areas"
                  data-zh="項職能領域"
                  data-lang-set
                ></div> -->
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-0"></div>
        </div>
      </div>
    </div>
    <!-- Modal Game -->
    <div
      id="gameModal"
      class="modal fade"
      tabindex="-1"
      data-bs-backdrop="static"
      aria-labelledby="gameModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-fullscreen-md-down">
        <div class="modal-content border-0">
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div class="modal-body">
            <iframe id="minGame" src="" frameborder="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getDiaryReport } from '@/plugins/axios/url/intervieweeApi'
export default {
  data() {
    return {
      candidatesReachedNmumber: null,
      candidates_reached_nmumber_HTML: '',
      introduce_isFirstTime: true,
      candidatesReached_isFirstTime: true,
      videoPreview: {
        zh: 'https://storage.googleapis.com/storage-insula/InsulaCN_0519.mp4',
        en: 'https://storage.googleapis.com/storage-insula/InsulaEN_0519.mp4',
      },
      videoInsula: {
        zh: 'https://www.youtube.com/embed/UB19wn4jmWw',
        en: 'https://www.youtube.com/embed/eOgVOkW--o4',
      },
    }
  },
  computed: {
    ...mapState('i18nLang', {
      languageSetting: (state) => state.lang,
    }),
    getVideoPreview() {
      switch (this.languageSetting) {
        case 'zh':
          return this.videoPreview.zh
        case 'en':
          return this.videoPreview.en
        default:
          return this.videoPreview.en
      }
    },
    getVideoInsula() {
      switch (this.languageSetting) {
        case 'zh':
          return this.videoInsula.zh
        case 'en':
          return this.videoInsula.en
        default:
          return this.videoInsula.en
      }
    },
  },
  fetch() {
    return getDiaryReport().then((res) => {
      this.candidatesReachedNmumber = Number(res.data.result.total) + 1932
      this.candidates_reached_nmumber_HTML = this.numberWithCommas(
        this.candidatesReachedNmumber - 100
      ) // - 100 為了滾動效果
    })
  },
  mounted() {
    // console.log(process.env)
    // console.log(process.env.BASE)
    // console.log(process.env.HOST_NAME)
    // console.log(process.env.BASE_URL)
    document.getElementById('game_demo_text').classList.add('animate')
    window.addEventListener('scroll', this.scrolling)
    window.addEventListener('resize', this.resetAppHeight)
    window.addEventListener('message', (e) => this.closeMessageReceived(e))
    // this.getCandidatesReached()
    this.setModalEventListener()
    this.resetAppHeight()
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      // If we need autoplay
      autoplay: {
        delay: 5000,
      },
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    })
    return swiper
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrolling)
    window.removeEventListener('resize', this.resetAppHeight)
    window.removeEventListener('message', (e) => this.closeMessageReceived(e))
  },
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    animateValue(id, start, end, duration) {
      const range = end - start
      const obj = document.getElementById(id)
      if (range) {
        let current = start
        const increment = 1
        const stepTime = Math.abs(Math.floor(duration / range))
        const timer = setInterval(() => {
          current += increment
          obj.innerHTML = this.numberWithCommas(current)
          if (current >= end) {
            clearInterval(timer)
          }
        }, stepTime)
      } else {
        obj.innerHTML = this.numberWithCommas(end)
      }
    },
    scrolling() {
      // console.log(window.scrollY)
      // console.log(document.getElementById("candidates_reached_nmumber").offsetTop)
      if (
        window.scrollY >
        document.getElementById('talfin_talent_block').offsetTop
      ) {
        if (this.introduce_isFirstTime) {
          this.animateValue('first_number_animation', 0, 10, 1500)
          this.animateValue('second_number_animation', 0, 11, 1500)
          this.introduce_isFirstTime = false
        }
        document
          .getElementById('introduce_block')
          .querySelectorAll('.text_box')
          .forEach((e, k) => {
            e.classList.add('animate')
          })
      }
      if (
        window.scrollY >
        document.getElementById('candidates_reached_nmumber').offsetTop
      ) {
        document
          .getElementById('talfin_talent_block')
          .querySelectorAll('.text_box')
          .forEach((e, k) => {
            e.classList.add('animate')
          })
      }
      if (
        window.scrollY > document.getElementById('feature_block').offsetTop &&
        this.candidatesReached_isFirstTime &&
        this.candidatesReachedNmumber
      ) {
        // 有加 Meet Taipei 1,142 + 過年活動 790 = 1932
        this.animateValue(
          'candidates_reached_nmumber',
          this.candidatesReachedNmumber - 100,
          this.candidatesReachedNmumber,
          1500
        ) // -100 為了滾動效果
        this.candidatesReached_isFirstTime = false
      }
      if (
        window.scrollY > document.getElementById('game_demo_block').offsetTop
      ) {
        document.querySelectorAll('.feature_box').forEach((e, k) => {
          e.classList.add('animate')
        })
      }
    },
    // getCandidatesReached() {
    //   const xhttp = new XMLHttpRequest()
    //   const that = this
    //   xhttp.onreadystatechange = function() {
    //     if (this.readyState === 4 && this.status === 200) {
    //       // responseText: 招募正式環境，遊戲人數(每日更新) + 活動
    //       // 再加 Meet Taipei 1,142 + 過年活動 790 = 1932
    //       const jsonObj = JSON.parse(this.responseText)
    //       that.candidatesReachedNmumber = Number(jsonObj.result.total) + 1932
    //       document.getElementById('candidates_reached_nmumber').innerHTML =
    //         that.numberWithCommas(that.candidatesReachedNmumber - 100) // - 100 為了滾動效果
    //     }
    //   }
    //   switch (location.hostname) {
    //     case 'localhost':
    //       xhttp.open(
    //         'GET',
    //         'https://api-dev.insula.ai/interviewee/get_diary_report',
    //         true
    //       )
    //       break
    //     case 'www-test.insula.ai':
    //       xhttp.open(
    //         'GET',
    //         'https://api-stage.insula.ai/interviewee/get_diary_report',
    //         true
    //       )
    //       break
    //     default:
    //       xhttp.open(
    //         'GET',
    //         'https://api.insula.ai/interviewee/get_diary_report',
    //         true
    //       )
    //       break
    //   }
    //   xhttp.send()
    // },
    closeMessageReceived(e) {
      if (typeof e.data === 'string' && e.data.includes('MG_GameFinish')) {
        const myModalEl = document.getElementById('gameModal')
        const modal = bootstrap.Modal.getInstance(myModalEl)
        modal.hide()
      }
    },
    resetAppHeight() {
      const doc = document.documentElement
      const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i,
      ]
      if (navigator.userAgent.match(toMatch)) {
        // doc.style.setProperty('--app-height', `${window.innerHeight}px`)
        let height = window.innerHeight - 56
        let width = window.innerWidth - 56
        // console.log(width / height, 10 / 16)
        if (width / height > 10 / 16) {
          // console.log('WIDTH')
          width = window.innerWidth - 56
          height = (width * 16) / 10
        } else {
          height = window.innerHeight - 56
          width = (height * 10) / 16
        }
        // console.log(width, height)
        doc.style.setProperty('--auto-fix-height', height)
        doc.style.setProperty('--auto-fix-width', width)
      } else {
        doc.style.setProperty('--auto-fix-height', `${window.innerHeight}px`)
        doc.style.setProperty('--auto-fix-width', 'auto')
      }
    },
    setModalEventListener() {
      const myModal = document.getElementById('gameModal')
      myModal.addEventListener('show.bs.modal', () => {
        document.getElementById('video_preview').pause()
        this.setGameSrc()
      })
      myModal.addEventListener('hide.bs.modal', () => {
        this.removeSrc()
        document.getElementById('video_preview').play()
      })
    },
    removeSrc() {
      document.getElementById('minGame').setAttribute('src', '')
    },
    setGameSrc() {
      const lang = this.languageSetting
      if (lang === 'en') {
        document
          .getElementById('minGame')
          .setAttribute('src', 'https://bubblegum.insula.ai/?lang=EN&mode=SP')
      } else if (lang === 'zh') {
        document
          .getElementById('minGame')
          .setAttribute('src', 'https://bubblegum.insula.ai/?lang=TC&mode=SP')
      }
    },
  },
}
</script>
