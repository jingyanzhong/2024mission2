import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('blogCategory', () => {
  const category = ref('all')
  return { category }
})
