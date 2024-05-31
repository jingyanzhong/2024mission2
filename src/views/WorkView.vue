<script setup>
import Modal from '../components/ModalComponent.vue'
import { ref } from 'vue'
const portfolioData = ref([
  {
    title: '星際旅行訂票平台',
    slogn: '悠遊宇宙的夢想，從這裡開始實現',
    imgs: ['modal-image1.png', 'modal-image2.png'],
    content: ['STAR TRAVEL 為 KK 公司宇宙旅行的購票網站。', '主要從地球出發，目的地包含月球、火星、水星、木星；未來太空轉運站建置完畢，將再擴增目的地土星和金星。'],
    mark: 'Bootstrap、Javascript、RWD',
    design: '宇宙旅行、深色背景、強烈視覺效果'
  }
])
const curData = ref('')
const showModal = ref(false)
const bodyDom = document.getElementById('hide-m')
function openModal (index) {
  showModal.value = true
  curData.value = portfolioData.value[index]
  bodyDom.style.overflow = 'hidden'
}

function closeModal () {
  showModal.value = false
  bodyDom.removeAttribute('style')
}
</script>
<template>
    <section class="workTitle">
        <div class="slogn">
            <p>
                讓使用者在觀賞與使用的旅程中，
                <span class="block"></span>
                發現<span class="deco">設計的價值</span>
            </p>
            <p>
                而我在設計與開發的過程中，
                <span class="block"></span>
                看見<span class="deco">自己的價值</span>
            </p>
        </div>
        <div class="contentText">
            <ul class="list">
                <li>
                    <h5>2B經驗</h5>
                    <p>內部監控系統、庫存系統、採購系統、行銷整合系統</p>
                </li>
                <li>
                    <h5>2C經驗</h5>
                    <p>跨國美妝保養電商、個人品牌網站、醫美網站、電子商務</p>
                </li>
            </ul>
        </div>
    </section>
    <section class="workCard">
        <div class="container">
            <ul class="cardList">
                <li @click="openModal(0)">
                <img src="../assets/img/work-image1.png" alt="星際旅行訂票平台">
                <div class="cardContent">
                    <h3>
                        星際旅行訂票平台
                    </h3>
                    <p>悠遊宇宙的夢想，從這裡開始實現</p>
                    <div class="mark">
                        <ul>
                            <li>網頁設計</li>
                            <li>響應式設計</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                </div>
                </li>
                <li @click="openModal(0)">
                <img src="../assets/img/work-image2.png" alt="理財App">
                <div class="cardContent">
                    <h3>
                        理財App
                    </h3>
                    <p>連動帳戶與行動支付，讓 AI 提供您最好的理財建議</p>
                    <div class="mark">
                        <ul>
                            <li>APP設計</li>
                            <li>iOS</li>
                            <li>React</li>
                        </ul>
                    </div>
                </div>
                </li>
                <li @click="openModal(0)">
                <img src="../assets/img/work-image3.png" alt="醫美診所官網">
                <div class="cardContent">
                    <h3>
                        醫美診所官網
                    </h3>
                    <p>永保青春的秘密，從粹究開始</p>
                    <div class="mark">
                        <ul>
                            <li>網頁設計</li>
                            <li>響應式設計</li>
                            <li>WordPress</li>
                        </ul>
                    </div>
                </div>
                </li>
                <li @click="openModal(0)">
                <img src="../assets/img/work-image4.png" alt="美美美早餐店 POS 機 UI Design">
                <div class="cardContent">
                    <h3>
                        美美美早餐店 POS 機 UI Design
                    </h3>
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
                <li @click="openModal(0)">
                <img src="../assets/img/work-image5.png" alt="電影院訂票系統">
                <div class="cardContent">
                    <h3>
                        電影院訂票系統
                    </h3>
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
                <li @click="openModal(0)">
                <img src="../assets/img/work-image6.png" alt="巧克巧克形象官網設計">
                <div class="cardContent">
                    <h3>
                        巧克巧克形象官網設計
                    </h3>
                    <p>三步驟完成訂票，電腦手機都支援</p>
                    <div class="mark">
                        <ul>
                            <li>UI設計</li>
                            <li>設計系統</li>
                            <li>網路電商</li>
                        </ul>
                    </div>
                </div>
                </li>
            </ul>
        </div>
    </section>
    <Teleport to="body">
        <modal :show="showModal" :data="curData" @close="closeModal()"></modal>
    </Teleport>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/pages/work.scss';
</style>
