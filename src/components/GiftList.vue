<template>
  <div class="cards">
    <div class="card" v-for="gift in gifts" :key="gift">
      <div class="card__caption">
        <img class="card__label" :src="`${gift.label}`" alt="" />
        <img class="card__img" :src="gift.image" alt="" />
      </div>
      <el-text class="card__title">{{ gift.title }}</el-text>
      <el-text class="card__description">{{ gift.description }}</el-text>
    </div>
  </div>
</template>

<script>
export default {
  name: "GiftList",
  data() {
    return {
      gifts: [
        {
          label: "./src/assets/img/1-label.svg",
          image: "./src/assets/img/1-img.svg",
          title: "Детские  книжные новинки",
          description:
            "Издательство «Альпина.Дети» выпускает книги, которые пробуждают любопытство, помогают в родительстве и делают детство ярким. К Новому году «Альпина.Дети» выпустила зимние книги, которые украсят рождественские праздники.",
        },
        {
          label: "./src/assets/img/2-label.svg",
          image: "./src/assets/img/2-img.svg",
          title: "Детские книжные новинки",
          description:
            "В наборе 12 разных деревянных зверят, которых можно раскрасить и украсить, нарисовать одежду, придать фактуру. А потом устроить с ними домашний театр или украсить ёлку.",
        },
        {
          label: "./src/assets/img/3-label.svg",
          image: "./src/assets/img/3-img.svg",
          title: "Два билета на колесо обозрения",
          description:
            "«Солнце Москвы» — крупнейшее колесо обозрения в Европе и многофункциональный комплекс, где расположены более 35 кафе, ресторанов и развлекательных пространств. Совершите новогодний полет на аттракционе высотой 140 метров! Прикоснитесь к небу и влюбитесь в столицу за 18 минут 40 секунд.",
        },
        {
          label: "./src/assets/img/4-label.svg",
          image: "./src/assets/img/4-img.svg",
          title: "Лимитированные ёлочные игрушки",
          description:
            "Ёлочные игрушки - капельки, созданные Lamoda в коллаборации с художницей Викой Сорокиной, участницей ярмарки молодого современного искусства blazar.",
        },
        {
          label: "./src/assets/img/5-label.svg",
          image: "./src/assets/img/5-img.svg",
          title: "Годовая подписка на Звук",
          description:
            "Включайте детям увлекательные истории, песенки и сказки: целый год совершенно бесплатно по подарочной подписке от музыкального сервиса Звук.",
        },
        {
          label: "./src/assets/img/6-label.svg",
          image: "./src/assets/img/6-img.svg",
          title: "Умная колонка SberBoom Mini 2",
          description:
            "Новая версия популярной колонки от SberDevices с улучшенным звуком, виртуальным ассистентом Салют и искусственным интеллектом GigaChat. Идеальна как первая умная колонка для семьи с детьми.",
        },
      ],
    };
  },
};
</script>
