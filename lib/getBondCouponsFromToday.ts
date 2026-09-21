import dayjs from "dayjs";
import { getMoexBondCoupons, type MoexBondCoupon } from "./getBondCoupons.ts";

export type { MoexBondCoupon };

export async function getMoexBondCouponsFromToday(years: number): Promise<MoexBondCoupon[]> {
  const from = dayjs().format("YYYY-MM-DD");
  const till = dayjs().add(years, "year").format("YYYY-MM-DD");

  let coupons: MoexBondCoupon[] = [];
  let start = 0;

  while (true) {
    const chunk = await getMoexBondCoupons({ from, till, start, limit: 100 });

    coupons.push(...chunk);
    start += chunk.length;

    if (chunk.length < 100) {
      return coupons;
    }
  }
}
