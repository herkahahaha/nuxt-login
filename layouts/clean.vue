<template>
  <v-app dark>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "clean",
};
</script>

<style lang="scss" scoped>
// login page full height
::v-deep > .v-main__wrap {
  > div {
    height: 100%;
  }
}
</style>
