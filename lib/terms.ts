/**
 * @description terms  节气
 * @author 阿怪
 * @date 2024/1/7 04:52
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 *
 * 这里的年月是根据阳历走的，代码参考https://github.com/OPN48/cnlunar
 * 直接用github gpt转换
 */
import { SOLAR_TERMS_NAME_LIST, TermInfoType } from './tools/constant';


// 1901-2100年二十节气最小数序列 向量压缩法
const ENC_VECTOR_LIST = [4, 19, 3, 18, 4, 19, 4, 19, 4, 20, 4, 20, 6, 22, 6, 22, 6, 22, 7, 22, 6, 21, 6, 21];
/**
 *  1901-2100年二十节气数据 每个元素的存储格式如下：
 *  https://www.hko.gov.hk/sc/gts/time/conversion.htm
 *   1-24
 *  节气所在天（减去节气最小数）
 *  1901-2100年香港天文台公布二十四节气按年存储16进制，1个16进制为4个2进制
 */
const SOLAR_TERMS_DATA_LIST = [
  "0x6aaaa6aa9a5a", "0xaaaaaabaaa6a", "0xaaabbabbafaa", "0x5aa665a65aab", "0x6aaaa6aa9a5a",
  "0xaaaaaaaaaa6a", "0xaaabbabbafaa", "0x5aa665a65aab", "0x6aaaa6aa9a5a", "0xaaaaaaaaaa6a",
  "0xaaabbabbafaa", "0x5aa665a65aab", "0x6aaaa6aa9a56", "0xaaaaaaaa9a5a", "0xaaabaabaaeaa",
  "0x569665a65aaa", "0x5aa6a6a69a56", "0x6aaaaaaa9a5a", "0xaaabaabaaeaa", "0x569665a65aaa",
  "0x5aa6a6a65a56", "0x6aaaaaaa9a5a", "0xaaabaabaaa6a", "0x569665a65aaa", "0x5aa6a6a65a56",
  "0x6aaaa6aa9a5a", "0xaaaaaabaaa6a", "0x555665665aaa", "0x5aa665a65a56", "0x6aaaa6aa9a5a",
  "0xaaaaaabaaa6a", "0x555665665aaa", "0x5aa665a65a56", "0x6aaaa6aa9a5a", "0xaaaaaaaaaa6a",
  "0x555665665aaa", "0x5aa665a65a56", "0x6aaaa6aa9a5a", "0xaaaaaaaaaa6a", "0x555665665aaa",
  "0x5aa665a65a56", "0x6aaaa6aa9a5a", "0xaaaaaaaaaa6a", "0x555665655aaa", "0x569665a65a56",
  "0x6aa6a6aa9a56", "0xaaaaaaaa9a5a", "0x5556556559aa", "0x569665a65a55", "0x6aa6a6a65a56",
  "0xaaaaaaaa9a5a", "0x5556556559aa", "0x569665a65a55", "0x5aa6a6a65a56", "0x6aaaa6aa9a5a",
  "0x5556556555aa", "0x569665a65a55", "0x5aa665a65a56", "0x6aaaa6aa9a5a", "0x55555565556a",
  "0x555665665a55", "0x5aa665a65a56", "0x6aaaa6aa9a5a", "0x55555565556a", "0x555665665a55",
  "0x5aa665a65a56", "0x6aaaa6aa9a5a", "0x55555555556a", "0x555665665a55", "0x5aa665a65a56",
  "0x6aaaa6aa9a5a", "0x55555555556a", "0x555665655a55", "0x5aa665a65a56", "0x6aa6a6aa9a5a",
  "0x55555555456a", "0x555655655a55", "0x5a9665a65a56", "0x6aa6a6a69a5a", "0x55555555456a",
  "0x555655655a55", "0x569665a65a56", "0x6aa6a6a65a56", "0x55555155455a", "0x555655655955",
  "0x569665a65a55", "0x5aa6a5a65a56", "0x15555155455a", "0x555555655555", "0x569665665a55",
  "0x5aa665a65a56", "0x15555155455a", "0x555555655515", "0x555665665a55", "0x5aa665a65a56",
  "0x15555155455a", "0x555555555515", "0x555665665a55", "0x5aa665a65a56", "0x15555155455a",
  "0x555555555515", "0x555665665a55", "0x5aa665a65a56", "0x15555155455a", "0x555555555515",
  "0x555655655a55", "0x5aa665a65a56", "0x15515155455a", "0x555555554515", "0x555655655a55",
  "0x5a9665a65a56", "0x15515151455a", "0x555551554515", "0x555655655a55", "0x569665a65a56",
  "0x155151510556", "0x555551554505", "0x555655655955", "0x569665665a55", "0x155110510556",
  "0x155551554505", "0x555555655555", "0x569665665a55", "0x55110510556", "0x155551554505",
  "0x555555555515", "0x555665665a55", "0x55110510556", "0x155551554505", "0x555555555515",
  "0x555665665a55", "0x55110510556", "0x155551554505", "0x555555555515", "0x555655655a55",
  "0x55110510556", "0x155551554505", "0x555555555515", "0x555655655a55", "0x55110510556",
  "0x155151514505", "0x555555554515", "0x555655655a55", "0x54110510556", "0x155151510505",
  "0x555551554515", "0x555655655a55", "0x14110110556", "0x155110510501", "0x555551554505",
  "0x555555655555", "0x14110110555", "0x155110510501", "0x555551554505", "0x555555555555",
  "0x14110110555", "0x55110510501", "0x155551554505", "0x555555555555", "0x110110555",
  "0x55110510501", "0x155551554505", "0x555555555515", "0x110110555", "0x55110510501",
  "0x155551554505", "0x555555555515", "0x100100555", "0x55110510501", "0x155151514505",
  "0x555555555515", "0x100100555", "0x54110510501", "0x155151514505", "0x555551554515",
  "0x100100555", "0x54110510501", "0x155150510505", "0x555551554515", "0x100100555",
  "0x14110110501", "0x155110510505", "0x555551554505", "0x100055", "0x14110110500",
  "0x155110510501", "0x555551554505", "0x55", "0x14110110500", "0x55110510501",
  "0x155551554505", "0x55", "0x110110500", "0x55110510501", "0x155551554505",
  "0x15", "0x100110500", "0x55110510501", "0x155551554505", "0x555555555515"
];

