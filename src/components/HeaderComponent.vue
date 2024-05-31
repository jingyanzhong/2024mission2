<script setup>
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import { onMounted } from 'vue'
import { useNavStore } from '../stores/nav.js'
import { useMobileMenuStore } from '../stores/mobileMenu.js'

// 頁面重新整理時，判斷當前路由，為menu加上active
const store = useNavStore()
const { nav } = storeToRefs(store)
const { curNav } = store
onMounted(() => {
  setTimeout(() => {
    curNav()
  }, 500)
})

// 判斷手機板漢堡選單打開或關閉
const menuStore = useMobileMenuStore()
const { menuToggle } = storeToRefs(menuStore)
const { bodyAddStyle } = menuStore

</script>

<template>
    <header>
        <div class="container">
            <div class="logo">
                <h1><RouterLink to="/">Noel</RouterLink></h1>
            </div>
            <nav :class="{ 'active' : menuToggle === true }">
                <ul>
                    <li>
                        <RouterLink to="/" @click="nav = '首頁'" :class="{ 'active': nav === '首頁' }">首頁
                            <span class="upperLeft"></span>
                            <span class="upperRight"></span>
                            <span class="lowerLeft"></span>
                            <span class="lowerRight"></span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/work" @click="nav = '作品集'" :class="{ 'active': nav === '作品集' }">作品集
                            <span class="upperLeft"></span>
                            <span class="upperRight"></span>
                            <span class="lowerLeft"></span>
                            <span class="lowerRight"></span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/serve"  @click="nav = '服務項目'" :class="{ 'active': nav === '服務項目' }">服務項目
                            <span class="upperLeft"></span>
                            <span class="upperRight"></span>
                            <span class="lowerLeft"></span>
                            <span class="lowerRight"></span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/blog" @click="nav = '部落格'" :class="{ 'active': nav === '部落格' }">部落格
                            <span class="upperLeft"></span>
                            <span class="upperRight"></span>
                            <span class="lowerLeft"></span>
                            <span class="lowerRight"></span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about" @click="nav = '聯絡我'" :class="{ 'active': nav === '聯絡我' }">聯絡我
                            <span class="upperLeft"></span>
                            <span class="upperRight"></span>
                            <span class="lowerLeft"></span>
                            <span class="lowerRight"></span>
                        </RouterLink>
                    </li>
                </ul>
            </nav>
            <div class="nav-toggle mobile-show" @click="[menuToggle = true,bodyAddStyle()]" :class="{ 'hide' : menuToggle === true }">
                <img src="../assets/img/menu_list.svg" alt="menu-list">
            </div>
            <div class="nav-toggle menu-close" @click="[menuToggle = false, bodyAddStyle()]" :class="{ 'active' : menuToggle === true }">
                <img src="../assets/img/menu_close.svg" alt="menu-close">
            </div>
        </div>
    </header>
</template>
