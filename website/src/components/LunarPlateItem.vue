<script setup lang="ts">
/**
 * @description
 * @author 阿怪
 * @date 2024/1/31 22:22
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { computed, inject, Ref, ref, watch } from 'vue';
import { LiuShiJiaZi, lunar } from '../../../lib';

type LunarTime = ReturnType<typeof lunar>;
const time = inject<Ref<Time>>('time')!;
const lunarVal = inject<Ref<LunarTime>>('lunarVal')!;

const { plateRNum, findKey } = defineProps<{
  plateRNum: number,
  findKey: keyof LunarTime
}>();


const plateR = `${plateRNum}vw`;

let index = ref(0);

const toStyle = (i: number) => {
  // 根据i 长度为 60 以底部为准，旋转 360 / 60 * i 度
  const rotate = 360 / 60 * i;
  return {
    transform: `rotate(${rotate}deg)`
  };
};


const initLunar = () => {
  if (!lunarVal.value) {
    return;
  }
  index.value = LiuShiJiaZi.indexOf(lunarVal.value[findKey]!);
};
initLunar();
watch(() => lunarVal.value, () => {
  initLunar();
});
const plateRotate = computed(() => {
  return {
    transform: `rotate(${index.value * -6}deg)`
  };
});

const DiZhiColor: Record<string, string> = {
  '子': 'var(--m-color-blue)',
  '丑': 'var(--m-color-warn)',
  '寅': 'var(--m-color-green)',
  '卯': 'var(--m-color-green)',
  '辰': 'var(--m-color-warn)',
  '巳': 'var(--m-color-main)',
  '午': 'var(--m-color-main)',
  '未': 'var(--m-color-warn)',
  '申': 'var(--m-color-orange)',
  '酉': 'var(--m-color-orange)',
  '戌': 'var(--m-color-warn)',
  '亥': 'var(--m-color-blue)'
};

/**
 * 甲木、乙木、丙火、丁火、戊土、己土、庚金、辛金、壬水、癸水，
 * 甲丙戊庚壬为阳性，
 * 乙丁己辛癸为阴性。
 */
const TianGanColor: Record<string, string> = {
  '甲': 'var(--m-color-mu-yang)',
  '乙': 'var(--m-color-mu-yin)',
  '丙': 'var(--m-color-huo-yang)',
  '丁': 'var(--m-color-huo-yin)',
  '戊': 'var(--m-color-tu-yang)',
  '己': 'var(--m-color-tu-yin)',
  '庚': 'var(--m-color-jin-yang)',
  '辛': 'var(--m-color-jin-yin)',
  '壬': 'var(--m-color-shui-yang)',
  '癸': 'var(--m-color-shui-yin)'
};

const getColor = (str: string) => {
  const [tian, di] = str.split('');
  return {
    '--m-blog-date-from': TianGanColor[tian],
    '--m-blog-date-to': DiZhiColor[di]
  };
};

</script>

<template>
  <div class="lunar-plate-item" :style="plateRotate">
    <div class="plate">
      <div :class="['item',{'is-active':i===index}]" v-for="(year,i) in LiuShiJiaZi"
           :style="toStyle(i)">
        <span :style="i===index?getColor(year):{}">{{ year }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

.lunar-plate-item {
  position: absolute;
  bottom: calc(-0.5 * v-bind(plateR));
  transition: transform 1s ease-in-out;
}

.plate {
  position: relative;
  height: v-bind(plateR);
  width: v-bind(plateR);
}

.item {
  --font-size: calc(v-bind(plateR) / 50);
  font-size: var(--font-size);
  text-align: center;
  position: absolute;
  left: calc(v-bind(plateR) / 2 - var(--font-size));
  height: v-bind(plateR);
  opacity: 0.3;
  transition: all 1s ease-in-out;

  span{
    --m-blog-date-from: var(--span-color);
    --m-blog-date-to: var(--span-color);
    background: linear-gradient(to right, var(--m-blog-date-from), var(--m-blog-date-to));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &.is-active {
    opacity: 1;
    font-weight: bold;

    span {
      display: inline-block;
      transform: scale(1.1);
    }
  }
}
</style>
