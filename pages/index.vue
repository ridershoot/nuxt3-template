<template>
  <div>{{ config.public.apiBaseUrl }}</div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
console.log(config.public);
</script>

<style lang="scss" scoped></style>
