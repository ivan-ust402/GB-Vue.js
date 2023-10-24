<template>
  <div>
    <IntroBlock
      :style="{
        backgroundImage:
          'url(' +
          require('@/assets/img/background/intro/projectDetailsIntro.png') +
          ')',
      }"
      :settings="{ hasTitle: false }"
    />
  </div>
</template>

<script>
import IntroBlock from "@/blocks/IntroBlock.vue"

export default {
  components: { IntroBlock },
}
</script>

<style lang="scss" scoped></style>
