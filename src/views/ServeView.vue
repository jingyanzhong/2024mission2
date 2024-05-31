<script setup>
import serveCard from '../components/ServeCard.vue'
</script>

<template>
    <section class="serve">
    <div class="container">
      <h3 class="title">
        <img class="deco-lg" src="../assets/img/title deco-left-lg.png" alt="deco">
        <img class="deco-sm" src="../assets/img/title deco-left-sm.png" alt="deco">
        服務項目
        <img class="deco-lg" src="../assets/img/title deco-right-lg.png" alt="deco">
        <img class="deco-sm" src="../assets/img/title deco-right-sm.png" alt="deco">
      </h3>
      <serveCard></serveCard>
    </div>
  </section>
  <section class="serveSop">
    <div class="container">
      <h3 class="title">
        <img class="deco-lg" src="../assets/img/title deco-left-lg.png" alt="deco">
        <img class="deco-sm" src="../assets/img/title deco-left-sm.png" alt="deco">
        服務流程
        <img class="deco-lg" src="../assets/img/title deco-right-lg.png" alt="deco">
        <img class="deco-sm" src="../assets/img/title deco-right-sm.png" alt="deco">
      </h3>
      <ul class="sopConten">
        <li>
            <div class="num tourney">
                <p>1</p>
            </div>
            <div class="contentText">
                <h3>初步接洽</h3>
                <p>
                    透過表單或其他社群軟體與我聯絡
                    <br>
                    根據難易度與複雜度，後續可能需要電話/線上討論</p>
            </div>
        </li>
        <li>
            <div class="num tourney">
                <p>2</p>
            </div>
            <div class="contentText">
                <h3>需求釐清</h3>
                <p>
                    透過訪談與問卷，解析客戶需求，並針對痛點給予實際建議
                </p>
            </div>
        </li>
        <li>
            <div class="num tourney">
                <p>3</p>
            </div>
            <div class="contentText">
                <h3>委託簽約</h3>
                <p>
                    合約雙方用印後，即正式開始合作
                    <br>
                    可提供發票或勞務報酬單，須支付 20% 訂金
                </p>
            </div>
        </li>
        <li>
            <div class="num tourney">
                <p>4</p>
            </div>
            <div class="contentText">
                <h3>版本呈現</h3>
                <p>根據合約內容進行設計或開發</p>
            </div>
        </li>
        <li>
            <div class="num tourney">
                <p>5</p>
            </div>
            <div class="contentText">
                <h3>來回修正</h3>
                <p>依據合約規定之修正次數進行，次數計算以 mail 為準</p>
            </div>
        </li>
        <li>
            <div class="num tourney">
                <p>6</p>
            </div>
            <div class="contentText">
                <h3>終版確認</h3>
                <p>雙方同意後即為最終版</p>
            </div>
        </li>
        <li>
            <div class="num tourney">
                <p>7</p>
            </div>
            <div class="contentText">
                <h3>結案</h3>
                <p>客戶簽署驗收單，並於約定日期支付尾款</p>
            </div>
        </li>
      </ul>
    </div>
  </section>

<section class="price">
    <div class="container">
        <h3 class="title">
        <img class="deco-lg" src="../assets/img/title deco-left-lg.png" alt="deco">
        <img class="deco-sm" src="../assets/img/title deco-left-sm.png" alt="deco">
        價格表
        <img class="deco-lg" src="../assets/img/title deco-right-lg.png" alt="deco">
        <img class="deco-sm" src="../assets/img/title deco-right-sm.png" alt="deco">
      </h3>
      <ul class="priceList">
        <li>
            <div class="title">
                <img src="../assets/img/price-item-visual.png" alt="平面設計">
                <p>平面設計</p>
            </div>
            <hr>
            <p class="money">6,000 <small>起</small></p>
        </li>
        <li>
            <div class="title">
                <img src="../assets/img/price-item-ui.png" alt="UI 設計">
                <p>UI 設計</p>
            </div>
            <hr>
            <p class="money">15,000 <small>起</small></p>
        </li>
        <li>
            <div class="title">
                <img src="../assets/img/price-item-front-end.png" alt="前端開發">
                <p>前端開發</p>
            </div>
            <hr>
            <p class="money">22,000 <small>起</small></p>
        </li>
      </ul>
    </div>
