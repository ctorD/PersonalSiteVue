<template>
  <div class="row">
    <div class="col text-subtitle1 q-pr-md">
      {{ paper.name }}
      <div class="text-body2">Publisher: {{ paper.publisher }}</div>
    </div>

    <q-list class="text-body2 q-pa-md">
      <q-item
       @click="openURL(paper.website)"
        clickable
        v-ripple
      >
        <q-icon size="50px" name="menu_book" />
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { openURL } from 'quasar'
export default {
  props: ["paper"],
  methods:{
    openURL
  }

};
</script>

<style></style>
