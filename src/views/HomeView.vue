<script setup>
import serveCard from '../components/ServeCard.vue'
import articleSwiper from '../components/ArticleSwiper.vue'
</script>

<template>
  <section class="indexHero">
    <div class="container">
      <div class="contentText">
        <h2>Hi！我是 Noel</h2>
        <p class="fs-5">具有 10 年經驗的
          <span class="block"></span>
          <span class="deco">資深 UI 設計師</span>
          <span>兼</span>
          <span class="deco">前端工程師</span>
        </p>
        <p class="fs-5">技術雙修並行，
          <span class="block"></span>熱衷於優化使用者的網頁體驗
        </p>
        <p class="fs-6">WEB DEVELOPMENT / BRANDING / UI / UX / APP DESIGN</p>
        <div class="link">
          <a href="#"><img src="../assets/img/instagram.svg" alt="instagram"></a>
          <a href="#"><img src="../assets/img/facebook.svg" alt="facebook"></a>
          <a href="#"><img src="../assets/img/youtube.png" alt="youtube"></a>
        </div>
      </div>
    </div>
  </section>
  <section class="portfolio">
    <h3 class="title">
      <img class="deco-lg" src="../assets/img/title deco-left-lg.png" alt="deco">
      <img class="deco-sm" src="../assets/img/title deco-left-sm.png" alt="deco">
      作品介紹
      <img class="deco-lg" src="../assets/img/title deco-right-lg.png" alt="deco">
      <img class="deco-sm" src="../assets/img/title deco-right-sm.png" alt="deco">
    </h3>
    <ul class="portfolioList">
      <li>
        <div class="container">
          <div class="contentProduct">
            <img src="../assets/img/homepage-work1.png" alt="星際旅行訂票平台">
          </div>
          <div class="contentText">
            <h4>星際旅行訂票平台</h4>
            <p>悠遊宇宙的夢想，從這裡開始實現</p>
            <div class="mark">
              <ul>
                <li>網頁設計</li>
                <li>響應式設計</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <hr>
            <a href="#" class="portfolioBtn">
              完整介紹
              <img src="../assets/img/arrow_forward.svg" alt="前往完整介紹">
            </a>
          </div>
        </div>
        <div class="portfolio-bg"></div>
      </li>
      <li>
        <div class="container">
          <div class="contentText">
            <h4>理財APP</h4>
            <p>連動帳戶與行動支付，讓 AI 提供您最好的理財建議</p>
            <div class="mark">
              <ul>
                <li>APP設計</li>
                <li>iOS</li>
                <li>React</li>
              </ul>
            </div>
            <hr>
            <a href="#" class="portfolioBtn">完整介紹
              <img src="../assets/img/arrow_forward.svg" alt="前往完整介紹">
            </a>
          </div>
        </div>
        <div class="portfolio-bg"></div>
      </li>
      <li>
        <div class="container">
          <div class="contentProduct">
            <img src="../assets/img/homepage-work3.png" alt="醫美診所官網">
          </div>
          <div class="contentText">
            <h4>醫美診所官網</h4>
            <p>永保青春的秘密，從粹究開始</p>
            <div class="mark">
              <ul>
                <li>網頁設計</li>
                <li>響應式設計</li>
                <li>WordPress</li>
              </ul>
            </div>
            <hr>
            <a href="#" class="portfolioBtn">完整介紹
              <img src="../assets/img/arrow_forward.svg" alt="前往完整介紹">
            </a>
          </div>
        </div>
        <div class="portfolio-bg"></div>
      </li>
    </ul>
  </section>
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
      <h3>想要合作或瞭解更多？</h3>
      <a href="#" class="serveBtn">
        詳細內容與合作流程
        <img src="../assets/img/arrow_forward.svg" alt="詳細內容與合作流程">
      </a>
    </div>
  </section>
  <section class="article">
    <div class="container">
      <h3 class="title">
        <img class="deco-lg" src="../assets/img/title deco-left-lg.png" alt="deco">
        <img class="deco-sm" src="../assets/img/title deco-left-sm.png" alt="deco">
        精選文章
        <img class="deco-lg" src="../assets/img/title deco-right-lg.png" alt="deco">
        <img class="deco-sm" src="../assets/img/title deco-right-sm.png" alt="deco">
      </h3>
      <!-- 電腦板顯示swiper -->
      <articleSwiper></articleSwiper>
      <!-- 手機板顯示 -->
      <ul class="articleMobile">
        <li>
          <a href="#">
            <img src="../assets/img/article-image1.png" alt="Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)">
            <div class="contentText">
              <h5>Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)</h5>
              <div class="mark">
                <p>UI/UX 新知</p>
                <p>2024/02/10</p>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/img/article-image2.png" alt="給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (下)">
            <div class="contentText">
              <h5>給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (下)</h5>
              <div class="mark">
                <p>UI/UX 新知</p>
                <p>2023/11/20</p>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/img/article-image3.png" alt="給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)">
            <div class="contentText">
              <h5>給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)</h5>
              <div class="mark">
                <p>UI/UX 新知</p>
                <p>2023/10/18</p>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <div class="articleBtn">
        <a href="#">更多文章
          <img src="../assets/img/arrow_forward.svg" alt="更多文章">
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/pages/index.scss';
</style>
