<template>
  <div class="slider-container">
    <swiper
      class="slider"
      :slidesPerView="3"
      :spaceBetween="30"
      navigation
      :modules="modules"
      loop
    >
      <swiper-slide class="slider__item" v-for="event in events" :key="event">
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
          <el-text
            class="slider__tag"
            v-for="tag in event.creation.tags"
            :key="tag"
            >{{ tag }}</el-text
          >
          <el-text class="slider__date">{{
            transformDate(event.dates)
          }}</el-text>
          <el-text class="slider__place">На 5 площадках </el-text>
        </el-link>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";
import { EffectFade, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
// import { Pagination, Navigation } from "swiper/modules";
// import { Navigation } from "swiper/modules";

export default {
  name: "SwiperProgramms",
  components: {
    Swiper,
    SwiperSlide,
  },
  // setup() {
  //   return {
  //     modules: [Navigation],
  //   };
  // },
  setup() {
    const swiper = useSwiper();

    return {
      swiper,
      modules: [EffectFade, Navigation],
    };
  },
  mounted() {
    this.getPrograms();
  },
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
    async getPrograms() {
      await fetch("https://www.afisha.ru/exports/new_year_trees_landing.xml", {
        mode: "no-cors",
        method: "get",
      }).then((response) => {
        console.log("%c%s", "color: #8c0038", response);
      });
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
.slider-container {
  max-width: 1318px;
  width: 100%;
  margin: 0 auto;
}

.swiper.slider {
  max-width: 1140px;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 88px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 300px;
  margin: 20px auto;
}
.append-buttons {
  text-align: center;
  margin-top: 20px;
}

.append-buttons button {
  display: inline-block;
  cursor: pointer;
  border: 1px solid #007aff;
  color: #007aff;
  text-decoration: none;
  padding: 4px 10px;
  border-radius: 4px;
  margin: 0 10px;
  font-size: 13px;
}
</style>
