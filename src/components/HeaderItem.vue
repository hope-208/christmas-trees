<template>
  <header class="header">
    <div class="header__container">
      <div class="header__title-container">
        <el-text tag="h1" class="header__title"
          >ёлки всех размеров
          <el-text tag="h1" class="header__title header__title_accent"
            >на&nbsp;афише</el-text
          ></el-text
        >
        <el-text tag="h3" class="header__subtitle"
          >Восемь самых новогодних подарков для всех, кто покупает
          билеты&nbsp;на&nbsp;Ёлки!</el-text
        >
      </div>
      <el-image
        :src="headerImgSmall"
        alt="Иллюстрация."
        class="header__image"
        loading="lazy"
      />
      <!-- <img :src="headerImgGifSmall" alt="Иллюстрация." class="header__image" /> -->
    </div>
  </header>
</template>

<script>
// import headerImgGifSmall from "@/assets/img/afisha-small.gif";
import headerImgSmall from "@/assets/img/header-img.svg";

export default {
  name: "HeaderItem",
  data() {
    return {
      // headerImgGifSmall,
      headerImgSmall,
      windowWidth: 1440,
    };
  },
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>
