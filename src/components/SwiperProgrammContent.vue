<template>
  <swiper
    ref="refSwiper"
    class="slider slider-swiper slider-programm slider-programm-content"
    :slidesPerView="'auto'"
    :spaceBetween="10"
    :loop="true"
    :breakpoints="{
      '950': {
        slidesPerView: 'auto',
        spaceBetween: 10,
        loop: true,
      },
    }"
    @slideChange="deleteMarginLeft"
  >
    <swiper-slide
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
        />
      </div>
    </swiper-slide>
  </swiper>

  <el-text class="slider-programm__after-text"
    >*возможны изменения в программе Ёлки</el-text
  >
</template>

<script>
import prog_1 from "@/assets/img/1-prog.svg";
import prog_2 from "@/assets/img/2-prog.svg";
import prog_2_logo from "@/assets/img/prog_2_logo.svg";
import prog_3 from "@/assets/img/3-prog.svg";
import prog_4 from "@/assets/img/4-prog.svg";
import prog_5 from "@/assets/img/5-prog.svg";
import prog_5_logo from "@/assets/img/prog_5_logo.svg";
import prog_6 from "@/assets/img/6-prog.svg";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default {
  name: "SwiperProgrammContent",
  components: {
    Swiper,
    SwiperSlide,
  },
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
