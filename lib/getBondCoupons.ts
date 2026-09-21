import { moexFetch } from "./core/fetch.ts";

export type MoexBondCoupon = {
  isin: string;
  name: string;
  issuevalue: number;
  coupondate: string;
  recorddate: string;
  startdate: string;
  initialfacevalue: number;
  facevalue: number;
  faceunit: string;
  value: number;
  valueprc: number;
  value_rub: number;
  secid: string;
  primary_boardid: string;
};

export const getMoexBondCoupons = (params: {
  lang?: "ru" | "en";
  from?: string;
  till?: string;
  limit?: 5 | 10 | 20 | 100;
  start?: number;
}) =>
  moexFetch<MoexBondCoupon>(
    "/statistics/engines/stock/markets/bonds/bondization.json",
    "coupons",
    params
  );
