<template>
  <swiper
    ref="refSwiper"
    class="slider slider-swiper"
    :class="bottom ? 'slider-bottom programm-container' : ''"
    v-loading="isLoading"
    :slidesPerView="'auto'"
    :slidesPerGroup="1"
    :spaceBetween="10"
    :edgeSwipeThreshold="0"
    :centeredSlides="false"
    :lazy="true"
    :breakpoints="{
      '430': {
        slidesPerView: 'auto',
        slidesPerGroup: 2,
        spaceBetween: 10,
        edgeSwipeThreshold: 0,
        centeredSlides: false,
      },
      '650': {
        slidesPerView: 'auto',
        slidesPerGroup: 3,
        spaceBetween: 10,
        edgeSwipeThreshold: 0,
        centeredSlides: false,
      },
      '870': {
        slidesPerView: 'auto',
        slidesPerGroup: 5,
        spaceBetween: 10,
        edgeSwipeThreshold: 0,
        centeredSlides: false,
      },
      '950': {
        slidesPerView: 'auto',
        slidesPerGroup: 4,
        spaceBetween: 10,
        edgeSwipeThreshold: 0,
        centeredSlides: false,
      },
      '1160': {
        slidesPerView: 'auto',
        slidesPerGroup: 4,
        spaceBetween: 10,
        edgeSwipeThreshold: 0,
        centeredSlides: false,
      },
      '1350': {
        slidesPerView: 'auto',
        slidesPerGroup: 4,
        spaceBetween: 12,
        edgeSwipeThreshold: 0,
        centeredSlides: false,
      },
    }"
    @slideChange="loadChunk"
  >
    <swiper-slide
      :class="bottom ? 'programm-card' : 'slider__item'"
      v-for="event in swiperContent"
      :key="event"
    >
      <el-link
        class="slider__content"
        :class="bottom ? 'programm-card__contant' : ''"
        :href="event.creation.url"
        target="_blank"
      >
        <div class="slider__capture">
          <el-image
            class="slider__img"
            :class="bottom ? 'programm-card__img' : ''"
            :src="event.creation.image"
            fit="cover"
            loading="lazy"
            :scroll-container="'.swiper-wrapper'"
          />
          <div class="swiper-lazy-preloader"></div>
          <el-tag class="slider__price">от {{ event.minPrice }} ₽</el-tag>
        </div>
        <h5 class="slider__title">{{ event.creation.name }}</h5>
        <el-text
          class="slider__tag"
          v-for="tag in event.creation.tags"
          :key="tag"
          >{{ tag }}</el-text
        >
        <el-text class="slider__date">{{ transformDate(event.dates) }}</el-text>
        <el-text class="slider__place">На 5 площадках </el-text>
      </el-link>
    </swiper-slide>
  </swiper>

  <el-link
    class="slider__button-link"
    href="https://www.afisha.ru/msk/new-year-for-kids/"
    target="_blank"
    >Смотреть все</el-link
  >
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default {
  name: "SwiperProgramms",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    bottom: {
      type: Boolean,
      default: false,
    },
    list: { type: Array, default: () => [] },
    testData: { type: Array, default: () => [] },
  },
  setup() {
    const onSlideChange = () => {
      this.loadChunk();
    };
    return {
      onSlideChange,
    };
  },
  mounted() {
    if (this.list && this.list.length > 0) {
      this.loadChunk();
    } else {
      this.swiperContent = this.testData;
    }
  },

  updated() {
    if (this.swiperContent && this.swiperContent.length == 5) {
      if (this.list && this.list.length > 0) {
        this.loadChunk();
      } else {
        this.swiperContent = this.testData;
      }
    }
  },
  data() {
    return {
      isLoading: false,
      swiperContent: [],
      chunkSize: 6,
      offset: 0,
    };
  },
  methods: {
    loadChunk() {
      this.isLoading = true;
      if (this.offset == 0) {
        this.swiperContent = [];
      }
      const chunk = this.list.slice(this.offset, this.offset + this.chunkSize);
      this.offset += this.chunkSize;

      this.swiperContent.push(...chunk);
      this.isLoading = false;
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
  },
};
</script>
