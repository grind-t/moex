import { moexFetch } from "./core/fetch.ts";

export type MoexBondAmortization = {
  isin: string;
  name: string;
  issuevalue: number;
  amortdate: string;
  facevalue: number;
  initialfacevalue: number;
  faceunit: string;
  valueprc: number;
  value: number;
  value_rub: number;
  data_source: string;
  secid: string;
  primary_boardid: string;
};

export const getMoexBondAmortizations = (
  id: string,
  params: {
    lang?: "ru" | "en";
    from?: string;
    till?: string;
    limit?: number;
    start?: number;
  } = {}
) =>
  moexFetch<MoexBondAmortization>(
    `/securities/${id}/bondization.json`,
    "amortizations",
    { ...params, limit: params.limit ?? "unlimited" }
  );
