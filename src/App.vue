<template>
  <el-scrollbar class="scroll">
    <el-container direction="vertical">
      <HeaderItem />
      <el-main class="main">
        <!-- <SwiperProgramms /> -->
        <CarouselItem />
        <LeadText
          text="Ёлки на Афише как на рождественской ярмарке — всех размеров: для самых
          маленьких, школьников и подростков, весёлые, мультяшные и сказочные. А
          под Ёлками ещё и&nbsp;подарки!"
          color-text="white"
          style="margin: 185px 0 160px"
        />

        <LeadText text="А какие?" color-text="black" />

        <GiftBox style="margin-bottom: 175px" />
        <GiftList />

        <LeadText
          :class="'lead-form'"
          text="Как&nbsp;выиграть новогодний&nbsp;детский бокс?"
          color-text="black"
        />
        <StepsItem />

        <LeadText
          :class="'lead-ahter-gift'"
          :text="'И&nbsp;это&nbsp;ещё&nbsp;не все&nbsp;подарки!'"
          color-text="black"
        />
        <LeadGift />
        <LeadText
          text="Всего 350 бесплатных билетов! Сразу после покупки билетов на ёлки на сайте или в мобильном приложении Афиши, на почту вам отправится билет на Ёлку 6&nbsp;января."
          color-text="white"
          style="margin-bottom: 160px"
        />

        <LeadText
          text="Каким&nbsp;будет&nbsp;этот праздничный&nbsp;день?*"
          color-text="black"
        />
        <SliderContent />

        <LeadText
          text="Покупайте Ёлки всех размеров на&nbsp;Афише и&nbsp;получайте подарки: новогодний бокс от&nbsp;Афиши и бесплатный билет на Ёлку от&nbsp;Афиши и Москино"
          color-text="white"
          style="margin-bottom: 103px"
        />

        <LeadText
          text="Ёлки всех размеров"
          color-text="black"
          style="text-align: left"
        />
        <CardsProgramm />
      </el-main>
    </el-container>

    <FooterItem />
  </el-scrollbar>
</template>

<script setup>
import HeaderItem from "@/components/HeaderItem.vue";
import CarouselItem from "@/components/CarouselItem.vue";
// import SwiperProgramms from "@/components/SwiperProgramms.vue";
import LeadText from "@/components/LeadText.vue";
import GiftBox from "@/components/GiftBox.vue";
import GiftList from "@/components/GiftList.vue";
import StepsItem from "@/components/StepsItem.vue";
import LeadGift from "@/components/LeadGift.vue";
import SliderContent from "@/components/SliderContent.vue";
import CardsProgramm from "@/components/CardsProgramm.vue";
import FooterItem from "@/components/FooterItem.vue";
</script>

<script>
export default {
  name: "App",
  mounted() {
    for (let i = 0; i < 50; i++) {
      const div = document.createElement("div");
      div.className = "snowflake";
      document.getElementById("app").appendChild(div);
    }
  },
};
</script>

<style lang="scss">
.snowflake {
  --size: 1vw;
  width: var(--size);
  height: var(--size);
  background: white;
  border-radius: 50%;
  position: absolute;
  top: -5vh;
  z-index: 1;
}

@keyframes snowfall {
  0% {
    transform: translate3d(var(--left-ini), 0, 0);
  }
  100% {
    transform: translate3d(var(--left-end), 110vh, 0);
  }
}

@for $i from 1 through 50 {
  .snowflake:nth-child(#{$i}) {
    --size: #{random(5) * 0.2}vw;
    --left-ini: #{random(20) - 10}vw;
    --left-end: #{random(20) - 10}vw;
    left: #{random(100)}vw;
    animation: snowfall #{5 + random(10)}s linear infinite;
    animation-delay: -#{random(10)}s;
  }
}

/* added small blur every 6 snowflakes*/
.snowflake:nth-child(6n) {
  filter: blur(1px);
}

.lead-form.lead.el-text {
  max-width: 890px;
  margin-bottom: 61px;
}
.lead-ahter-gift.lead.el-text {
  max-width: 570px;
  margin-bottom: 58px;
}
</style>
