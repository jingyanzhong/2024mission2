import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

export const useNavStore = defineStore('navStore', () => {
  const router = useRoute()
  const nav = ref('')

  function curNav () {
    const curPath = router.path
    switch (curPath) {
      case '/':
        nav.value = '首頁'
        break
      case '/work':
        nav.value = '作品集'
        break
      case '/serve':
        nav.value = '服務項目'
        break
      case '/blog':
        nav.value = '部落格'
        break
      case '/about':
        nav.value = '聯絡我'
        break
    }
  }

  return { nav, curNav }
})
