<template>
  <div>

    <div class="row ">
      <p class="text-h6 q-pr-md ">
        {{ job.company }}
      </p>
      -
      <p class="text-h6 q-pl-md">
        {{ this.job.position }}
      </p>
    </div>
    <p class="text-subtitle2" v-if="job.end.year">
      {{ this.job.start.month }} / {{ this.job.start.year }} -
      {{ this.job.end.month }} /
      {{ this.job.end.year }}
    </p>
    <p class="text-subtitle2" v-else>
      {{ this.job.start.month }} / {{ this.job.start.year }} - Now
    </p>

    <p class="text-body2">
      {{ this.job.summary }}
    </p>
    <q-separator class="q-mt-sm q-mb-sm" dark/>


  </div>
</template>

<script>
export default {
  props: ["job"]
};
</script>

<style></style>
