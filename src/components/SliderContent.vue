<template>
  <carousel ref="refSliderProgram" class="slider-programm" v-bind="config">
    <slide
      class="slider-programm__item"
      v-for="programm in programms"
      :key="programm"
    >
      <div class="slider-programm__text-container">
        <img
          v-if="programm.logo"
          class="slider-programm__logo"
          :src="programm.logo"
          alt="Логотип."
        />
        <el-text class="slider-programm__title">{{ programm.title }}</el-text>
        <el-text class="slider-programm__desc">{{
          programm.description
        }}</el-text>
      </div>
      <div class="slider-programm__img-container">
        <el-row class="slider-programm__row">
          <el-tag
            class="slider-programm__tag"
            v-for="tag in programm.tags"
            :key="tag"
            >{{ tag }}</el-tag
          >
        </el-row>

        <el-image
          :src="programm.image"
          fit="contain"
          alt="Иллюстрация мероприятия."
          class="slider-programm__image"
          loading="lazy"
        />
      </div>
    </slide>

    <template #addons>
      <el-button
        class="slider__button slider__button_prev"
        @click="$refs.refSliderProgram.prev()"
      >
        <img
          class="slider__button_img"
          src="@/assets/img/arrow-slider-left.svg"
          alt=""
        />
      </el-button>
      <el-button
        class="slider__button slider__button_next"
        @click="$refs.refSliderProgram.next()"
      >
        <img
          class="slider__button_img"
          src="@/assets/img/arrow-slider-right.svg"
          alt=""
        />
      </el-button>
    </template>
  </carousel>

  <el-text class="slider-programm__after-text"
    >*возможны изменения в программе Ёлки</el-text
  >
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
// https://vue3-carousel.ismail9k.com/

const config = {
  itemsToShow: 1,
  itemsToScroll: 1,
  gap: 10,
  snapAlign: "start",
  wrapAround: true,
  breakpointMode: "viewport",
  breakpoints: {
    950: {
      itemsToShow: 2,
      itemsToScroll: 1,
      snapAlign: "start",
      wrapAround: true,
      gap: 20,
      mouseDrag: false,
      touchDrag: false,
    },
    1300: {
      snapAlign: "center",
      itemsToShow: 1,
      itemsToScroll: 1,
      gap: 30,
      wrapAround: true,
      mouseDrag: false,
      touchDrag: false,
    },
  },
};
</script>

<script>
import prog_1 from "@/assets/img/1-prog.svg";
import prog_2 from "@/assets/img/2-prog.svg";
import prog_2_logo from "@/assets/img/prog_2_logo.svg";
import prog_3 from "@/assets/img/3-prog.svg";
import prog_4 from "@/assets/img/4-prog.svg";
import prog_5 from "@/assets/img/5-prog.svg";
import prog_5_logo from "@/assets/img/prog_5_logo.svg";
import prog_6 from "@/assets/img/6-prog.svg";

export default {
  name: "SliderContent",
  data() {
    return {
      programms: [
        {
          title: "Премьерный показ мультфильма",
          description:
            "«Волшебник Изумрудного города. Дорога из желтого кирпича» на большом экране. В далеком городе живет девочка Элли. Однажды злая колдунья Гингема наколдовала ураган, который унес Элли и её собачку Тотошку в страну Жевунов.",
          image: prog_1,
          tags: ["кино", "6+"],
        },
        {
          title: "Весёлый квиз с ведущим",
          description:
            "Кто узнал много нового за 2024 год? Тот отгадает все детские загадки про мультики, кукольные театры и музыку в ярком квизе от Афиши. Родителям, чур, не подсказывать!",
          image: prog_2,
          logo: prog_2_logo,
          tags: ["квиз"],
        },
        {
          title: "Сладкие подарки",
          description:
            "Праздник обязательно должен быть вкусным. Чтобы у маленьких посетителей Ёлки от Афиши были силы праздновать Новый год — мы организуем наборы со сладкими подарками.",
          image: prog_3,
          tags: ["еда"],
        },
        {
          title: "Яркие именные браслеты",
          description:
            "Маленькие гости Ёлки от Афиши смогут создать цветные именные браслеты из бусин, подвесок и шармов. Помогать им будут волшебницы, которые проведут мастер-класс.",
          image: prog_4,
          tags: ["мастер-класс"],
        },
        {
          title: "Музыка",
          description:
            "Разве бывает праздник в тишине? Каждый ребёнок знает, что нет. Праздник — это про танцы, движения, улыбки и особенную атмосферную зимнюю музыку. За эту атмосферу будет отвечать HiFi-стриминг «Звук Дети», который поставит всех на уши.",
          image: prog_5,
          logo: prog_5_logo,
          tags: ["танцы"],
        },
        {
          title: "Игры, фотозоны и Ёлка",
          description:
            "Фотографии у Ёлки обязательны! А ещё фотографии с играми, фотографии с родителями, фотографии с новыми друзьями и огоньками.",
          image: prog_6,
          tags: ["на память"],
        },
      ],
    };
  },
};
</script>

<style>
.carousel__viewport {
  order: 2;
}

.carousel__track {
  align-items: flex-start;
}

@media (max-width: 600px) {
  .carousel__viewport {
    max-width: 100%;
  }
}
</style>
