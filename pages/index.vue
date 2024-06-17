<template>
  <div>123</div>
</template>

<script lang="ts" setup>
const test = ref<number>(1);
const admin = reactive({
  name: "admin",
  password: "123",
});
console.log(test, admin);
</script>

<style lang="scss" scoped></style>
