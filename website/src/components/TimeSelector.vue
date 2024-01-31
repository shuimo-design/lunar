<script setup lang="ts">
/**
 * @description
 * @author 阿怪
 * @date 2024/1/31 19:44
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import dayjs, { ManipulateType } from 'dayjs';
import TimeSelectorInput from './TimeSelectorInput.vue';
import { computed, provide } from 'vue';

const currentDayjs = defineModel<dayjs.Dayjs>();
const props = defineProps<{ time: Time }>();

provide('time', computed(() => props.time));

const add = (unit:ManipulateType) => {
  currentDayjs.value = currentDayjs.value!.add(1, unit);
};
const sub = (unit:ManipulateType) => {
  currentDayjs.value = currentDayjs.value!.subtract(1, unit);
};



</script>

<template>

  <div class="time" v-if="time">
    <TimeSelectorInput type-key="year" size="4" @add="add" @sub="sub"/>
    <TimeSelectorInput type-key="month" size="2" @add="add" @sub="sub"/>
    <TimeSelectorInput type-key="day" size="2" @add="add" @sub="sub"/>
    <div class="time-divider"></div>
    <TimeSelectorInput type-key="hour" size="2" @add="add" @sub="sub"/>
    <TimeSelectorInput type-key="minute" size="2" @add="add" @sub="sub"/>
    <TimeSelectorInput type-key="second" size="2" @add="add" @sub="sub" hide/>
  </div>

</template>

<style scoped>



.time {
  display: flex;
  font-size: 8rem;
  line-height: 8rem;


  .time-divider {
    display: inline-block;
    margin-right: 4rem;
  }

}

</style>
