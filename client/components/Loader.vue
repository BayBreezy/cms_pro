<template>
  <div>
    <v-overlay
      :value="$store.state.utils.loading"
      color="white"
      opacity="0.9"
      z-index="9999"
    >
      <v-row align="center" justify="center">
        <v-progress-circular
          indeterminate
          color="primary"
          size="150"
          width="2"
        ></v-progress-circular>
      </v-row>
    </v-overlay>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
