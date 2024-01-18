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
      it('初刻', () => {
        const l = lunar('2024-1-15 01:00:00');
        expect(l.minute).toBe('初刻');
        const l2 = lunar('2024-1-15 01:07:11');
        expect(l2.minute).toBe('初刻');
      });

      it('半刻', () => {
        const l = lunar('2024-1-15 01:07:12');
        expect(l.minute).toBe('半刻');
        const l2 = lunar('2024-1-15 01:14:23');
        expect(l2.minute).toBe('半刻');
      });

      it('一刻', () => {
        const l = lunar('2024-1-15 01:14:24');
        expect(l.minute).toBe('一刻');
        const l2 = lunar('2024-1-15 01:21:35');
        expect(l2.minute).toBe('一刻');
      });

      it('一刻半',()=>{
        const l = lunar('2024-1-15 01:21:36');
        expect(l.minute).toBe('一刻半');
        const l2 = lunar('2024-1-15 01:28:47');
        expect(l2.minute).toBe('一刻半');
      })

      it('二刻',()=>{
        const l = lunar('2024-1-15 01:28:48');
        expect(l.minute).toBe('二刻');
        const l2 = lunar('2024-1-15 01:35:59');
        expect(l2.minute).toBe('二刻');
      })

      it('二刻半',()=>{
        const l = lunar('2024-1-15 01:36:00');
        expect(l.minute).toBe('二刻半');
        const l2 = lunar('2024-1-15 01:43:11');
        expect(l2.minute).toBe('二刻半');
      })

      it('三刻',()=>{
        const l = lunar('2024-1-15 01:43:12');
        expect(l.minute).toBe('三刻');
        const l2 = lunar('2024-1-15 01:50:23');
        expect(l2.minute).toBe('三刻');
      })

      it('三刻半',()=>{
        const l = lunar('2024-1-15 01:50:24');
        expect(l.minute).toBe('三刻半');
        const l2 = lunar('2024-1-15 01:57:35');
        expect(l2.minute).toBe('三刻半');
      })

      it('四刻',()=>{
        const l = lunar('2024-1-15 01:57:36');
        expect(l.minute).toBe('四刻');
        const l2 = lunar('2024-1-15 02:04:47');
        expect(l2.minute).toBe('四刻');
      })

      it('四刻半',()=>{
        const l = lunar('2024-1-15 02:04:48');
        expect(l.minute).toBe('四刻半');
        const l2 = lunar('2024-1-15 02:11:59');
        expect(l2.minute).toBe('四刻半');
      })

      it('五刻',()=>{
        const l = lunar('2024-1-15 02:12:00');
        expect(l.minute).toBe('五刻');
        const l2 = lunar('2024-1-15 02:19:11');
        expect(l2.minute).toBe('五刻');
      })

      it('五刻半',()=>{
        const l = lunar('2024-1-15 02:19:12');
        expect(l.minute).toBe('五刻半');
        const l2 = lunar('2024-1-15 02:26:23');
        expect(l2.minute).toBe('五刻半');
      })

      it('六刻',()=>{
        const l = lunar('2024-1-15 02:26:24');
        expect(l.minute).toBe('六刻');
        const l2 = lunar('2024-1-15 02:33:35');
        expect(l2.minute).toBe('六刻');
      })

      it('六刻半',()=>{
        const l = lunar('2024-1-15 02:33:36');
        expect(l.minute).toBe('六刻半');
        const l2 = lunar('2024-1-15 02:40:47');
        expect(l2.minute).toBe('六刻半');
      })

      it('七刻',()=>{
        const l = lunar('2024-1-15 02:40:48');
        expect(l.minute).toBe('七刻');
        const l2 = lunar('2024-1-15 02:47:59');
        expect(l2.minute).toBe('七刻');
      })

      it('七刻半',()=>{
        const l = lunar('2024-1-15 02:48:00');
        expect(l.minute).toBe('七刻半');
        const l2 = lunar('2024-1-15 02:55:11');
        expect(l2.minute).toBe('七刻半');
      })

      it('八刻',()=>{
        const l = lunar('2024-1-15 02:55:12');
        expect(l.minute).toBe('八刻');
        const l2 = lunar('2024-1-15 02:59:59');
        expect(l2.minute).toBe('八刻');
        const l3 = lunar('2024-1-15 03:00:00');
        expect(l3.minute).toBe('初刻');
      })

    });

  });


});
