<template>
  <div class="cards" v-show="windowWidth >= 950">
    <div class="card" v-for="gift in gifts" :key="gift">
      <div class="card__caption">
        <el-image
          class="card__label"
          :src="gift.label"
          alt="Логотип."
          loading="lazy"
        />
        <el-image
          class="card__img"
          :src="gift.image"
          alt="Фотография подарка."
          loading="lazy"
        />
      </div>
      <el-text class="card__title">{{ gift.title }}</el-text>
      <el-text class="card__description">{{ gift.description }}</el-text>
    </div>
  </div>

  <swiper
    v-show="windowWidth < 950"
    ref="refCarouselCards"
    class="slider-cards"
    :slidesPerView="'auto'"
    :spaceBetween="10"
    :centeredSlides="true"
    :initialSlide="1"
    :loop="true"
  >
    <swiper-slide class="card" v-for="gift in gifts" :key="gift"
      ><div class="card__caption">
        <el-image
          class="card__label"
          :src="gift.label"
          alt="Логотип."
          loading="lazy"
        />
        <el-image
          class="card__img"
          :src="gift.image"
          alt="Фотография подарка."
          loading="lazy"
        />
      </div>
      <el-text class="card__title">{{ gift.title }}</el-text>
      <el-text class="card__description">{{ gift.description }}</el-text>
    </swiper-slide>
  </swiper>
</template>

<script>
import label_1 from "@/assets/img/1-label.svg";
import label_2 from "@/assets/img/2-label.svg";
import label_3 from "@/assets/img/3-label.svg";
import label_4 from "@/assets/img/4-label.svg";
import label_5 from "@/assets/img/5-label.svg";
import label_6 from "@/assets/img/6-label.svg";
import img_1 from "@/assets/img/1-img.svg";
import img_2 from "@/assets/img/2-img.svg";
import img_3 from "@/assets/img/3-img.svg";
import img_4 from "@/assets/img/4-img.svg";
import img_5 from "@/assets/img/5-img.svg";
import img_6 from "@/assets/img/6-img.svg";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default {
  name: "GiftList",
  components: {
    Swiper,
    SwiperSlide,
  },
  created() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  data() {
    return {
      windowWidth: 1440,
      gifts: [
        {
          label: label_1,
          image: img_1,
          title: "Детские  книжные новинки",
          description:
            "Издательство «Альпина.Дети» выпускает книги, которые пробуждают любопытство, помогают в родительстве и делают детство ярким. К Новому году «Альпина.Дети» выпустила зимние книги, которые украсят рождественские праздники.",
        },
        {
          label: label_2,
          image: img_2,
          title: "Набор для безграничного творчества",
          description:
            "В наборе 12 разных деревянных зверят, которых можно раскрасить и украсить, нарисовать одежду, придать фактуру. А потом устроить с ними домашний театр или украсить ёлку.",
        },
        {
          label: label_3,
          image: img_3,
          title: "Два билета на колесо обозрения",
          description:
            "«Солнце Москвы» — крупнейшее колесо обозрения в Европе и многофункциональный комплекс, где расположены более 35 кафе, ресторанов и развлекательных пространств. Совершите новогодний полет на аттракционе высотой 140 метров! Прикоснитесь к небу и влюбитесь в столицу за 18 минут 40 секунд.",
        },
        {
          label: label_4,
          image: img_4,
          title: "Лимитированные ёлочные игрушки",
          description:
            "Ёлочные игрушки - капельки, созданные Lamoda в коллаборации с художницей Викой Сорокиной, участницей ярмарки молодого современного искусства blazar.",
        },
        {
          label: label_5,
          image: img_5,
          title: "Годовая подписка на Звук",
          description:
            "Включайте детям увлекательные истории, песенки и сказки: целый год совершенно бесплатно по подарочной подписке от музыкального сервиса Звук.",
        },
        {
          label: label_6,
          image: img_6,
          title: "Умная колонка SberBoom Mini 2",
          description:
            "Умная колонка SberBoom Mini 2 с отличным звуком и искусственным интеллектом GigaChat. Идеальна как первая умная колонка для семьи с детьми: маленькие пользователи с удовольствием овладевают технологиями, играют и узнают новое при помощи миниатюрного девайса.",
        },
      ],
    };
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>
