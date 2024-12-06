<template>
  <header class="header">
    <div class="header__overlay"></div>
    <div class="header__container">
      <div class="header__title-container">
        <el-text tag="h1" class="header__title"
          >Ёлки всех размеров
          <el-text tag="h1" class="header__title header__title_accent"
            >на&nbsp;афише</el-text
          ></el-text
        >
        <el-text tag="h3" class="header__subtitle"
          >Восемь самых новогодних подарков для всех, кто покупает
          билеты&nbsp;на&nbsp;Ёлки!</el-text
        >
      </div>
      <div class="header__image-container">
        <img :src="headerImg" alt="Иллюстрация." class="header__image" />
      </div>
    </div>
  </header>
</template>

<script>
import headerImg from "@/assets/img/header-img.svg";
export default {
  name: "HeaderItem",
  data() {
    return {
      headerImg,
    };
  },
};
</script>
