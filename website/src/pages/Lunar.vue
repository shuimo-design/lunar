<script setup lang="ts">
/**
 * @description
 * @author 阿怪
 * @date 2024/1/31 19:42
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import dayjs from 'dayjs';
import { ref, watch } from 'vue';
import TimeSelector from '../components/TimeSelector.vue';
import LunarPlate from '../components/LunarPlate.vue';

const fixZero = (num: number) => {
  return num < 10 ? `0${num}` : num;
};

const currentDayjs = ref(dayjs());
const toTime = ()=>{
  return {
    year: currentDayjs.value.year(),
    month: fixZero(currentDayjs.value.month() + 1),
    day: fixZero(currentDayjs.value.date()),
    hour: fixZero(currentDayjs.value.hour()),
    minute: fixZero(currentDayjs.value.minute()),
    second: fixZero(currentDayjs.value.second())
  }
}
const timeRef = ref<Time>(toTime());

watch(currentDayjs,()=>{
  timeRef.value = toTime();
})

</script>

<template>
  <div class="lunar">

    <TimeSelector v-model="currentDayjs" :time="timeRef"/>

    <LunarPlate v-model="timeRef"/>

  </div>
</template>

<style scoped>

.lunar {
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}

</style>
