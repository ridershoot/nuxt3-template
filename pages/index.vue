<template>
  <div>{{ config.public.apiBaseUrl }}</div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
</script>

<style lang="scss" scoped></style>
