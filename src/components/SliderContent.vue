<template>
  <carousel
    ref="refSliderProgram"
    class="slider-programm"
    :items-to-show="1"
    :items-to-scroll="1"
    wrap-around
    :snap-align="'center'"
  >
    <slide
      class="slider-programm__item"
      v-for="programm in programms"
      :key="programm"
    >
      <div class="slider-programm__text-container">
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

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import prog_1 from "@/assets/img/1-prog.svg";
import prog_2 from "@/assets/img/2-prog.svg";
import prog_3 from "@/assets/img/3-prog.svg";
import prog_4 from "@/assets/img/4-prog.svg";
import prog_5 from "@/assets/img/5-prog.svg";
import prog_6 from "@/assets/img/6-prog.svg";
// https://vue3-carousel.ismail9k.com/

export default {
  name: "SliderContent",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      programms: [
        {
          title: "Новая сказка «Баба-яга спасает Новый год»",
          description:
            "Мальчик Юра находит ледяной посох Снежной королевы и освобождает ее. Королева желает заморозить весь мир в канун Нового года. Деду Морозу понадобится помощь волшебницы Бабы-яги и других героев, чтобы спасти весь мир!",
          image: prog_1,
          tags: ["кино", "6+"],
        },
        {
          title: "Весёлый квиз с ведущим",
          description:
            "Кто узнал много нового за 2024 год? Тот отгадает все детские загадки про мультики, кукольные театры и музыку в ярком квизе от Афиши. Родителям, чур, не подсказывать!",
          image: prog_2,
          tags: ["квиз"],
        },
        {
          title: "Детский кейтеринг",
          description:
            "Праздник обязательно должен быть вкусным. Чтобы у маленьких посетителей Ёлки от Афиши были силы праздновать Новый год — мы организуем кейтеринг с безопасными закусками, овощами, сладостями и соками.",
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
            "Разве бывает праздник в тишине? Каждый ребёнок знает, что нет. Праздник — это про танцы, движения, улыбки и особенную атмосферную зимнюю музыку. За эту атмосферу будет отвечать диджей.",
          image: prog_5,
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
