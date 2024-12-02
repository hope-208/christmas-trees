<template>
  <el-scrollbar class="scroll">
    <el-container direction="vertical">
      <HeaderItem />
      <el-main class="main">
        <!-- <SwiperProgramms /> -->
        <CarouselItem />
        <LeadText
          text="Ёлки на Афише как на рождест-венской ярмарке — всех размеров: для самых
          маленьких, школьников и подростков, весёлые, мультяшные и сказочные. А
          под Ёлками ещё и подарки!"
          color-text="white"
          style="margin: 185px 0 160px"
        />

        <LeadText text="А какие?" color-text="black" />

        <GiftBox />
        <LeadText
          text="Как выиграть новогодний детский бокс?"
          color-text="black"
        />
        <LeadText text="И это ещё не все подарки!" color-text="black" />
      </el-main> </el-container
  ></el-scrollbar>
</template>

<script setup>
import HeaderItem from "@/components/HeaderItem.vue";
import CarouselItem from "@/components/CarouselItem.vue";
// import SwiperProgramms from "@/components/SwiperProgramms.vue";
import LeadText from "@/components/LeadText.vue";
import GiftBox from "@/components/GiftBox.vue";
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
  z-index: 0;
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
</style>
