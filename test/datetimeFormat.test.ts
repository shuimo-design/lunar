/**
 * @description datetime format test
 * @author 阿怪
 * @date 2024/1/15 15:34
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */


import { describe, expect, it } from 'vitest';
import { datetimeFormat } from '../lib/tools/datetimeFormat';

describe('datetime format test', () => {

  describe('date', () => {
    it('2023-1-1', () => {
      const res = datetimeFormat('2023-1-1');
      expect(res.year).toBe(2023);
      expect(res.month).toBe(1);
      expect(res.day).toBe(1);
    });
    it('2023-3-6', () => {
      const res = datetimeFormat('2023-3-6');
      expect(res.year).toBe(2023);
      expect(res.month).toBe(3);
      expect(res.day).toBe(6);
    });
    it('2023-12-31', () => {
      const res = datetimeFormat('2023-12-31');
      expect(res.year).toBe(2023);
      expect(res.month).toBe(12);
      expect(res.day).toBe(31);
    });
  });

  describe('datetime', () => {
    it('2024-1-15 15:39:12', () => {
      const res = datetimeFormat('2024-1-15 15:39:12');
      expect(res.year).toBe(2024);
      expect(res.month).toBe(1);
      expect(res.day).toBe(15);
      expect(res.hour).toBe(15);
      expect(res.minute).toBe(39);
      expect(res.second).toBe(12);
    });

  });


});
