<template>
  <div :ref="refCurrent" class="slider" :class="name" :id="name">
    <el-button
      v-show="btn"
      :id="`prev-${name}`"
      class="slider__button slider__button_prev"
      :disabled="offsetSlider == 0"
      @click="handleChageSlides(1)"
    >
      <img
        class="slider__button_img"
        src="@/assets/img/arrow-slider-left.svg"
        alt="Стрелка влево. Кнопка: предыдущий слайд."
      />
    </el-button>

    <div class="slider__content-wrapper">
      <div
        :ref="`refCarosel-${name}`"
        class="slider__carosel"
        :id="`carosel-${name}`"
      >
        <div
          class="slide"
          :class="`slide__${name}`"
          v-for="(event, index) in swiperContent"
          :key="index"
        >
          <el-link
            class="slider__content"
            :href="event.creation.url"
            target="_blank"
          >
            <div class="slider__capture">
              <el-image
                class="slider__img"
                :src="event.creation.image"
                fit="cover"
                :lazy="true"
              />
              <el-tag class="slider__price">от {{ event.minPrice }} ₽</el-tag>
            </div>
            <h5 class="slider__title">{{ event.creation.name }}</h5>
            <el-text class="slider__tag">{{ event.tags.join(", ") }}</el-text>
            <el-text class="slider__date">{{
              transformDate(event.dates)
            }}</el-text>
            <el-text
              v-if="event.places && event.places.length > 0"
              class="slider__place"
              >{{
                event.places && event.places.length > 1
                  ? `На ${event.places.length} площадках`
                  : `${event.places[0]}`
              }}</el-text
            >
          </el-link>
        </div>
      </div>
    </div>
    <el-button
      v-show="btn"
      :id="`next-${name}`"
      class="slider__button slider__button_next"
      @click="handleChageSlides(-1)"
    >
      <img
        class="slider__button_img"
        src="@/assets/img/arrow-slider-right.svg"
        alt="Стрелка вправо. Кнопка: следующий слайд."
      />
    </el-button>
  </div>

  <el-link
    v-show="link || linkOnlyMobile"
    class="slider__button-link programm-container__button-link"
    :class="linkOnlyMobile ? 'slider__button-link_only-mobile' : ''"
    href="https://www.afisha.ru/msk/new-year-for-kids/"
    target="_blank"
    >Смотреть все</el-link
  >
</template>

<script>
export default {
  name: "CustomSlider",
  props: {
    name: {
      type: String,
      required: true,
    },
    btn: { type: Boolean, default: false },
    link: { type: Boolean, default: false },
    linkOnlyMobile: { type: Boolean, default: false },
    slides: { type: Array, default: () => [], required: true },
    testData: { type: Array, default: () => [], required: true },
  },
  mounted() {
    if (this.slides && this.slides.length > 0) {
      this.loadChunk();
    } else {
      this.swiperContent = this.testData;
    }
  },
  data() {
    return {
      refCurrent: `refSlider${this.name}`,
      swiperContent: [],
      chunkSize: 3,
      offset: 0,
      offsetSlider: 0,
      isAdding: false,
      widthSlide: 360,
      countViewSlide: 3,
      gap: 30,
      isImageLoaded: false,
    };
  },
  methods: {
    loadChunk() {
      const chunk = this.slides.slice(
        this.offset,
        this.offset + this.chunkSize,
      );
      this.offset += this.chunkSize;

      this.swiperContent.push(...chunk);
    },
    transformDate(dates) {
      const uniqueDates = dates
        .map((date) => {
          const [year, month] = date.split("-");
          return {
            month: new Date(`${year}-${month}-01`).toLocaleString("default", {
              month: "long",
            }),
            year: parseInt(year),
          };
        })
        .filter((date, index, array) => {
          return (
            array.findIndex(
              (item) => item.month === date.month && item.year === date.year,
            ) === index
          );
        });

      let str = "";
      uniqueDates.forEach((item) => {
        str += item.month + " " + item.year + ", ";
      });

      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    getParamSlider() {
      if (this.name == "topEvents") {
        if (window.innerWidth >= 1350) {
          this.widthSlide = 360;
          this.countViewSlide = 3;
          this.gap = 30;
        } else if (window.innerWidth >= 950) {
          this.countViewSlide = 2;
        } else {
          this.widthSlide = 197;
          this.countViewSlide = 1;
          this.gap = 10;
        }
      }
    },
    handleChageSlides(dir) {
      if (this.isAdding) return;
      this.isAdding = true;
      this.loadChunk();
      this.getParamSlider();

      const sliderDom = document.getElementById(`carosel-${this.name}`);

      console.log("%c%s", "color: #00ff88", "Слайдер: ", sliderDom);

      sliderDom.style.transform = `translateX(${this.offsetSlider + dir * this.countViewSlide * this.widthSlide - this.gap * this.countViewSlide}px)`;

      this.offsetSlider +=
        dir * this.countViewSlide * this.widthSlide -
        this.gap * this.countViewSlide;

      console.log("%c%s", "color: #73998c", this.offsetSlider);
      this.isAdding = false;
    },
  },
};
</script>

<style lang="sass">
.slider
  max-width: 1318px
  width: 100%
  margin: 0 auto
  padding: 0
  display: flex
  align-items: center
  gap: 47px


  @media (max-width: 1370px)
    max-width: 930px

  @media (max-width: 949px)
    justify-content: center
    margin: 0 0 0 auto
    padding: 0

  @media (max-width: 600px)
    max-width: 98%
    margin: 0 0 0 10px
    padding: 0

  &__content-wrapper
    max-width: 1140px
    width: 100%
    margin: 0 auto
    padding: 0
    display: flex
    align-items: flex-start
    justify-content: flex-start
    overflow: hidden

  &__carosel
    width: 100%
    margin: 0 auto
    padding: 0
    display: flex
    align-items: flex-start
    justify-content: flex-start
    gap: 30px
    transition: transform 1s ease
    animation: 5s linear 0s infinite normal none running all
    transition-delay: 1s

  &__button
    width: 41px
    height: 236px
    padding: 0
    margin: 0
    display: flex
    align-items: center
    justify-content: center
    border-radius: 0
    background-color: transparent
    border: 0
    box-sizing: border-box

    &:hover,
    &:disabled,
    &:disabled:hover
      background-color: transparent
      border-color: transparent
      color: transparent
      outline: none

    &:disabled
      opacity: 0.5

    &_img
      width: 100%

  &__button-link

    &_only-mobile
      display: none

      @media (max-width: 950px)
        display: block
        max-width: 94%
        width: 100%
        max-height: 56px
        height: 100%
        padding: 16px 0
        margin: 34px auto 0
        font-family: Afisha Display
        font-size: 21px
        color: #fff
        background-color: #000
        border-radius: 60px
        text-align: center
        box-sizing: border-box

        &:hover
          color: #fff
          text-decoration: none
          outline-offset: 0
          background-color: #A8A8A8

        &.is-underline::after,
        &.is-underline:hover::after
          border: none

.slide
  max-width: 360px
  width: 100%
  display: flex
  flex-direction: column
  align-items: flex-start
  box-sizing: border-box

  @media (max-width: 949px)
    max-width: 197px
</style>
