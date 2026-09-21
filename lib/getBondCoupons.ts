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

export async function getMoexBondCoupons(): Promise<MoexBondCoupon[]> {
  let coupons: MoexBondCoupon[] = [];
  let start = 0;

  while (true) {
    const chunk = await moexFetch<MoexBondCoupon>(
      "/statistics/engines/stock/markets/bonds/bondization.json",
      "coupons",
      { start, limit: 100 }
    );

    coupons.push(...chunk);
    start += chunk.length;

    if (chunk.length < 100) {
      return coupons;
    }
  }
}