const START_YEAR = 1901;

function abListMerge(a: number[], type: number = 1, b: number[] = ENC_VECTOR_LIST): number[] {
  let c: number[] = [];
  for (let i = 0; i < a.length; i++) {
    c.push(a[i] + b[i] * type);
  }
  return c;
}

function unZipSolarTermsList(data: string, rangeEndNum = 24, charCountLen = 2): number[] {
  let list2: number[] = [];
  for (let i = 1; i <= rangeEndNum; i++) {
    const right = charCountLen * (rangeEndNum - i);
    let dataBigInt: bigint;

    dataBigInt = BigInt(data)

    const x = dataBigInt >> BigInt(right);
    const c = BigInt(2) ** BigInt(charCountLen);
    list2 = [Number(x % c), ...list2];
  }
  return abListMerge(list2); // You need to implement this function
}

function getTheYearAllSolarTermsList(year: number): number[] {
  return unZipSolarTermsList(SOLAR_TERMS_DATA_LIST[year - START_YEAR]);
}

function getSolarTermsDateList(year: number): [number, number][] {
  let solarTermsList = getTheYearAllSolarTermsList(year);
  let solarTermsDateList: [number, number][] = [];
  for (let i = 0; i < solarTermsList.length; i++) {
    let day = solarTermsList[i];
    let month = Math.floor(i / 2) + 1;
    solarTermsDateList.push([month, day]);
  }
  return solarTermsDateList;
}


export const getTermsByYear = (year: number) => {
  const dateList = getSolarTermsDateList(year);
  const termDateList: Array<TermInfoType> = [];
  dateList.forEach((date, i) => {
    const [m, d] = date;
    termDateList.push({
      m, d, term: SOLAR_TERMS_NAME_LIST[i]
    });
  });

  return termDateList;
};



