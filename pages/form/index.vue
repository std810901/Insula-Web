<template>
  <div>
    <div class="form_bgc">
      <div class="form_block">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-3 col-lg-2 col-md-1 col-sm-0"></div>
            <div class="col-xl-6 col-lg-8 col-md-10  col-sm-12">
              <div class="title" data-en='Make Better Hiring Decisions !' data-zh='人才篩選更進化！' data-lang-set>
              </div>
              <div class="sub_title">
                <div class="d-lg-flex d-block align-items-center">
                  <span class="material-icons">
                      check
                  </span>
                  <label data-en="Data-driven<br class='d-md-up-block d-none'> Hiring" data-zh='數據驅動的招募' data-lang-set>
                  </label>
                </div>
                <div class="d-lg-flex d-block align-items-center">
                  <span class="material-icons">
                      check
                  </span>
                  <label data-en="Objective<br class='d-md-up-block d-none'> Decision-making" data-zh='客觀決策' data-lang-set>
                  </label>
                </div>
                <div class="d-lg-flex d-block align-items-center">
                  <span class="material-icons">
                      check
                  </span>
                  <label data-en="Increased<br class='d-md-up-block d-none'> Person-job Fit" data-zh='提高職務適配性' data-lang-set>
                  </label>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-2 col-md-1 col-sm-0"></div>
          </div>
          <div class="row pb-5">
            <div class="col-xl-3 col-lg-2 col-md-1 yellow_monster"></div>
            <div class="col-xl-6 col-lg-8 col-md-10  col-sm-12 p-0">
              <form autocomplete="false" @submit="registerFreeTrial">
                <div class="form_list">
                  <div class="third_title" data-en='Request a free demo now' data-zh='立即申請免費試用' data-lang-set></div>
                  <div class="form-group mt-4">
                    <input id="name" type="text" class="form-control form-control-lg" data-en='Name ＊' data-zh='姓名 ＊' autocomplete="new-text" maxlength="25" data-placeholder required>
                  </div>
                  <div class="form-group mt-4">
                    <label class="px-2" for="jobRole" data-en='Job Role *' data-zh='職務/角色 ＊' data-lang-set></label>
                    <select id="jobRole" class="form-control form-control-lg" required>
                      <option value="" disabled selected data-en='Please Select' data-zh='請選擇' data-lang-set></option>
                    </select>
                  </div>
                  <div class="form-group mt-4">
                    <input id="company" type="text" class="form-control form-control-lg" data-en='Company Name ＊' data-zh='公司名稱 ＊' autocomplete="new-text" maxlength="100" data-placeholder required>
                  </div>
                  <div class="form-group mt-4">
                    <input id="email" type="email" class="form-control form-control-lg" data-en='Business E-mail ＊' data-zh='公司E-mail＊' autocomplete="new-text" maxlength="65" data-placeholder required>
                  </div>
                  <div class="form-group mt-4">
                    <input id="phoneNumber" type="text" class="form-control form-control-lg" data-en='Phone Number' data-zh='公司電話' autocomplete="new-text" data-placeholder>
                  </div>
                  <div class="form-group mt-4">
                    <label class="px-2" for="numberOfEmployees" data-en='Number of Employees ＊' data-zh='公司人數 ＊' data-lang-set></label>
                    <select id="numberOfEmployees" class="form-control form-control-lg" required>
                      <option value="" disabled selected data-en='Please Select' data-zh='請選擇' data-lang-set></option>
                    </select>
                  </div>
                  <div class="form-group mt-4">
                    <label class="px-2" for="country" data-en='Country ＊' data-zh='國家 ＊' data-lang-set></label>
                    <select id="country" class="form-control form-control-lg" required>
                    </select>
                  </div>
                  <div class="form-group mt-4">
                    <textarea id="message" class="form-control form-control-lg" style="resize:none" rows="8" data-en='Message' data-zh='留言'  autocomplete="new-text" data-placeholder></textarea>
                  </div>
                </div>
                <div style="margin: 40px;">
                  <div class="form-group mt-4">
                    <div class="form-check mx-auto">
                      <input id="privacyPolicyCheckbox" class="form-check-input" type="checkbox" required @invalid="InvalidCheckbox()" @change="cleanCheckbox">
                      <label class="form-check-label" for="privacyPolicyCheckbox" data-en='I have read and agree to the ' data-zh='我已閱讀並同意' data-lang-set>
                      </label>
                      <label>
                        <a id="privacy-link" href="javascript:;" data-bs-toggle="modal" data-bs-target="#privacyModal" style="color: unset;" data-en='Privacy Policy.' data-zh='隱私權政策' data-lang-set></a>
                      </label>
                    </div>
                  </div>
                  <div class="form-group mt-4">
                    <div class="form-check mx-auto">
                      <input id="exclusiveContent" class="form-check-input" type="checkbox">
                      <label class="form-check-label" for="exclusiveContent" data-en='Get all our latest news and exclusive content straight to your inbox!' data-zh='我們的最新消息和獨家內容，將直接發送至您所提供之電子郵件信箱' data-lang-set>
                      </label>
                    </div>
                  </div>
                  <div class="d-flex flex-wrap align-items-center mt-4">
                    <input id="captcha_input" class="form-control mb-sm-0 mb-3" type="text" maxlength="6" style="width: max-content" autocomplete="new-text" data-en='Case sensitive' data-zh='區分大小寫' data-placeholder required @invalid="invalidMsg();" @input="invalidMsg();">
                    <div id="captcha" class="d-flex align-items-center"></div>
                    <div id="captcha_refresh" class="d-flex align-items-center refreshBtn">
                      <span class="material-icons">
                        refresh
                      </span>
                    </div>
                  </div>
                </div>
                <div id="loading" class="text-center" style="display: none;">
                  <div class="spinner-border text-warning" role="status">
                    <span class="sr-only"></span>
                  </div>
                </div>
                <button id="submit_btn" type="submit" class="btn submit_btn" data-en='Request demo' data-zh='申請試用' data-lang-set>
                  <div class="spinner-border text-dark" role="status">
                    <span class="sr-only"></span>
                  </div>
                </button>
                <div id="success_message" style="display: none;" class="alert success_color text-center" role="alert" data-en='Thank you for applying.' data-zh='感謝您申請' data-lang-set>
                </div>
                <div id="error_message" style="display: none;" class="alert error_color text-center" role="alert" data-lang-set>
                </div>
              </form>
            </div>
            <div class="col-xl-3 col-lg-2 col-md-1 red_monster"></div>
          </div>      
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Captcha } from "../../plugins/captcha"
import { country } from '../../assets/html-file/country'
export default {
    data () {
        return {
          captcha: null,
          country
        }
    },
    mounted () {
      this.initLang()
      this.getEmployeeRange()
      this.initCaptcha()
      // console.log('form', this.$route)
    },
    methods: {
      cleanCheckbox () {
        const checkbox = document.getElementById('privacyPolicyCheckbox')
        checkbox.setCustomValidity('')
      },
      InvalidCheckbox() {
        if (process.client) {
          const checkbox = document.getElementById('privacyPolicyCheckbox')
          const lang = localStorage.getItem('lang')
          if (lang === 'en') {
            checkbox.setCustomValidity('You must accept the Privacy Policy before continuing.');
            return true;
          } else if (lang === 'zh') {
            checkbox.setCustomValidity('請勾選已閱讀並同意隱私權政策');
            return true;
          }
        }
      },
      invalidMsg() {
        if (process.client) {
          const textbox = document.getElementById('captcha_input')
          const lang = localStorage.getItem('lang')
          if (lang === 'en') {
            if (textbox.value === '') {
              textbox.setCustomValidity('Please enter a valid verification code.');
            } else {
              textbox.setCustomValidity('');
            }
            return true;
          } else if (lang === 'zh') {
            if (textbox.value === '') {
              textbox.setCustomValidity('請輸入正確的驗證碼');
            } else {
              textbox.setCustomValidity('');
            }
            return true;
          }
        }
      },
      checkIsRobot () {
        if (document.querySelector('#captcha_input').value === this.captcha.captValue) return false 
        else return true
      },
      registerFreeTrial (e) {
        e.preventDefault()
        document.getElementById("error_message").innerHTML = '';
        document.getElementById("error_message").style.display = 'none';
        document.getElementById("success_message").style.display = 'none';
        document.getElementById("loading").style.display = 'block';
        document.getElementById("submit_btn").style.display = 'none';
        if (!this.checkIsRobot()) {
          const param = {
            name: document.getElementById("name").value,
            role_id: Number(document.getElementById("jobRole").value),
            company: document.getElementById("company").value,
            company_email: document.getElementById("email").value,
            company_tel: document.getElementById("phoneNumber").value,
            employee_range: Number(document.getElementById("numberOfEmployees").value),
            country: document.getElementById("country").value,
            remark:  document.getElementById("message").value
          }
          const url = "https://api-dev.insula.ai/home/register_free_trial";
          fetch(url, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method : "POST",
            body: JSON.stringify(param)
          })
          .then(res => res.json())
          .then(data => {
            if (data.errors.length) {
              data.errors.forEach(e => {
                switch (e.property_name) {
                  case 'company_email':
                      document.getElementById("error_message").style.display = 'block';
                      document.getElementById("success_message").style.display = 'none';
                      document.getElementById("loading").style.display = 'none';
                      document.getElementById("submit_btn").style.display = 'block';
                      document.getElementById("error_message").setAttribute('data-en', 'Please check Email.<br>')
                      document.getElementById("error_message").setAttribute('data-zh', '請檢查Email.<br>')
                      if (process.client) {
                        if (localStorage.getItem('lang') === 'en') {
                          document.getElementById("error_message").innerHTML = 'Please check Email.<br>'
                        } else if (localStorage.getItem('lang') === 'zh') {
                          document.getElementById("error_message").innerHTML = '請檢查Email.<br>'
                        }
                      }
                    break;
                
                  default:
                      document.getElementById("error_message").style.display = 'none';
                      document.getElementById("success_message").style.display = 'none';
                      document.getElementById("loading").style.display = 'none';
                      document.getElementById("submit_btn").style.display = 'block';
                    break;
                }
              })
            } else {
              this.captcha.refresh()
              document.getElementById("error_message").style.display = 'none';
              document.getElementById("success_message").style.display = 'block';
              document.getElementById("loading").style.display = 'none';
              document.getElementById("submit_btn").style.display = 'block';
            }
          })
          .catch(err => {
            console.log(err)
          });
        } else {
          document.getElementById("error_message").style.display = 'block';
          document.getElementById("success_message").style.display = 'none';
          document.getElementById("loading").style.display = 'none';
          document.getElementById("submit_btn").style.display = 'block';
          document.getElementById("error_message").setAttribute('data-en', 'Please check the verification code.')
          document.getElementById("error_message").setAttribute('data-zh', '請檢查網頁驗證碼')
          if (process.client) {
            if (localStorage.getItem('lang') === 'en') {
              document.getElementById("error_message").innerHTML = 'Please check the verification code.<br>'
            } else if (localStorage.getItem('lang') === 'zh') {
              document.getElementById("error_message").innerHTML = '請檢查網頁驗證碼<br>'
            }
          }
        }
      },
      initCaptcha () {
        this.captcha  = new Captcha('#captcha')
        this.captcha.generateCaptcha()
        document.querySelector('#captcha_refresh').addEventListener("click", () => {
          this.captcha.refresh()
        })
      },
      getEmployeeRole (lang) {
        const xhttp = new XMLHttpRequest();
        
        xhttp.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
            const range = JSON.parse(xhttp.responseText).result
            const selectTag = document.getElementById("jobRole")
            range.forEach((e) => {
              const optionTag = document.createElement('option')
              optionTag.value = e.id
              optionTag.innerHTML = e.description
              selectTag.appendChild(optionTag)
            })
          }
        };
        xhttp.open("GET", "https://api-dev.insula.ai/home/get_employee_role", true);
        xhttp.setRequestHeader("Accept-Language",lang)
        xhttp.send();
      },
      getEmployeeRange() {
        const xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
            const range = JSON.parse(xhttp.responseText).result
            const selectTag = document.getElementById("numberOfEmployees")
            // console.log(range)
            range.forEach((e) => {
              const optionTag = document.createElement('option')
              optionTag.value = e.id
              optionTag.innerHTML = e.description
              selectTag.appendChild(optionTag)
            })
            // console.log(selectTag)
          }
        };
        xhttp.open("GET", "https://api-dev.insula.ai/home/get_employee_range", true);
        xhttp.send();
      },
      initLang () {
        document.getElementById('country').innerHTML = this.country
        if (process.client) {
          const lang = this.$store.state.i18nLang.lang
          if (lang === 'en') {
            this.getEmployeeRole('en-US')
            document.querySelectorAll('[data-lang-set]').forEach((element) => {
                element.innerHTML = element.dataset.en
            })
            document.querySelectorAll('[data-placeholder]').forEach(element => {
              element.placeholder = element.dataset.en
            })
          } else {
            this.getEmployeeRole('zh-TW')
            document.querySelectorAll('[data-lang-set]').forEach((element) => {
                element.innerHTML = element.dataset.zh
            })
            document.querySelectorAll('[data-placeholder]').forEach(element => {
              element.placeholder = element.dataset.zh
            })
          }
        }
      }
    }
}
</script>
