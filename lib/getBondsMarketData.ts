import { moexFetch } from "./core/fetch.ts";

export type MoexBondMarketData = {
  SECID: string;
  BID: number;
  OFFER: number;
  SPREAD: number;
  BIDDEPTHT: number;
  OFFERDEPTHT: number;
  OPEN: number;
  LOW: number;
  HIGH: number;
  LAST: number;
  LASTCHANGE: number;
  LASTCHANGEPRCNT: number;
  QTY: number;
  VALUE: number;
  YIELD: number;
  VALUE_USD: number;
  WAPRICE: number;
  LASTCNGTOLASTWAPRICE: number;
  WAPTOPREVWAPRICEPRCNT: number;
  WAPTOPREVWAPRICE: number;
  YIELDATWAPRICE: number;
  YIELDTOPREVYIELD: number;
  CLOSEYIELD: number;
  CLOSEPRICE: number;
  MARKETPRICETODAY: number;
  MARKETPRICE: number;
  LASTTOPREVPRICE: number;
  NUMTRADES: number;
  VOLTODAY: number;
  VALTODAY: number;
  VALTODAY_USD: number;
  BOARDID: string;
  TRADINGSTATUS: string;
  UPDATETIME: string;
  DURATION: number;
  CHANGE: number;
  TIME: string;
  PRICEMINUSPREVWAPRICE: number;
  LCURRENTPRICE: number;
  LCLOSEPRICE: number;
  MARKETPRICE2: number;
  OPENPERIODPRICE: number;
  SEQNUM: number;
  SYSTIME: string;
  VALTODAY_RUR: number;
  IRICPICLOSE: number;
  BEICLOSE: number;
  CBRCLOSE: number;
  YIELDTOOFFER: number;
  YIELDLASTCOUPON: number;
  TRADINGSESSION: string;
  CALLOPTIONYIELD: number;
  CALLOPTIONDURATION: number;
}

export const getMoexBondsMarketData = () =>
  moexFetch<MoexBondMarketData>(
    `/engines/stock/markets/bonds/securities.json`,
    "marketdata"
  );
