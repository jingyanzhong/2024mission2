<script setup>
import { storeToRefs } from 'pinia'
import { useCategoryStore } from '../stores/blogCategory.js'

const categoryStore = useCategoryStore()
const { category } = storeToRefs(categoryStore)
</script>

<template>
        <ul class="menu">
            <li><a href="#" @click.prevent="category = 'all'" :class="{ 'active': category === 'all' }">全部文章</a></li>
            <li><a href="#" @click.prevent="category = 'UI/UX 新知'" :class="{ 'active': category === 'UI/UX 新知' }">UI/UX
                    新知</a></li>
            <li><a href="#" @click.prevent="category = '數位產品設計'" :class="{ 'active': category === '數位產品設計' }">數位產品設計</a>
            </li>
            <li><a href="#" @click.prevent="category = '平面設計'" :class="{ 'active': category === '平面設計' }">平面設計</a></li>
            <li><a href="#" @click.prevent="category = '前端開發'" :class="{ 'active': category === '前端開發' }">前端開發</a></li>
        </ul>
</template>

<style lang="scss">
@import '@/assets/sass/components/blogMenu.scss';
</style>
