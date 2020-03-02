<template>
  <div class="row justify-center align-center items-center">
    <div class="col-11 text-subtitle2 q-pr-md">
      {{ paper.name }}
      <div class="text-caption">Publisher: {{ paper.publisher }}</div>
    </div>
    <div class="col-1 align-center justify-center items-center ">
      <q-btn  @click="openURL(paper.website)" size="15px" round color="primary" icon="link" />
    </div>
  </div>
</template>

<script>
import { openURL } from "quasar";
export default {
  props: ["paper"],
  methods: {
    openURL
  }
};
</script>

<style></style>
