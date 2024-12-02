<template>
  <el-scrollbar>
    <el-container direction="vertical">
      <HeaderItem />
      <el-main class="main">
        <!-- <SwiperProgramms /> -->
        <CarouselItem />
        <LeadText
          text="Ёлки на Афише как на рождественской ярмарке — всех размеров: для самых
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
