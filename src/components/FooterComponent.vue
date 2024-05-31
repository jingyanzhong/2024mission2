<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
    <footer>
        <div class="container">
            <div class="info">
                <h2>
                    <RouterLink to="/">Noel</RouterLink>
                </h2>
                <p>
                    若有數位產品設計和開發相關問題
                    <br>
                    歡迎填寫表單，或直接與我聯絡！
                </p>
                <a href="mailto:service@hexschool.com">service@hexschool.com</a>
            </div>
            <div class="otherLink">
                <ul>
                    <li><a href="/"><img src="../assets/img/list.png" alt="填寫表單">填寫表單</a></li>
                    <li><a href="/"><img src="../assets/img/instagram.svg" alt="hexschool_demo">hexschool_demo</a></li>
                    <li><a href="/"><img src="../assets/img/facebook.svg" alt="hexschoolTW">hexschoolTW</a></li>
                </ul>
            </div>
        </div>
    </footer>
</template>
