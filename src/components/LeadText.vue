<template>
  <el-text
    class="lead"
    :style="{ color: colorText == 'white' ? '#FFF' : '#000' }"
  >
    {{ text }}
  </el-text>
</template>

<script>
export default {
  name: "LeadText",
  props: {
    text: String,
    colorText: String,
  },
};
</script>
