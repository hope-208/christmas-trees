<template>
  <carousel ref="refCarousel" class="slider slider-carousel" v-bind="config">
    <slide class="slider__item" v-for="event in swiperContent" :key="event">
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
          />
          <el-tag class="slider__price">от {{ event.minPrice }} ₽</el-tag>
        </div>
        <h5 class="slider__title">{{ event.creation.name }}</h5>
        <el-text class="slider__tag">{{ event.tags.join(", ") }}</el-text>
        <el-text class="slider__date">{{ transformDate(event.dates) }}</el-text>
        <el-text class="slider__place">На 5 площадках </el-text>
      </el-link>
    </slide>

    <template #addons>
      <el-button
        class="slider__button slider__button_prev carousel__prev"
        @click="$refs.refCarousel.prev()"
      >
        <img
          class="slider__button_img"
          src="@/assets/img/arrow-slider-left.svg"
          alt=""
        />
      </el-button>
      <el-button
        class="slider__button slider__button_next carousel__next"
        @click="($refs.refCarousel.next(), loadChunk())"
      >
        <img
          class="slider__button_img"
          src="@/assets/img/arrow-slider-right.svg"
          alt=""
        />
      </el-button>
    </template>
  </carousel>
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
      mouseDrag: false,
      touchDrag: false,
    },
    1370: {
      snapAlign: "start",
      itemsToShow: 3,
      itemsToScroll: 3,
      gap: 30,
      mouseDrag: false,
      touchDrag: false,
    },
  },
};
</script>

<script>
export default {
  name: "CarouselItem",
  components: {
    Carousel,
    Slide,
  },
  props: {
    list: { type: Array, default: () => [] },
    testData: { type: Array, default: () => [] },
  },
  mounted() {
    // if (window.innerWidth > 950) {
    //   window.addEventListener("resize", () => {
    //     this.$refs.refCarousel.value.update();
    //   });
    // }

    if (this.list && this.list.length > 0) {
      this.loadChunk();
    } else {
      this.swiperContent = this.testData;
    }
  },
  // unmounted() {
  //   window.removeEventListener("resize", () => {
  //     this.$refs.refCarousel.value.update();
  //   });
  // },
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

<style>
.carousel__viewport {
  order: 2;
}

@media (max-width: 600px) {
  .carousel__viewport {
    max-width: 100%;
  }
}
/* .carousel__track {
  align-items: flex-start;
} */
</style>