</section>
<section class="custom-case">
    <div class="container">
        <h3 class="title">
        <img class="deco-lg" src="../assets/img/title deco-left-lg.png" alt="deco">
        <img class="deco-sm" src="../assets/img/title deco-left-sm.png" alt="deco">
        客戶案例
        <img class="deco-lg" src="../assets/img/title deco-right-lg.png" alt="deco">
        <img class="deco-sm" src="../assets/img/title deco-right-sm.png" alt="deco">
      </h3>
      <ul class="caseList">
        <li>
            <div class="caseImg">
                <img src="../assets/img/work-image4.png" alt="">
            </div>
            <div class="contentText">
                <h4>美美美早餐店 POS 機 UI Design</h4>
                <p>訂單送單一目瞭然，自動報表分析好輕鬆</p>
                <div class="mark">
                    <ul>
                        <li>UI 設計</li>
                        <li>前端開發</li>
                        <li>Wix</li>
                    </ul>
                </div>
            </div>
        </li>
        <li>
            <div class="caseImg">
                <img src="../assets/img/work-image6.png" alt="">
            </div>
            <div class="contentText">
                <h4>美美美早餐店 POS 機 UI Design</h4>
                <p>訂單送單一目瞭然，自動報表分析好輕鬆</p>
                <div class="mark">
                    <ul>
                        <li>UI 設計</li>
                        <li>前端開發</li>
                        <li>Wix</li>
                    </ul>
                </div>
            </div>
        </li>
        <li>
            <div class="caseImg">
                <img src="../assets/img/work-image5.png" alt="">
            </div>
            <div class="contentText">
                <h4>電影院訂票系統</h4>
                <p>三步驟完成訂票，電腦手機都支援</p>
                <div class="mark">
                    <ul>
                        <li>前端開發</li>
                        <li>後端支援</li>
                        <li>Vue</li>
                    </ul>
                </div>
            </div>
        </li>
        <li>
            <div class="caseImg">
                <img src="../assets/img/work-image7.png" alt="">
            </div>
            <div class="contentText">
                <h4>2023 餉茶坊飲料旗艦店活動官網設計</h4>
                <p>主打水果主題，冰鎮夏天暑氣</p>
                <div class="mark">
                    <ul>
                        <li>網頁設計</li>
                        <li>切版服務</li>
                        <li>Javascript</li>
                    </ul>
                </div>
            </div>
        </li>
      </ul>
    </div>
</section>
<section class="fqa">
    <div class="container">
        <h3 class="title">
        <img class="deco-lg" src="../assets/img/title deco-left-lg.png" alt="deco">
        <img class="deco-sm" src="../assets/img/title deco-left-sm.png" alt="deco">
        常見問題
        <img class="deco-lg" src="../assets/img/title deco-right-lg.png" alt="deco">
        <img class="deco-sm" src="../assets/img/title deco-right-sm.png" alt="deco">
      </h3>
      <ul class="fqaList">
          <li>
              <h4>時程很趕的話可以加快作業嗎？</h4>
              <p>每提早一天，只要支付總報價的 5%，我們即會視為急件為您趕工！</p>
          </li>
          <li>
              <h4>白天可以開會討論嗎？</h4>
              <p>每週一三五的白天，可以約定開會時間！</p>
          </li>
          <li>
              <h4>有實際開發的網站可以參考嗎？</h4>
              <p>請填寫表單或來信索取，部分合作有簽保密協定，無法於網路上公開喔。</p>
          </li>
          <li>
              <h4>提供比稿服務嗎？</h4>
              <p>只要支付費用，設計提供比稿服務，但切版與前端開發恕不提供該服務內容。</p>
          </li>
      </ul>
    </div>
</section>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/pages/serve.scss';
</style>
