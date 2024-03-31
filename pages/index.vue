<template>
  <div>
    Hello Nuxt3
    <UButton @click="addCount">{{ count }}</UButton>
    <UToggle
      v-model="isDark"
      on-icon="i-heroicons-moon-20-solid"
      off-icon="i-heroicons-sun-20-solid"
    ></UToggle>
  </div>
</template>

<script lang="ts" setup>
const count = ref<number>(0);
console.log(count.value);
const addCount = () => {
  count.value += 1;
};

const colorMode = useColorMode();
const isDark = computed<boolean>({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  }
});
</script>

<style lang="scss" scoped></style>
