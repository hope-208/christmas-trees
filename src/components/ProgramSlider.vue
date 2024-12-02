<template>
  <!-- {{ programs }} -->

  <swiper
    :slides-per-view="3"
    :space-between="30"
    virtual
    :loop="true"
    :modules="[EffectFade]"
    effect="fade"
  >
    <swiper-slide v-for="event in events" :key="event">
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
        <el-text class="slider__date" v-for="date in event.dates" :key="date">{{
          date
        }}</el-text>
        <el-text class="slider__place">На 5 площадках </el-text>
      </el-link>
    </swiper-slide>
    <swiper-slide>Slide 1</swiper-slide>
  </swiper>

  <!-- <el-carousel
    class="slider"
    trigger="click"
    height="359px"
    type="card"
    cardScale="1"
    indicator-position="none"
    :autoplay="false"
    arrow="always"
  >
    <el-carousel-item class="slider__item" v-for="event in events" :key="event">
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
        <h5>{{ event.creation.name }}</h5>
        <el-text v-for="tag in event.creation.tags" :key="tag">{{
          tag
        }}</el-text>
        <el-text v-for="date in event.dates" :key="date">{{ date }}</el-text>
      </el-link>
    </el-carousel-item>
  </el-carousel> -->

  <!-- {{ activeSlide }}
  <div class="slider">
    <el-button
      id="prev"
      class="slider__button slider__button_prev"
      @click="handlePrevItem"
    >
      <img src="@/assets/img/arrow-slider-left.svg" alt="" />
    </el-button>

    <div id="carousel" style="overflow-x: hidden">
      <div id="content" class="slider__items">
        <div class="slider__item" v-for="event in events" :key="event">
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
            <el-text
              class="slider__date"
              v-for="date in event.dates"
              :key="date"
              >{{ date }}</el-text
            >
             <el-text
            v-if="event.places && event.places.length !== 0"
            class="slider__place"
            >{{
              event.places.length > 1
                ? `На ${event.places.length} площадках`
                : `На ${event.places.length} площадке`
            }}
          </el-text> 
          </el-link>
        </div>
      </div>
    </div>

    <el-button
      id="next"
      class="slider__button slider__button_next"
      @click="handleNextItem"
    >
      <img
        class="slider__button slider__button_icon"
        src="@/assets/img/arrow-slider-right.svg"
        alt=""
      />
    </el-button>
    <div id="demo" class="demo"></div>
  </div> -->
</template>

<script>
// import { Api } from "@/axios/api-fid.js";
// import axios from "axios";
// import xml2js from "xml2js";
// import array from "@/xml-parce.php";
// Import Swiper Vue.js components

