<script setup>
const props = defineProps({
  show: Boolean,
  data: Object
})
console.log(props)

const getImageUrl = (imgSrc) => {
  const path = new URL(`/src/assets/img/${imgSrc}`, import.meta.url).href
  return path
}
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
            <div class="modal-close">
                <button
                  class="modal-default-button"
                  @click="$emit('close')"
                >
                <img src="../assets/img/menu_close.svg" alt="">
                </button>
            </div>
            <div class="title">
                <h3>
                    {{ data.title }}
                </h3>
                <p>
                    {{ data.slogn }}
                </p>
            </div>
            <div class="description">
                <div class="text">
                    <p>
                        {{  data.content[0]  }}
                        <br>
                        {{ data.content[1] }}
                    </p>
                </div>
                <hr>
                <div class="text">
                    <p>設計原則<span class="mobile-hide">：</span><span class="block"></span>{{ data.design }}</p>
                    <p class="mark">開發方式<span class="mobile-hide">：</span><span class="block"></span>{{ data.mark }}</p>
                </div>
            </div>
        </div>

        <div class="modal-body">
            <img :src="getImageUrl(data.imgs[0])" alt="主視覺">
            <h4>主視覺</h4>
            <p>可直接設定日期、起迄星球、張數，快速查詢可購買的票券。</p>
            <img :src="getImageUrl(data.imgs[1])" alt="主視覺">
            <h4>推薦查詢</h4>
            <p>給予最快起飛，以及最熱門的景點推薦，協助使用者進行選擇。</p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/components/modal.scss';
</style>
