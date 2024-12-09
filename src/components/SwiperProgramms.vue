<template>
  <swiper
    ref="refSwiper"
    class="slider slider-swiper"
    :class="bottom ? 'slider-bottom programm-container' : ''"
    :slidesPerView="2"
    :slidesPerGroup="4"
    :spaceBetween="10"
    :lazy="true"
    v-loading="isLoading"
    :breakpoints="{
      '950': {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      '1160': {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      '1350': {
        slidesPerView: 4,
        spaceBetween: 12,
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
// import { Lazy } from "swiper/modules";
import "swiper/css";
// import { Navigation } from "swiper/modules";

export default {
  name: "SwiperProgramms",
  components: {
    Swiper,
    SwiperSlide,
  },
  created() {
    this.getPrograms();
  },
  setup() {
    const onSlideChange = () => {
      this.loadChunk();
    };
    return {
      onSlideChange,
    };
  },
  props: {
    bottom: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isLoading: false,
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
      eventList: [],
      allEvents: [],
      swiperContent: [],
      chunkSize: 6,
      offset: 0,
    };
  },
  methods: {
    async getPrograms() {
      this.isLoading = true;
      const res = await fetch("https://test-hgiuyfu83.lejnin.ru/get-feed", {
        method: "get",
        "Content-Type": "application/json; charset=utf-8",
      })
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          return res;
        })
        .then((data) => {
          return data;
        });

      // console.log("%c%s", "color: #1d5673", "res", res);

      res.events.forEach((event) => {
        // const eventItem = {};
        const eventItem = {
          creation: {
            name: event.creation.name,
            image: event.creation.image,
            url: event.creation.url,
          },
          dates: event.dates,
          tags: event.tags,
          minPrice: event.minPrice,
          place: event.place,
        };

        this.allEvents.push(eventItem);
      });

      this.loadChunk();

      if (this.allEvents && this.allEvents.length > 0) {
        if (this.offset < this.allEvents.length) {
          this.loadChunk();
        }
      } else {
        this.swiperContent = this.events;
      }
      // console.log("%c%s", "color: #731d6d", this.eventList);

      // const el = {
      //   creation: {
      //     image:
      //       "https://img05.rl0.ru/afisha/e945x-p0x80f2220x1268q85i/s4.afisha.ru/mediastorage/48/19/0391d872d4514b8da9a8e1331948.jpg",
      //     name: "Жара Media Awards",
      //     url: "https://www.afisha.ru/concert/zhara-media-awards-2214323/",
      //   },

      //   dates: ["2025-10-30"],
      //   minPrice: "2000",
      //   place: "Live Арена",
      //   tags: ["Поп", "Фестивали"],
      // };
      // this.eventList.push(el);

      // console.log("%c%s", "color: #731d6d", this.eventList.length);

      // const map = new Map();

      // for (const obj of this.eventList) {
      //   const name = obj.creation.name;
      //   if (map.has(name)) {
      //     const existingObj = map.get(name);
      //     Object.assign(existingObj.creation.dates, obj.creation.dates);
      //     Object.assign(existingObj.creation.minPrice, obj.creation.minPrice);
      //     Object.assign(existingObj.creation.place, obj.creation.place);
      //     Object.assign(existingObj.creation.tags, obj.creation.tags);
      //   } else {
      //     map.set(name, obj);
      //   }
      // }

      // const result = Array.from(map.values());
      // console.log(result);
      // console.log(result.length);

      this.isLoading = false;
    },
    loadChunk() {
      const chunk = this.allEvents.slice(
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
  },
};
</script>

<!-- <style>
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
</style> -->
