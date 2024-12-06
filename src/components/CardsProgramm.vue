<template>
  <!-- <div class="programm-container">
    <div class="programm-card" v-for="event in events" :key="event">
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
    </div>
  </div> -->

  <carousel ref="refCardsProgramm" class="programm-container" v-bind="config">
    <slide class="programm-card" v-for="event in events" :key="event">
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
  itemsToShow: 1.8,
  itemsToScroll: 1,
  gap: 10,
  snapAlign: "start",
  wrapAround: true,
  breakpointMode: "viewport",
  breakpoints: {
    800: {
      itemsToShow: 2,
      itemsToScroll: 2,
      snapAlign: "start",
      wrapAround: true,
      gap: 20,
    },
    1200: {
      itemsToShow: 3,
      itemsToScroll: 3,
      snapAlign: "start",
      wrapAround: true,
      gap: 25,
    },
    1350: {
      snapAlign: "start",
      itemsToShow: 4,
      itemsToScroll: 4,
      gap: 13,
      wrapAround: true,
    },
  },
};
</script>

<script>
export default {
  name: "CardsProgramm",
  data() {
    return {
      events: [
        {
          creation: {
            name: "Новогоднее цирковое представление у елки в ЦДРИ",
            image:
              "https://img01.rl0.ru/afisha/e945x-p0x51f1200x685q85i/s5.afisha.ru/mediastorage/c6/b8/78f43028492948a098bfa670b8c6.jpg",
            url: "https://www.afisha.ru/performance/novogodnee-cirkovoe-predstavlenie-u-elki-v-cdri-311629/",
          },
          dates: ["2024-12-21", "2024-12-22", "2024-12-28", "2024-12-29"],
          tags: ["Детские елки", "Детские", "Цирк"],
          minPrice: 1500,
        },
        {
          creation: {
            name: "Ледовая сказка «Щелкунчик и Мышиный король»",
            image:
              "https://img.rl0.ru/afisha/e945x-p0x0f1890x1080q85i/s3.afisha.ru/mediastorage/74/61/e89892700df44c9aa703eb8d6174.jpg",
            url: "https://www.afisha.ru/performance/ledovaya-skazka-shchelkunchik-i-myshiniy-korol-190013/",
          },
          dates: ["2024-12-28", "2024-12-29", "2025-01-03", "2025-01-04"],
          tags: [
            "Детские елки",
            "Детские",
            "Танцевальные",
            "Музыкальные",
            "Ледовые",
          ],
          minPrice: 1200,
        },
        {
          creation: {
            name: "Муми-тролль и Рождество",
            image:
              "https://img08.rl0.ru/afisha/e945x-p0x42f1024x585q85i/s2.afisha.ru/mediastorage/1b/26/c7afec791d834fbbac92c1d7261b.jpeg",
            url: "https://www.afisha.ru/performance/mumi-troll-i-rozhdestvo-116296/",
          },
          dates: [
            "2024-12-21",
            "2024-12-22",
            "2024-12-23",
            "2024-12-24",
            "2024-12-28",
            "2024-12-29",
          ],
          tags: ["Кукольные", "Детские елки", "Детские"],
          minPrice: 2300,
        },
        {
          creation: {
            name: "Щелкунчик",
            image:
              "https://img03.rl0.ru/afisha/e945x-p0x0f2018x1153q85i/s3.afisha.ru/mediastorage/59/ff/35a47b16b04744eeaf36979eff59.png",
            url: "https://www.afisha.ru/performance/shchelkunchik-266172/",
          },
          dates: [
            "2024-12-08",
            "2024-12-13",
            "2024-12-28",
            "2024-12-29",
            "2025-01-03",
          ],
          tags: ["Детские елки", "Детские"],
          minPrice: 2300,
        },
      ],
    };
  },
  methods: {
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
