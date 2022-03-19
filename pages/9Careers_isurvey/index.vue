<template>
  <div>
    <div id="banner_block" class="banner_block">
      <div class="container-xxl">
        <div class="row">
          <div class="col-12">
            <div id="banner_text" class="banner_text">
              <div class="hash_tag">#RecruitPeopleNotPaper</div>
              <div class="title">
                別讓履歷框住你的價值，發掘未知的「軟實力」
              </div>
              <div class="sub_title">
                根據「職業類別」，完成客製的遊戲評測，並填答簡易問卷，<br
                  class="d-sm-block d-none"
                />即可獲得Insula分析報告一份。
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-10 d-xxl-block d-none mx-auto">
            <div class="btn_bar" style="transition-delay: 0s">
              <div
                class="career_btn leftDown career1"
                @click="gotoGames(1)"
              ></div>
              <div
                class="career_btn rightDown career2"
                @click="gotoGames(2)"
              ></div>
              <div
                class="career_btn leftDown career3"
                @click="gotoGames(3)"
              ></div>
              <div
                class="career_btn rightDown career4"
                @click="gotoGames(4)"
              ></div>
            </div>
          </div>
          <div class="col-12 d-xxl-block d-none">
            <div class="btn_bar" style="transition-delay: 0.5s">
              <div
                class="career_btn rightDown career5"
                @click="gotoGames(5)"
              ></div>
              <div
                class="career_btn leftDown career6"
                @click="gotoGames(6)"
              ></div>
              <div
                class="career_btn leftDown career7"
                @click="gotoGames(7)"
              ></div>
              <div
                class="career_btn rightDown career8"
                @click="gotoGames(8)"
              ></div>
              <div
                class="career_btn leftDown career9"
                @click="gotoGames(9)"
              ></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-9 d-lg-block d-xxl-none d-none mx-auto">
            <div class="btn_bar" style="transition-delay: 0s">
              <div
                class="career_btn leftDown career1"
                @click="gotoGames(1)"
              ></div>
              <div
                class="career_btn rightDown career2"
                @click="gotoGames(2)"
              ></div>
              <div
                class="career_btn leftDown career3"
                @click="gotoGames(3)"
              ></div>
            </div>
          </div>
          <div class="col-12 d-lg-block d-xxl-none d-none">
            <div class="btn_bar" style="transition-delay: 0.5s">
              <div
                class="career_btn rightDown career4"
                @click="gotoGames(4)"
              ></div>
              <div
                class="career_btn rightDown career5"
                @click="gotoGames(5)"
              ></div>
              <div
                class="career_btn leftDown career6"
                @click="gotoGames(6)"
              ></div>
              <div
                class="career_btn leftDown career7"
                @click="gotoGames(7)"
              ></div>
            </div>
          </div>
          <div class="col-6 d-lg-block d-xxl-none d-none mx-auto">
            <div class="btn_bar" style="transition-delay: 1s">
              <div
                class="career_btn rightDown career8"
                @click="gotoGames(8)"
              ></div>
              <div
                class="career_btn leftDown career9"
                @click="gotoGames(9)"
              ></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-6 d-block d-lg-none mx-auto">
            <div class="dropdown_section">
              <select v-model="jobType" class="form-select custom-form-select">
                <option value="0" selected disabled>請選擇職業類別</option>
                <option value="1">經營管理（經營／行政／人資）</option>
                <option value="2">行銷（行銷／企劃／專案管理）</option>
                <option value="3">業務（客服／門市／業務／貿易）</option>
                <option value="4">金融（財會／金融專業）</option>
                <option value="5">軟體（資訊／研發）</option>
                <option value="6">客戶服務（餐飲／旅遊／服務業）</option>
                <option value="7">設計（藝術／創意／設計）</option>
                <option value="8">教育（學術／教育）</option>
                <option value="9">其他（學生／其他職業）</option>
              </select>
            </div>
            <button
              type="button"
              class="btn challenge_btn"
              :disabled="jobType === 0"
              @click="gotoGames(jobType)"
            >
              開始挑戰
            </button>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div id="top_section" class="top_section">
              <div>即日起至2022年2月，限時免費測驗中</div>
              <div class="d-flex align-items-center" style="min-height: 31px">
                <span class="material-icons"> arrow_forward </span>
                <a class="campaing_detail" href="javascript:;" @click="campaingDetail()"
                  >活動詳細說明</a
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-8 col-md-10 mx-auto">
            <div class="middle_section"></div>
          </div>
        </div>
      </div>
    </div>
    <div id="gamechanger_block" class="gamechanger_block">
      <div class="container-xxl">
        <div class="row">
          <div class="col-10 col-lg-6 col-md-8 mx-auto">
            <div id="bottom_section" class="bottom_section">
              <img
                class="responsive"
                src="~assets/images/ic_quote.svg"
                width="60"
                height="40"
              />
              <div>
                <div>
                  認知能力、工作樣本測試、人格測驗，以及結構化面談是最能夠預測工作績效的方法。
                </div>
                <div class="byAuthor">
                  <span style="font-style: italic"
                    >by Frank L. Schmidt and John E. Hunter</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="
              offset-lg-1
              col-lg-6
              offset-md-2
              col-md-8 col-12
              text-center text-lg-start
            "
          >
            <div class="text_box" style="transition-delay: 0.75s">
              <div class="hash_tag">#TheGameChanger</div>
              <div class="title">
                新世代人才的<br class="d-sm-none d-block" />心理測量主流
              </div>
              <div class="sub_title">
                <span style="font-weight: bold">Insula</span
                >是一系列測量認知能力與特質傾向的遊戲評測。
                職場上所需的核心能力難於面試評估，透過<span
                  style="font-weight: bold"
                  >Insula</span
                >遊戲評測，提供科學實證的數據分析，評估你的優劣勢，挖掘潛在能力，將合適的人才放在合適的工作職位。
              </div>
              <a
                class="video_link"
                href="https://youtu.be/UB19wn4jmWw"
                target="_blank"
              >
                介紹影片
              </a>
            </div>
          </div>
          <div class="col-lg-5 col-12">
            <div class="bgc_rwd"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="gamebase_flow_block">
      <div class="container-xxl">
        <div class="hash_tag">#TheTalentAnalytics</div>
        <div class="title">Insula遊戲評測流程</div>
        <div class="row">
          <div class="col-lg-1 col-0"></div>
          <div class="col-lg-10 col-12">
            <div id="card1" class="card_expand">
              <div class="container-fluid">
                <div class="row">
                  <div
                    class="
                      col-sm-1 col-12
                      order-sm-first order-last
                      d-flex
                      align-items-end
                      justify-content-sm-center justify-content-start
                    "
                  >
                    <img
                      class="img_rwd my-lx-4 my-3"
                      src="~assets/images/number-1.png"
                    />
                  </div>
                  <div class="col-sm-5 col-12 d-flex align-items-center">
                    <div>
                      <div class="card_title">
                        於活動網站上方，<br
                          class="d-lg-block d-none"
                        />點選遊戲評測開始挑戰
                      </div>
                      <div class="card_sub_title">
                        ＊ 請確保網路品質穩定，或使用Wi-Fi進行遊玩<br />＊
                        請預留20~30分鐘的me time
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-12">
                    <img
                      class="card_img img_rwd"
                      src="~assets/images/img_process01.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="card2" class="card_expand">
              <div class="container-fluid">
                <div class="row">
                  <div
                    class="
                      col-sm-1 col-12
                      order-sm-first order-last
                      d-flex
                      align-items-end
                      justify-content-sm-center justify-content-start
                    "
                  >
                    <img
                      class="img_rwd my-xl-4 my-3"
                      src="~assets/images/number-2.png"
                    />
                  </div>
                  <div class="col-sm-5 d-flex align-items-center">
                    <div>
                      <div class="card_title">
                        完成全部遊戲評測後，<br
                          class="d-lg-block d-none"
                        />填答簡易問卷
                      </div>
                      <div class="card_sub_title">
                        ＊ 每個受測組合，配有三款遊戲<br />
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <img
                      class="card_img img_rwd"
                      src="~assets/images/img_process02.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="card3" class="card_expand">
              <div class="container-fluid">
                <div class="row">
                  <div
                    class="
                      col-sm-1 col-12
                      order-sm-first order-last
                      d-flex
                      align-items-end
                      justify-content-sm-center justify-content-start
                    "
                  >
                    <img
                      class="img_rwd my-xl-4 my-3"
                      src="~assets/images/number-3.png"
                    />
                  </div>
                  <div class="col-sm-5 d-flex align-items-center">
                    <div>
                      <div class="card_title">
                        領取完整分析報告，<br
                          class="d-lg-block d-none"
                        />拜訪優聘FB抽驚喜好禮
                      </div>
                      <div class="card_sub_title">
                        活動期間，週週抽出驚喜好禮！<br />
                        歡迎在優聘Facebook留下回饋與建議<br />
                        ＊ 有其他職業想要測驗的，也歡迎聯繫我們<br
                          class="d-sm-block d-none"
                        />
                        <a
                          class="email_link"
                          href="mailto:marketing@talfin.ai"
                          target="_blank"
                          >marketing@talfin.ai</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <img
                      class="card_img img_rwd"
                      src="~assets/images/img_process03.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-1 col-0"></div>
        </div>
        <div id="btn_section" class="btn_section">
          <button type="button" class="btn challenge_btn" @click="goToTop()">
            前往挑戰
          </button>
          <div class="my-4">
            <img src="~assets/images/vector.png" />
          </div>
          <div class="third_title">
            想要深入了解一個人，與其跟他談話一整年，還不如跟他一起玩樂一小時。<br />
            <span style="font-style: italic">by Plato</span>
          </div>
        </div>
      </div>
    </div>
    <div id="FAQ_block" class="FAQ_block">
      <div class="container-xxl">
        <div class="title">FAQ</div>
        <div class="row">
          <div class="col-sm-8 col-12 mx-auto">
            <div class="accordion accordion-flush">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Insula評測包含哪些職場核心能力？
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div class="accordion-body">
                    <div>
                      包含但不限於：溝通、專注力、復原力、記憶力、創造力、想像力、學習力、邏輯分析、情緒辨識能力、規劃／計畫能力、認知彈性、批判性思考等。
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    id="panelsStayOpen-collapseTwo-btn"
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    2022活動詳細說明
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div class="accordion-body">
                    <div>
                      為讓新鮮人／求職者更了解自己職涯的軟實力，針對人力銀行的職業類別，排列出職業核心能力的受測組合，請選擇你的「職業類別」來測試職涯中的關鍵能力！<br />
                      <br />＊ 2022年3月恢復收費 NT$800元／一份 <br />＊
                      如果想測驗不同職業類別，請使用不同E-mail進行登入驗證。
                      <br />＊ 有其他職業想要測驗的，歡迎留言或私訊跟我們說。<br />
                      <br />注意事項：主辦單位保有最終變更權 & 准駁權
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="slider_block" class="slider_block">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="mg_box mg1">
              <div class="container-xxl h-100">
                <div class="row h-100">
                  <div
                    class="col-sm-5 offset-sm-6 col-12 p-relative"
                  >
                    <div class="text_box">
                      <div class="sub_title">
                        星球突然失去控制，BiuBiu大隊趕快出動，一起維護銀河系的秩序！
                      </div>
                      <div class="mobile_position">
                        <div class="hash_tag">#認知能力 #BiuBiuGalaxy</div>
                        <div class="title">Biu Biu 銀河</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="mg_box mg2">
              <div class="container-xxl h-100">
                <div class="row h-100">
                  <div
                    class="col-sm-5 offset-sm-6 col-12 p-relative"
                  >
                    <div class="text_box">
                      <div class="sub_title">
                        我變我變我變變變！<br />
                        請派出最機靈的偵探，仔細判斷我的一舉一動，考驗你讀懂空氣的敏銳度！
                      </div>
                      <div class="mobile_position">
                        <div class="hash_tag">#認知能力 #K-MOJIDetective</div>
                        <div class="title">K-MOJI偵探</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="mg_box mg3">
              <div class="container-xxl h-100">
                <div class="row h-100">
                  <div
                    class="col-sm-5 offset-sm-6 col-12 p-relative"
                  >
                    <div class="text_box">
                      <div class="sub_title color_black">
                        貓貓化身喵諜，如何循線破關揪出所有夢幻魚骨呢？
                      </div>
                      <div class="mobile_position">
                        <div class="hash_tag color_black">
                          #認知能力 #00Meow
                        </div>
                        <div class="title color_black">喵諜</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="mg_box mg4">
              <div class="container-xxl h-100">
                <div class="row h-100">
                  <div
                    class="col-sm-5 offset-sm-6 col-12 p-relative"
                  >
                    <div class="text_box">
                      <div class="sub_title">
                        太空旅行首航中，遇到隕石飛落、視線阻礙、設備故障，要怎麼平安救出朋友呢......
                      </div>
                      <div class="mobile_position">
                        <div class="hash_tag">#認知能力 #GalaxyInsight</div>
                        <div class="title">星際洞察</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="mg_box mg5">
              <div class="container-xxl h-100">
                <div class="row h-100">
                  <div
                    class="col-sm-5 offset-sm-6 col-12 p-relative"
                  >
                    <div class="text_box">
                      <div class="sub_title">
                        不給糖就搗蛋！<br />
                        想要達成宇宙和平，就得先抓住怪獸福迪的胃！
                      </div>
                      <div class="mobile_position">
                        <div class="hash_tag">#認知能力 #FoodieMonster</div>
                        <div class="title">怪獸福迪</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="mg_box mg6">
              <div class="container-xxl h-100">
                <div class="row h-100">
                  <div
                    class="col-sm-5 offset-sm-6 col-12 p-relative"
                  >
                    <div class="text_box">
                      <div class="sub_title">
                        The world is in chaos！<br />
                        宇宙亂象越來越嚴重，如何判斷真相或迷因等你來挑戰！
                      </div>
                      <div class="mobile_position">
                        <div class="hash_tag">#認知能力 #UniverseChaos</div>
                        <div class="title">宇宙亂象</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="mg_box mg8">
              <div class="container-xxl h-100">
                <div class="row h-100">
                  <div
                    class="col-sm-5 offset-sm-6 col-12 p-relative"
                  >
                    <div class="text_box">
                      <div class="sub_title">
                        燈燈燈，基地台遭到訊號干擾！<br
                          class="d-none d-sm-block"
                        />趕緊來揪出愛搗蛋的小怪獸們！
                      </div>
                      <div class="mobile_position">
                        <div class="hash_tag">#認知能力 #CircuitMonsters</div>
                        <div class="title">怪獸電路站</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="mg_box mg9">
              <div class="container-xxl h-100">
                <div class="row h-100">
                  <div
                    class="col-sm-5 offset-sm-6 col-12 p-relative"
                  >
                    <div class="text_box">
                      <div class="sub_title">
                        Mayday！Mayday！<br />
                        隕石要命中地球了，趕快出動保衛我們的家園。
                      </div>
                      <div class="mobile_position">
                        <div class="hash_tag">#認知能力 #GuardianOfEarth</div>
                        <div class="title">地球保衛戰</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div id="MG7_block" class="MG7_block">
      <div class="container-xxl h-100">
        <div class="row h-100">
          <div class="offset-sm-1 col-sm-5 col-12 p-relative">
            <div class="sub_title">
              <div class="custom-hash">#特質與傾向 #BubbleGum</div>
              <div class="text">
                為衡量某種特質與傾向的評測，我們將此遊戲獨立出來，歡迎大家來玩！
              </div>
              <div class="arrow-container">
                <span class="material-icons arrow_animation"
                  >arrow_forward</span
                >
                <a href="javascript:;" @click="gotoGames()"
                  >挑戰泡泡糖</a
                >
              </div>
              <div class="hash_tag">#特質與傾向 #BubbleGum</div>
              <div class="title">泡泡糖</div>
            </div>
          </div>
          <div class="col-sm-6"></div>
        </div>
      </div>
    </div>
    <div id="ability_intro_block" class="ability_intro_block">
      <div class="container-xxl">
        <div class="row">
          <div class="offset-md-1 col-md-5 col-12">
            <div class="text_box" style="transition-delay: 0s">
              <div class="hash_tag">#CognitiveAbility</div>
              <div class="title">認知能力</div>
              <div class="sub_title">
                透過經典研究模型，以及國內外權威研究資料，歸納挑選出各類職涯中最須具備的核心能力。
              </div>
              <div class="third_title">10+隱藏能力等你來挑戰。</div>
            </div>
          </div>
          <div class="col-md-5 col-12 custom-mt60">
            <div class="text_box" style="transition-delay: 0.5s">
              <div class="hash_tag">#Trait #Tendency</div>
              <div class="title">特質與傾向</div>
              <div class="sub_title">
                與認知能力不同，特質與傾向反映了個體行為的基本偏好。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobType: 0,
      swiper: null,
    }
  },
  head() {
    return {
      title: 'Insula-測驗職場軟實力',
      meta: [
        {
          property: 'og:title',
          content: 'Insula-測驗職場軟實力',
        },
        {
          property: 'og:description',
          content: '別讓履歷框住你的價值，發掘未知的「軟實力」',
        },
        {
          property: 'og:image',
          content:
            'https://resource.talfin.in/image/insula-web/insula_link_preview_9career.jpg',
        },
      ],
    }
  },
  mounted() {
    window.addEventListener('resize', this.resetAppHeight)
    window.addEventListener('message', (e) => this.closeMessageReceived(e))
    window.addEventListener('scroll', this.scrolling)
    this.resetAppHeight()
    this.initBannerAnimate()
    this.swiper = this.initSwiper()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resetAppHeight)
    window.removeEventListener('message', (e) => this.closeMessageReceived(e))
    window.removeEventListener('scroll', this.scrolling)
  },
  methods: {
    /**
     * browser 函式抄  https://stackoverflow.com/questions/62409889/how-to-detect-browser-for-chrome
     * @param {object} agent - 固定接收 window.navigator.userAgent.toLowerCase() 判斷瀏覽器
     */
    BrowserType() {
      // 权重：系统 + 系统版本 > 平台 > 内核 + 载体 + 内核版本 + 载体版本 > 外壳 + 外壳版本
      const ua = navigator.userAgent.toLowerCase()
      const testUa = (regexp) => regexp.test(ua)
      const testVs = (regexp) =>
        ua
          .match(regexp)
          .toString()
          .replace(/[^0-9|_.]/g, '')
          .replace(/_/g, '.')
      // 系统
      let system = 'unknow'
      if (testUa(/windows|win32|win64|wow32|wow64/g)) {
        system = 'windows' // windows系统
      } else if (testUa(/macintosh|macintel/g)) {
        system = 'macos' // macos系统
      } else if (testUa(/x11/g)) {
        system = 'linux' // linux系统
      } else if (testUa(/android|adr/g)) {
        system = 'android' // android系统
      } else if (testUa(/ios|iphone|ipad|ipod|iwatch/g)) {
        system = 'ios' // ios系统
      }
      // 系统版本
      let systemVs = 'unknow'
      if (system === 'windows') {
        if (testUa(/windows nt 5.0|windows 2000/g)) {
          systemVs = '2000'
        } else if (testUa(/windows nt 5.1|windows xp/g)) {
          systemVs = 'xp'
        } else if (testUa(/windows nt 5.2|windows 2003/g)) {
          systemVs = '2003'
        } else if (testUa(/windows nt 6.0|windows vista/g)) {
          systemVs = 'vista'
        } else if (testUa(/windows nt 6.1|windows 7/g)) {
          systemVs = '7'
        } else if (testUa(/windows nt 6.2|windows 8/g)) {
          systemVs = '8'
        } else if (testUa(/windows nt 6.3|windows 8.1/g)) {
          systemVs = '8.1'
        } else if (testUa(/windows nt 10.0|windows 10/g)) {
          systemVs = '10'
        }
      } else if (system === 'macos') {
        systemVs = testVs(/os x [\d._]+/g)
      } else if (system === 'android') {
        systemVs = testVs(/android [\d._]+/g)
      } else if (system === 'ios') {
        systemVs = testVs(/os [\d._]+/g)
      }
      // 平台
      let platform = 'unknow'
      if (system === 'windows' || system === 'macos' || system === 'linux') {
        platform = 'desktop' // 桌面端
      } else if (
        system === 'android' ||
        system === 'ios' ||
        testUa(/mobile/g)
      ) {
        platform = 'mobile' // 移动端
      }
      // 内核和载体
      let engine = 'unknow'
      let supporter = 'unknow'
      if (testUa(/applewebkit/g)) {
        engine = 'webkit' // webkit内核
        if (testUa(/edge/g)) {
          supporter = 'edge' // edge浏览器
        } else if (testUa(/opr/g)) {
          supporter = 'opera' // opera浏览器
        } else if (testUa(/chrome/g)) {
          supporter = 'chrome' // chrome浏览器
        } else if (testUa(/safari/g)) {
          supporter = 'safari' // safari浏览器
        }
      } else if (testUa(/gecko/g) && testUa(/firefox/g)) {
        engine = 'gecko' // gecko内核
        supporter = 'firefox' // firefox浏览器
      } else if (testUa(/presto/g)) {
        engine = 'presto' // presto内核
        supporter = 'opera' // opera浏览器
      } else if (testUa(/trident|compatible|msie/g)) {
        engine = 'trident' // trident内核
        supporter = 'iexplore' // iexplore浏览器
      }
      // 内核版本
      let engineVs = 'unknow'
      if (engine === 'webkit') {
        engineVs = testVs(/applewebkit\/[\d._]+/g)
      } else if (engine === 'gecko') {
        engineVs = testVs(/gecko\/[\d._]+/g)
      } else if (engine === 'presto') {
        engineVs = testVs(/presto\/[\d._]+/g)
      } else if (engine === 'trident') {
        engineVs = testVs(/trident\/[\d._]+/g)
      }
      // 载体版本
      let supporterVs = 'unknow'
      if (supporter === 'chrome') {
        supporterVs = testVs(/chrome\/[\d._]+/g)
      } else if (supporter === 'safari') {
        supporterVs = testVs(/version\/[\d._]+/g)
      } else if (supporter === 'firefox') {
        supporterVs = testVs(/firefox\/[\d._]+/g)
      } else if (supporter === 'opera') {
        supporterVs = testVs(/opr\/[\d._]+/g)
      } else if (supporter === 'iexplore') {
        supporterVs = testVs(/(msie [\d._]+)|(rv:[\d._]+)/g)
      } else if (supporter === 'edge') {
        supporterVs = testVs(/edge\/[\d._]+/g)
      }
      // 外壳和外壳版本
      let shell = 'none'
      let shellVs = 'unknow'
      if (testUa(/micromessenger/g)) {
        shell = 'wechat' // 微信浏览器
        shellVs = testVs(/micromessenger\/[\d._]+/g)
      } else if (testUa(/qqbrowser/g)) {
        shell = 'qq' // QQ浏览器
        shellVs = testVs(/qqbrowser\/[\d._]+/g)
      } else if (testUa(/ucbrowser/g)) {
        shell = 'uc' // UC浏览器
        shellVs = testVs(/ucbrowser\/[\d._]+/g)
      } else if (testUa(/qihu 360se/g)) {
        shell = '360' // 360浏览器(无版本)
      } else if (testUa(/2345explorer/g)) {
        shell = '2345' // 2345浏览器
        shellVs = testVs(/2345explorer\/[\d._]+/g)
      } else if (testUa(/metasr/g)) {
        shell = 'sougou' // 搜狗浏览器(无版本)
      } else if (testUa(/lbbrowser/g)) {
        shell = 'liebao' // 猎豹浏览器(无版本)
      } else if (testUa(/maxthon/g)) {
        shell = 'maxthon' // 遨游浏览器
        shellVs = testVs(/maxthon\/[\d._]+/g)
      }
      return Object.assign(
        {
          engine, // webkit gecko presto trident
          engineVs,
          platform, // desktop mobile
          supporter, // chrome safari firefox opera iexplore edge
          supporterVs,
          system, // windows macos linux android ios
          systemVs,
        },
        shell === 'none'
          ? {}
          : {
              shell, // wechat qq uc 360 2345 sougou liebao maxthon
              shellVs,
            }
      )
    },
    initBannerAnimate() {
      document.getElementById('banner_text').classList.add('animate')
      document.querySelectorAll('.btn_bar').forEach((e, k) => {
        e.classList.add('animate')
      })
      // document.getElementById('top_section').classList.add('animate')
    },
    scrolling() {
      // console.log(window.scrollY)
      // console.log(document.getElementById("card3").offsetTop)
      if (window.scrollY > document.getElementById('banner_block').offsetTop) {
        document.getElementById('bottom_section').classList.add('animate')
        document
          .getElementById('gamechanger_block')
          .querySelectorAll('.text_box')
          .forEach((e, k) => {
            e.classList.add('animate')
          })
      }
      if (window.scrollY > document.getElementById('card3').offsetTop) {
        document
          .getElementById('btn_section')
          .querySelectorAll('.third_title')
          .forEach((e, k) => {
            e.classList.add('animate')
          })
        document.getElementById('FAQ_block').classList.add('animate')
      }
      if (window.scrollY > document.getElementById('FAQ_block').offsetTop) {
        document
          .getElementById('slider_block')
          .querySelectorAll('.mg_box')
          .forEach((e, k) => {
            e.classList.add('animate')
          })
        this.swiper.autoplay.start()
      }
      if (window.scrollY > document.getElementById('slider_block').offsetTop) {
        document.getElementById('MG7_block').classList.add('animate')
      }
      if (window.scrollY > document.getElementById('MG7_block').offsetTop) {
        document
          .getElementById('ability_intro_block')
          .querySelectorAll('.text_box')
          .forEach((e, k) => {
            e.classList.add('animate')
          })
      }
    },
    gotoGames(type) {
      switch (Number(type)) {
        case 1:
          window.open(
            'https://lobby.insula.ai/?env=workplace2&invite_code=VJD9UW&job_type=HR' + location.search.replace('?','&'),
            '_blank'
          )
          break
        case 2:
          window.open(
            'https://lobby.insula.ai/?env=workplace2&invite_code=7H73HV&job_type=PM' + location.search.replace('?','&'),
            '_blank'
          )
          break
        case 3:
          window.open(
            'https://lobby.insula.ai/?env=workplace2&invite_code=PGCY49&job_type=TR' + location.search.replace('?','&'),
            '_blank'
          )
          break
        case 4:
          window.open(
            'https://lobby.insula.ai/?env=workplace2&invite_code=NY2Y6L&job_type=FI' + location.search.replace('?','&'),
            '_blank'
          )
          break
        case 5:
          window.open(
            'https://lobby.insula.ai/?env=workplace2&invite_code=RCMJQG&job_type=RD' + location.search.replace('?','&'),
            '_blank'
          )
          break
        case 6:
          window.open(
            'https://lobby.insula.ai/?env=workplace2&invite_code=4PVV3Z&job_type=SE' + location.search.replace('?','&'),
            '_blank'
          )
          break
        case 7:
          window.open(
            'https://lobby.insula.ai/?env=workplace2&invite_code=KEQC8E&job_type=DE' + location.search.replace('?','&'),
            '_blank'
          )
          break
        case 8:
          window.open(
            'https://lobby.insula.ai/?env=workplace2&invite_code=G9UJD3&job_type=ED' + location.search.replace('?','&'),
            '_blank'
          )
          break
        case 9:
          window.open(
            'https://lobby.insula.ai/?env=workplace2&invite_code=4KN1FM&job_type=OT' + location.search.replace('?','&'),
            '_blank'
          )
          break

        default:
          window.open(
            'https://lobby.insula.ai/?env=social&invite_code=JTRMC3',
            '_blank'
          )
          break
      }
    },
    /**
     * browser 函式抄  https://stackoverflow.com/questions/62409889/how-to-detect-browser-for-chrome
     * @param {object} agent - 固定接收 window.navigator.userAgent.toLowerCase() 判斷瀏覽器
     */
    browser(agent) {
      switch (true) {
        case agent.includes('edge') > -1:
          return 'MS Edge (EdgeHtml)'
        case agent.includes('edg') > -1:
          return 'MS Edge Chromium'
        case agent.includes('opr') > -1 && !!window.opr:
          return 'opera'
        case agent.includes('chrome') > -1 && !!window.chrome:
          return 'chrome'
        case agent.includes('trident') > -1:
          return 'Internet Explorer'
        case agent.includes('firefox') > -1:
          return 'firefox'
        case agent.includes('safari') > -1:
          return 'safari'
        default:
          return 'other'
      }
    },
    goToTop() {
      if (this.BrowserType().supporter === 'safari') {
        $('html, body').animate(
          {
            scrollTop: 0,
          },
          500
        )
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    campaingDetail() {
      if (this.BrowserType().supporter === 'safari') {
        $('html, body').animate(
          {
            scrollTop: document.getElementById('FAQ_block').offsetTop,
          },
          500
        )
      } else {
        window.scrollTo({
          top: document.getElementById('FAQ_block').offsetTop,
          behavior: 'smooth',
        })
      }
      document
        .getElementById('panelsStayOpen-collapseTwo-btn')
        .classList.remove('collapsed')
      document
        .getElementById('panelsStayOpen-collapseTwo')
        .classList.add('show')
    },
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
    initSwiper() {
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
          clickable: true,
        },
      })
      // 初始化先不播放
      swiper.autoplay.stop()
      return swiper
    },
  },
}
</script>

<style></style>
