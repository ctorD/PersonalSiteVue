<template>
  <div class="justify-center items-center ">
    <div class="row text-h6 q-pr-md ">
      {{ job.company }}
    </div>
    <div class=" row text-subtitle1 ">
      {{ this.job.position }}
    </div>

    <div class="text-subtitle2" v-if="job.end.year">
      {{ this.job.start.month }} / {{ this.job.start.year }} -
      {{ this.job.end.month }} /
      {{ this.job.end.year }}
    </div>
    <div class="text-subtitle2" v-else>
      {{ this.job.start.month }} / {{ this.job.start.year }} - Now
    </div>

    <q-separator class="q-mt-sm q-mb-sm" dark />
  </div>
</template>

<script>
export default {
  props: ["job"]
};
</script>

<style></style>