export default {
  name: "ProgramSlider",
  data() {
    return {
      programs: [],
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
      // gap: 30,
      // content: null,
      // slides: null,
      // currentWidth: 0,
      // activeSlide: 0,
    };
  },
  mounted() {
    this.getPrograms();
    // this.content = document.getElementById("content");
    // this.slides = document.querySelectorAll(".slider__item");
    // this.currentWidth = this.slides[0].offsetWidth; // Получаем ширину слайда
    // this.slides[0].classList.add("slide-active");
    // this.activeSlide = 1;

    // console.log("%c%s", "color: #eeff00", this.currentWidth);
    // this.slides[0].forEach((slide) => {
    //   console.log("%c%s", "color: #ffa280", slide.offsetWidth);
    //   this.currentWidth = slide.offsetWidth; // Получаем ширину слайда
    // });
    // const response = await fetch(
    //   "https://www.afisha.ru/exports/new_year_trees_landing.xml",
    //   {
    //     mode: "no-cors",
    //     method: "get",
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //       "Content-Type": "application/json",
    //     },
    //   },
    // );
    // const xml = await response.text();
    // const parser = new xml2js.Parser();
    // parser.parseString(xml, (err, result) => {
    //   if (err) {
    //     console.error(err);
    //   } else {
    //     console.log("%c%s", "color: #00a3cc", result);
    //     // this.programs = result;
    //   }
    // });
  },

  methods: {
    // handleNextItem() {
    //   this.activeSlide++;
    //   if (this.activeSlide < this.slides.length - 1) {
    //     this.slides[this.activeSlide - 2].classList.remove("slide-active");

    //     this.slides[this.activeSlide - 1].classList.add("slide-active");
    //     this.content.style.transform = `translateX(-${(this.currentWidth + this.gap) * (this.activeSlide - 1)}px)`;
    //   } else {
    //     this.slides[this.activeSlide - 2].classList.remove("slide-active");
    //     this.activeSlide = 1;
    //     this.slides[this.activeSlide - 1].classList.add("slide-active");
    //     this.content.style.transform = `translateX(0)`;
    //   }
    // },
    // handlePrevItem() {
    //   this.activeSlide--;
    //   if (this.activeSlide == 0) {
    //     this.slides[this.activeSlide + 1].classList.remove("slide-active");
    //     this.activeSlide = this.slides.length;
    //     this.slides[this.activeSlide].classList.add("slide-active");
    //     this.content.style.transform = `translateX(${(this.currentWidth + this.gap) * (this.activeSlide - 1)}px)`;
    //   } else {
    //     this.slides[this.activeSlide - 1].classList.remove("slide-active");
    //     this.slides[this.activeSlide].classList.add("slide-active");
    //     this.content.style.transform = `translateX(0)`;
    //   }
    // },

    async getPrograms() {
      // console.log("%c%s", "color: #33cc99", array);
      // await fetch("https://www.afisha.ru/exports/new_year_trees_landing.xml", {
      //   mode: "no-cors",
      //   method: "get",
      // })
      //   .then((data) => {
      //     console.log("%c%s", "color: #e5de73", data);
      //     const parser = new DOMParser();
      //     const xmlDoc = parser.parseFromString(data, "text/xml");
      //     // Теперь вы можете работать с xmlDoc, как с обычным DOM-деревом
      //     console.log("%c%s", "color: #7f2200", xmlDoc);
      //   })
      //   .catch((error) => console.error(error));
      // this.data = result.data;
      // .then((xml) => {
      //   const parser = new xml2js.Parser();
      //   parser.parseString(xml, (err, result) => {
      //     if (err) {
      //       console.error(err);
      //     } else {
      //       console.log(result);
      //     }
      //   });
      // });
      //  const response = await fetch(
      //         "https://www.afisha.ru/exports/new_year_trees_landing.xml",
      //         {
      //           mode: "no-cors",
      //           method: "get",
      //           headers: {
      //             "Access-Control-Allow-Origin": "*",
      //             "Content-Type": "application/json",
      //           },
      //         },
      //       );
      // var parseString = xml2js.parseString;
      // const response = await fetch(
      //   "https://www.afisha.ru/exports/new_year_trees_landing.xml",
      //   {
      //     mode: "no-cors",
      //     method: "get",
      //     headers: {
      //       "Access-Control-Allow-Origin": "*",
      //       "Content-Type": "application/json",
      //     },
      //   },
      // );
      // .then((res) => {
      //   console.log("%c%s", "color: #0088cc", res);
      //   // console.log("%c%s", "color: #0088cc", res.text());
      //   // xml2js.parseString(response, (err, result) => {
      //   //   console.log("%c%s", "color: #917399", err, result);
      //   //   if (err) {
      //   //     //Do something
      //   //   } else {
      //   //     this.events = result;
      //   //   }
      //   // });
      // });
      // console.log("%c%s", "color: #d90000", response.newYearTrees);
      // const xml = await response.text();
      // console.log("%c%s", "color: #ffa640", xml);
      // const parser = new xml2js.Parser();
      // console.log("%c%s", "color: #00b300", parser);
      // parser.parseString(xml, (err, result) => {
      //   if (err) {
      //     console.error(err);
      //   } else {
      //     this.data = result;
      //   }
      // });
      // console.log("%c%s", "color: #e50000", xml, parser);
      // parser.parseString(xml, (err, result) => {
      //   if (err) {
      //     console.error(err);
      //   } else {
      //     console.log("%c%s", "color: #00a3cc", result);
      //     // this.programs = result;
      //   }
      // });
      //   await fetch("https://www.afisha.ru/exports/new_year_trees_landing.xml", {
      //     mode: "no-cors",
      //     method: "get",
      //     headers: {
      //       "Access-Control-Allow-Origin": "*",
      //       "Content-Type": "application/json",
      //     },
      //   })
      //     .then(function (response) {
      //       console.log("%c%s", "color: #ff0000", response.text());
      //       // использовать данные в компоненте ProgramSlider
      //       // this.$refs.programSlider.setData(response.data);
      //     })
      //     .catch(function (error) {
      //       // handle error
      //       console.error(error);
      //     });
    },
  },
};
</script>
