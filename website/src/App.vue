<script setup lang="ts">
/**
 * @description
 * @author 阿怪
 * @date 2024/1/31 19:23
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import Lunar from './pages/Lunar.vue';
</script>

<template>
  <div id="app">
    <m-rice-paper>
      <div class="full-screen">
        <Lunar/>
        <div class="fix-footer">
          <m-dark-mode/>
        </div>
      </div>
    </m-rice-paper>
  </div>
</template>

<style scoped>
#app, .full-screen {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.fix-footer {
  position: fixed;
  bottom: 0;
  z-index: 100;
  width: 100vw;
  display: flex;
  box-sizing: border-box;
  --dark-mode-R : 10rem;
  left: calc(50vw - var(--dark-mode-R));
}

.m-dark-mode {
  width: 32px;
  --dark-mode-h: calc(var(--dark-mode-R) * 2);
  --dark-mode-w: calc(var(--dark-mode-R) * 2);
}


</style>
