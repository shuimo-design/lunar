/**
 * @description
 * @author 阿怪
 * @date 2024/1/7 17:34
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */


import { describe, expect, it } from 'vitest';
import { lunar } from '../lib';


describe('get lunar info test', async () => {

  describe('date', () => {
    it('2023-3-6', async () => { // 惊蛰
      const l = lunar('2023-3-6');
      expect(l.year).toBe('癸卯');
      expect(l.month).toBe('乙卯');
      expect(l.day).toBe('癸亥');
      expect(l.term).toBe('惊蛰');
    });
    it('2023-4-5', () => { // 清明
      const l = lunar('2023-4-5');
      expect(l.year).toBe('癸卯');
      expect(l.month).toBe('丙辰');
      expect(l.day).toBe('癸巳');
      expect(l.term).toBe('清明');
    });
    it('2024-1-5', () => {
      const l = lunar('2024-1-5');
      expect(l.year).toBe('癸卯');
      expect(l.month).toBe('甲子');
      expect(l.day).toBe('戊辰');
    });
    it('2024-1-7', () => {
      const l = lunar('2024-1-7');
      expect(l.year).toBe('癸卯');
      expect(l.month).toBe('乙丑');
      expect(l.day).toBe('庚午');
    });
    it('2024-2-9', () => { // 农历2023最后一天
      const l = lunar('2024-2-9');
      expect(l.year).toBe('癸卯');
      expect(l.month).toBe('丙寅');
      expect(l.day).toBe('癸卯');
    });
    it('2024-2-10', () => { // 农历2024正月初一
      const l = lunar('2024-2-10');
      expect(l.year).toBe('甲辰');
      expect(l.month).toBe('丙寅');
      expect(l.day).toBe('甲辰');
    });
    it('2024-4-29', () => {
      const l = lunar('2024-4-29');
      expect(l.year).toBe('甲辰');
      expect(l.month).toBe('戊辰');
      expect(l.day).toBe('癸亥');
    });
    it('2020-11-16', () => {
      const l = lunar('2020-11-16');
      expect(l.year).toBe('庚子');
      expect(l.month).toBe('丁亥');
      expect(l.day).toBe('癸亥');
    });
  });

  describe('datetime', () => {

    describe('hour', () => {

      it('test hour TianGan', () => {
        const l1 = lunar('2024-1-15 23:00:00');
        const l2 = lunar('2024-1-16 00:00:00');
        const l3 = lunar('2024-1-16 01:00:00');
        const l4 = lunar('2024-1-16 02:00:00');
        const l5 = lunar('2024-1-16 03:00:00');
        expect(l1.hour).toBe('甲子');
        expect(l2.hour).toBe('甲子');
        expect(l3.hour).toBe('乙丑');
        expect(l4.hour).toBe('乙丑');
        expect(l5.hour).toBe('丙寅');
      });


      it('2024-1-15 15:39:12', () => {
        const l = lunar('2024-1-15 15:39:12');
        expect(l.year).toBe('癸卯');
        expect(l.month).toBe('乙丑');
        expect(l.day).toBe('戊寅');
        expect(l.hour).toBe('庚申');
      });

      it('2024-1-15 23:39:12', () => {
        const l = lunar('2024-1-15 23:39:12');
        expect(l.hour).toBe('甲子');
      });

      it('2024-1-16 00:00:12', () => {
        const l = lunar('2024-1-16 00:00:12');
        expect(l.hour).toBe('甲子');
      });

      it('2024-1-16 01:00:00', () => {
        const l = lunar('2024-1-16 01:00:00');
        expect(l.hour).toBe('乙丑');
        expect(l.minute).toBe('初刻');
      });
    });


    describe('minute', () => {
      it('2024-1-16 01:12:00', () => {
        const l = lunar('2024-1-15 01:12:00');
        expect(l.minute).toBe('初刻');
      });
      it('2024-1-16 01:15:00', () => {
        const l = lunar('2024-1-15 01:15:00');
        expect(l.minute).toBe('一刻');
      });

      it('2024-1-16 01:30:00', () => {
        const l = lunar('2024-1-15 01:30:00');
        expect(l.minute).toBe('二刻');
      });

      it('2024-1-16 01:45:00', () => {
        const l = lunar('2024-1-15 01:45:00');
        expect(l.minute).toBe('三刻');
      });

      it('2024-1-16 01:59:00', () => {
        const l = lunar('2024-1-15 01:59:00');
        expect(l.minute).toBe('三刻');
      });

      it('2024-1-16 02:00:00', () => {
        const l = lunar('2024-1-15 02:00:00');
        expect(l.minute).toBe('正刻');
      });

      it('2024-1-16 02:15:00', () => {
        const l = lunar('2024-1-15 02:15:00');
        expect(l.minute).toBe('五刻');
      });

      it('2024-1-16 02:30:00', () => {
        const l = lunar('2024-1-15 02:30:00');
        expect(l.minute).toBe('六刻');
      });

      it('2024-1-16 02:45:00', () => {
        const l = lunar('2024-1-15 02:45:00');
        expect(l.minute).toBe('七刻');
      });
    });

  });


});
