<template>
  <div class="gift">
    <div class="gift__card">
      <img class="gift__image" :src="giftImg" />
      <el-text class="gift__info title"
        >Еженедельный розыгрыш&nbsp;<span class="gift__info-span"
          >боксов с&nbsp;подарками</span
        >&nbsp;для детей&nbsp;и&nbsp;родителей
      </el-text>
    </div>
  </div>
</template>

<script>
import giftImg from "@/assets/img/gift.svg";

export default {
  name: "GiftBox",
  data() {
    return {
      giftImg,
    };
  },
};
</script>
