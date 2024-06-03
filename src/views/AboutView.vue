<template>
  <div class="about">
    <div class="container">
      <h3 class="title">
                <img class="deco-lg" src="../assets/img/title deco-left-lg.png" alt="deco">
                <img class="deco-sm" src="../assets/img/title deco-left-sm.png" alt="deco">
                聯絡我
                <img class="deco-lg" src="../assets/img/title deco-right-lg.png" alt="deco">
                <img class="deco-sm" src="../assets/img/title deco-right-sm.png" alt="deco">
            </h3>
      <from>
        <label for="name">
          <p>
            姓名
          </p>
          <input type="text" name="name" id="name">
        </label>
        <label for="gender">
          <p>
            性別
          </p>
          <input type="radio" name="gender" id="male" value="male">男
          <input type="radio" name="gender" id="female" value="female">女
        </label>
        <label for="phone">
          <p>
            電話
          </p>
          <input type="tel" name="phone" id="phone">
        </label>
        <label for="email">
          <p>
            電子郵件
          </p>
          <input type="email" name="email" id="email">
        </label>
        <label for="ask">
          <p>
            詢問事項
          </p>
          <textarea name="ask" id="ask" cols="30" rows="10"></textarea>
        </label>
        <button type="submit">送出</button>
      </from>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/pages/about.scss';
</style>
