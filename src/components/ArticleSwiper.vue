<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// import required modules
import { Pagination } from 'swiper/modules'
const modules = [Pagination]
</script>

<template>
        <swiper
    :slidesPerView="3"
    :spaceBetween="24"
    :pagination="{
      clickable: true,
    }"
    :modules="modules" class="articleSwiper">
    <swiper-slide>
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
    </swiper-slide>
    <swiper-slide>
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
    </swiper-slide>
    <swiper-slide>
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
    </swiper-slide>
    <swiper-slide>
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
    </swiper-slide>
    <swiper-slide>
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
    </swiper-slide>
    <swiper-slide>
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
    </swiper-slide>
  </swiper>
</template>
<style lang="scss">
@import '../assets/sass/components/_articleSwiper.scss';
</style>
