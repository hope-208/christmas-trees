<template>
  <el-scrollbar class="scroll" v-loading="isLoading">
    <el-container direction="vertical" style="overflow: hidden">
      <HeaderItem />
      <el-main class="main">
        <CarouselItem
          v-if="windowWidth >= 950"
          :list="allEvents"
          :test-data="events"
        />
        <SwiperProgramms
          v-if="windowWidth < 950"
          :list="allEvents"
          :test-data="events"
        />
        <LeadText
          :class="'lead-white'"
          text="Ёлки на Афише как на&nbsp;рождественской ярмарке — всех размеров: для самых
          маленьких, школьников и подростков, весёлые, мультяшные и сказочные. А
          под Ёлками ещё и&nbsp;подарки!"
          color-text="white"
        />

        <LeadText :class="'lead-black'" text="А какие?" color-text="black" />

        <GiftBox :class="'gift-box'" />
        <GiftList />

        <LeadText
          :class="'lead-form'"
          text="Как выиграть новогодний детский бокс?"
          color-text="black"
        />
        <StepsItem />

        <div v-if="false">
          <LeadText
            :class="'lead-ahter-gift'"
            :text="'И&nbsp;это&nbsp;ещё&nbsp;не все&nbsp;подарки!'"
            color-text="black"
          />
          <LeadGift />
          <LeadText
            :class="'lead-white'"
            text="Всего 200 бесплатных билетов! Сразу после покупки билетов на ёлки на сайте или в мобильном приложении Афиши, на почту вам отправится билет на Ёлку 5&nbsp;января."
            color-text="white"
          />

          <LeadText
            :class="'lead-black'"
            text="Каким будет этот праздничный день?*"
            color-text="black"
          />
          <SliderContent v-if="windowWidth >= 949" />
          <SwiperProgrammContent v-if="windowWidth < 950" />
        </div>

        <LeadText
          :class="'lead-bottom'"
          text="Покупайте Ёлки всех размеров на&nbsp;Афише и&nbsp;получайте подарки: новогодний бокс от Афиши и&nbsp;друзей"
          color-text="white"
        />

        <LeadText
          :class="'lead-text-programm'"
          text="Ёлки всех размеров"
          color-text="black"
          style="text-align: left"
        />
        <SwiperProgramms bottom :list="allEvents" :test-data="events" />
      </el-main>
    </el-container>

    <FooterItem />
  </el-scrollbar>
</template>

<script setup>
import HeaderItem from "@/components/HeaderItem.vue";
import CarouselItem from "@/components/CarouselItem.vue";
import SwiperProgramms from "@/components/SwiperProgramms.vue";
import LeadText from "@/components/LeadText.vue";
import GiftBox from "@/components/GiftBox.vue";
import GiftList from "@/components/GiftList.vue";
import StepsItem from "@/components/StepsItem.vue";
import LeadGift from "@/components/LeadGift.vue";
import SliderContent from "@/components/SliderContent.vue";
import SwiperProgrammContent from "@/components/SwiperProgrammContent.vue";
import FooterItem from "@/components/FooterItem.vue";
</script>

<script>
export default {
  name: "App",
  created() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  beforeMount() {
    this.getPrograms();
  },
  mounted() {
    for (let i = 0; i < 50; i++) {
      const div = document.createElement("div");
      div.className = "snowflake";
      document.getElementById("app").appendChild(div);
    }
  },
  data() {
    return {
      isLoading: false,
      windowWidth: 1440,
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
            name: "Тайна Нового года",
            image:
              "https://img06.rl0.ru/afisha/e945x-p91x268f1024x585q85i/s3.afisha.ru/mediastorage/cb/c6/0ee6d4c1740d4a0cbf82b36cc6cb.jpg",
            url: "https://www.afisha.ru/performance/tayna-novogo-goda-311455/",
          },
          dates: [
            "2024-12-15",
            "2024-12-17",
            "2024-12-18",
            "2024-12-19",
            "2024-12-21",
            "2024-12-25",
            "2024-12-29",
            "2025-01-04",
            "2025-01-05",
          ],
          tags: ["Детские елки", "Детские"],
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
      allEvents: [],
    };
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    // обработка фида
    addUniqueEvent(event) {
      if (
        !this.allEvents.find(
          (existingEvent) =>
            existingEvent.creation.name === event.creation.name,
        )
      ) {
        const eventItem = {
          creation: {
            name: event.creation.name,
            image: event.creation.image,
            url: event.creation.url,
          },
          dates: event.dates,
          tags: event.tags,
          minPrice: event.minPrice,
          places: [],
        };

        eventItem.places.push(event.place);
        return this.allEvents.push(eventItem);
      } else {
        return this.allEvents.forEach((existingEvent) => {
          if (existingEvent.creation.name === event.creation.name) {
            event.dates.forEach((date) => {
              if (!existingEvent.dates.includes(date)) {
                existingEvent.dates.push(date);
              }
            });
            event.tags.forEach((tag) => {
              if (!existingEvent.tags.includes(tag)) {
                existingEvent.tags.push(tag);
              }
            });

            if (!existingEvent.places.includes(event.place)) {
              existingEvent.places.push(event.place);
            }

            existingEvent.minPrice =
              existingEvent.minPrice < event.minPrice
                ? existingEvent.minPrice
                : event.minPrice;
          }
        });
      }
    },
    async getPrograms() {
      if (this.isLoading) return;
      this.isLoading = true;
      const res = await fetch("https://unihelper.in/get-feed", {
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

      res.events.forEach((event) => {
        this.addUniqueEvent(event);
      });

      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss">
@use "sass:math";
.snowflake {
  --size: 1vw;
  width: var(--size);
  height: var(--size);
  background: url("./assets/img/star.svg") no-repeat center / cover border-box;
  position: absolute;
  top: -5vh;
  z-index: 2;
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
    --size: #{math.random(15) * 0.2}vw;
    --left-ini: #{math.random(20) - 10}vw;
    --left-end: #{math.random(20) - 10}vw;
    left: #{math.random(95)}vw;
    animation: snowfall #{10 + math.random(10)}s linear infinite;
    animation-delay: -#{math.random(20)}s;
  }
}

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

.lead-text-programm.lead.el-text {
  max-width: 1239px;
  width: 100%;
  margin-bottom: 44px;
}

@media (max-width: 1350px) {
  .lead-form.lead.el-text,
  .lead-ahter-gift.lead.el-text,
  .lead-text-programm.lead.el-text {
    max-width: 80%;
  }
}
@media (max-width: 950px) {
  .lead-form.lead.el-text,
  .lead-ahter-gift.lead.el-text {
    max-width: 80%;
    margin-bottom: 30px;
  }

  .lead-text-programm.lead.el-text {
    max-width: 94%;
    margin: 0 0 24px;
  }
}
</style>
