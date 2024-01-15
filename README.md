# @shuimo-design/lunar

农历转换工具

[![npm](https://img.shields.io/npm/v/@shuimo-design/lunar?color=%23c50315&style=flat-square)](https://www.npmjs.com/package/@shuimo-design/lunar)
[![codecov](https://codecov.io/gh/shuimo-design/lunar/graph/badge.svg?token=C094CF7FVT)](https://codecov.io/gh/shuimo-design/lunar)

A Chinese lunar calendar conversion tool.

## Usage

```typescript
import { lunar } from '@shuimo-design/lunar';

const lunarDate = new lunar('2024-01-15 17:07:00');
/**
 *  response will be:
 *  {
 *    year: '癸卯',
 *    month: '乙丑',
 *    day: '戊寅',
 *    hour: '辛酉',
 *    minute: '初刻',
 *    term: undefined
 *  }
 */
```

### term

```typescript
import { lunar } from '@shuimo-design/lunar';

const lunarDate = new lunar('2023-3-6')

/**
 * response will be:
 * {
 *   year: '癸卯',
 *   month: '乙卯',
 *   day: '癸亥',
 *   hour: '壬子',
 *   minute: '正刻',
 *   term: '惊蛰'
 * }
 */

```

## 参考资料

> 日期转换 https://github.com/isee15/Lunar-Solar-Calendar-Converter
>
> 节气算法 https://github.com/OPN48/cnlunar
>
> 学习资料 https://ytliu0.github.io/ChineseCalendar/rules_simp.html
