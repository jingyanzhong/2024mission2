import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMobileMenuStore = defineStore('mobileMenuStore', () => {
  const menuToggle = ref(false)

  function bodyAddStyle () {
    const bodyDom = document.getElementById('hide-m')
    const menuBgDom = document.querySelector('.menu-m-bg')
    if (menuToggle.value === true) {
      bodyDom.style.overflow = 'hidden'
      // bodyDom.style.background = 'rgba(0,0,0,.7)'
      bodyDom.style.position = 'relative'
      menuBgDom.style.position = 'absolute'
      menuBgDom.style.top = '0'
      menuBgDom.style.bottom = '0'
      menuBgDom.style.left = '0'
      menuBgDom.style.right = '0'
      menuBgDom.style.background = 'rgba(0,0,0,.7)'
      menuBgDom.style.zIndex = '10'
    } else {
      bodyDom.removeAttribute('style')
      menuBgDom.removeAttribute('style')
    }
  }

  return { menuToggle, bodyAddStyle }
})
