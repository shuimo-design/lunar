<script setup lang="ts">
/**
 * @description
 * @author 阿怪
 * @date 2024/1/31 23:21
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { inject } from 'vue';

const props = defineProps<{
  size: '2' | '4',
  typeKey: keyof Time,
  hide?: boolean
}>();
const time = inject<Time>('time')!;
const emits = defineEmits(['add', 'sub']);
const add = () => {emits('add', props.typeKey);};
const sub = () => {emits('sub', props.typeKey);};

</script>

<template>
  <div :class="`flex column center input${size}`">
    <div class="flex">
      <input type="text" v-model="time[typeKey]"> <span v-if="!hide">:</span>
    </div>
    <div class="control">
      <m-button @click="add">+</m-button>
      <m-button @click="sub">-</m-button>
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
}

.flex.column {
  flex-direction: column;
}

.flex.center {
  justify-content: center;
  align-items: center;
}

input {
  background: unset;
  border: unset;
  outline: unset;
  overflow: hidden;

  text-align: center;

  font-size: 10rem;
  line-height: 10rem;
}

.input4 {
  width: 34rem;

  input {
    width: 28rem;
  }
}

.input2 {
  width: 18rem;

  input {
    width: 12rem;
  }
}
</style>
