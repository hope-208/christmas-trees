<template>
  <header class="header">
    <div class="header__overlay"></div>
    <div class="header__title-container">
      <el-text tag="h1" class="header__title"
        >Ёлки всех размеров
        <el-text tag="h1" class="header__title header__title_accent"
          >на афише</el-text
        ></el-text
      >
      <el-text tag="h3" class="header__subtitle"
        >Восемь самых новогодних подарков для всех, кто покупает билеты на
        Ёлки!</el-text
      >
    </div>
    <div class="header__image-container">
      <img
        src="../assets/img/header-stars.svg"
        alt="Фон блока: звёзды."
        class="header__image-back-stars"
      />
      <img
        src="../assets/img/header-star.svg"
        alt="Фон иллюстрации."
        class="header__image-back"
      />
      <img
        src="../assets/img/header-img.svg"
        alt="Иллюстрация."
        class="header__image"
      />
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderItem",
};
</script>
