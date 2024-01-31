<script setup lang="ts">
import { lunar } from '../../../lib';
import { computed, provide } from 'vue';
import LunarPlateItem from './LunarPlateItem.vue';

const time = defineModel<Time>();
const plateRNum = 40;


const lunarVal = computed(() => {
  if (!time.value) {
    return undefined;
  }
  return lunar(`${time.value.year}-${time.value.month}-${time.value.day} ${time.value.hour}:${time.value.minute}:${time.value.second}`);
});

provide('time', computed(() => time.value));
provide('lunarVal', computed(() => lunarVal.value));

</script>

<template>
  <!--  <input type="number" v-model="index">-->
  <span>{{ lunarVal }}</span>
  <LunarPlateItem :plate-r-num="80" findKey="year"/>
  <LunarPlateItem :plate-r-num="74" findKey="month"/>
  <LunarPlateItem :plate-r-num="68" findKey="day"/>
</template>

<style scoped>

</style>
