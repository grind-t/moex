import { moexFetch } from "./core/fetch.ts";

export type MoexBond = {
  SECID: string;
  BOARDID: string;
  SHORTNAME: string;
  PREVWAPRICE: number;
  YIELDATPREVWAPRICE: number;
  COUPONVALUE: number;
  NEXTCOUPON: string;
  ACCRUEDINT: number;
  PREVPRICE: number;
  LOTSIZE: number;
  FACEVALUE: number;
  BOARDNAME: string;
  STATUS: string;
  MATDATE: string;
  DECIMALS: number;
  COUPONPERIOD: number;
  ISSUESIZE: number;
  PREVLEGALCLOSEPRICE: number;
  PREVDATE: string;
  SECNAME: string;
  REMARKS: string;
  MARKETCODE: string;
  INSTRID: string;
  SECTORID: string;
  MINSTEP: number;
  FACEUNIT: string;
  BUYBACKPRICE: number;
  BUYBACKDATE: string;
  ISIN: string;
  LATNAME: string;
  REGNUMBER: string;
  CURRENCYID: string;
  ISSUESIZEPLACED: number;
  LISTLEVEL: number;
  SECTYPE: string;
  COUPONPERCENT: number;
  OFFERDATE: string;
  SETTLEDATE: string;
  LOTVALUE: number;
  FACEVALUEONSETTLEDATE: number;
  CALLOPTIONDATE: string;
  PUTOPTIONDATE: string;
  DATEYIELDFROMISSUER: string;
};

export const getMoexBonds = () =>
  moexFetch<MoexBond>(
    `/engines/stock/markets/bonds/securities.json`,
    "securities"
  );
