<template>
  <carousel ref="refCardsProgramm" class="programm-container" v-bind="config">
    <slide class="programm-card" v-for="event in swiperContent" :key="event">
      <el-link
        class="programm-card__contant"
        :href="event.creation.url"
        target="_blank"
      >
        <div class="slider__capture">
          <el-image
            class="slider__img"
            :src="event.creation.image"
            fit="cover"
          />
          <el-tag class="slider__price">от {{ event.minPrice }} ₽</el-tag>
        </div>
        <h5 class="slider__title">{{ event.creation.name }}</h5>
        <el-row>
          <el-text class="slider__tag">{{ event.tags.join(", ") }}</el-text>
        </el-row>
        <el-text class="slider__date">{{ transformDate(event.dates) }}</el-text>
        <el-text class="slider__place">На 5 площадках </el-text>
      </el-link>
    </slide>
  </carousel>

  <el-link
    class="programm-container__button-link"
    href="https://www.afisha.ru/msk/new-year-for-kids/"
    target="_blank"
    >Смотреть все</el-link
  >
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
// https://vue3-carousel.ismail9k.com/

const config = {
  itemsToShow: 2,
  itemsToScroll: 1,
  gap: 10,
  snapAlign: "start",
  wrapAround: true,
  breakpointMode: "viewport",
  breakpoints: {
    950: {
      snapAlign: "start",
      itemsToShow: 2,
      itemsToScroll: 2,
      gap: 30,
    },
    1370: {
      snapAlign: "center",
      itemsToShow: 3,
      itemsToScroll: 3,
      gap: 30,
    },
  },
};
</script>

<script>
export default {
  name: "CardsProgramm",
  props: {
    list: { type: Array, default: () => [] },
    testData: { type: Array, default: () => [] },
  },
  mounted() {
    if (window.innerWidth > 950)
      window.addEventListener("resize", () => {
        this.$refs.refCardsProgramm.value.update();
      });
  },
  watch: {
    list(newVal) {
      if (newVal && newVal.length > 0) {
        this.loadChunk();
      } else {
        this.swiperContent = this.testData;
      }
      return newVal;
    },
  },
  unmounted() {
    window.removeEventListener("resize", () => {
      this.$refs.refCardsProgramm.value.update();
    });
  },
  data() {
    return {
      swiperContent: [],
      chunkSize: 6,
      offset: 0,
    };
  },
  methods: {
    loadChunk() {
      const chunk = this.list.slice(this.offset, this.offset + this.chunkSize);
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
  },
};
</script>
