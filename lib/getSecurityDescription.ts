import { getMoexResource } from "./core/getResource.ts";

export type MoexSecurityDescription = {
  SECID: string;
  SHORTNAME: string;
  NAME: string;
  LATSHORTNAME: string;
  LATNAME: string;
  CALCMODE: string;
  CALCMODEDESCR: string;
  CURRENCYID: string;
  FREQUENCY: string;
  SCHEDULE: string;
  DECIMALS: number;
  INITIALVALUE: number;
  ISSUEDATE: Date;
  TRADINGSESSION: string;
  UNDERLYINGTICKER: string;
  UNDERLYINGISIN: string;
  REBALANCE: string;
  WEIGHTLIMITTYPE: string;
  TYPENAME: string;
  GROUP: string;
  TYPE: string;
  GROUPNAME: string;
  FIRSTCALCDATE: Date;
  CONSTITUENTS: string;
  DESCRIPTION: string;
  INITIALCAPITALIZATION: number;
  INITIALD: number;
  ISSUENAME: string;
  ISIN: string;
  FACEVALUE: number;
  FACEUNIT: string;
  HASPROSPECTUS: boolean;
  HASDEFAULT: boolean;
  HASTECHNICALDEFAULT: boolean;
  EMITENTMISMATCHCUR: number;
  ISQUALIFIEDINVESTORS: boolean;
  QUALINVESTORGROUP: string;
  EMITTER_ID: number;
  REGNUMBER: string;
  ISSUESIZE: number;
  REGISTRY_DATE: Date;
  DECISIONDATE: Date;
  LISTLEVEL: number;
  MORNINGSESSION: boolean;
  EVENINGSESSION: boolean;
  WEEKENDSESSION: boolean;
  MATDATE: Date;
  INITIALFACEVALUE: number;
  STARTDATEMOEX: Date;
  ISCONCESSIONAGREEMENT: boolean;
  INCLUDEDBYMOEX: boolean;
  DAYSTOREDEMPTION: number;
  COUPONFREQUENCY: number;
  COUPONDATE: Date;
  COUPONPERCENT: number;
  COUPONVALUE: number;
  BOND_TYPE: string;
  BOND_SUBTYPE: string;
  EARLYREPAYMENT: boolean;
  COUPON_BENCHMARK: string;
  COUPON_BENCHMARK_SPREAD: string;
  AMORTBOND: boolean;
  BUYBACKDATE: Date;
  EMITTER_VALUE_BUILDING: boolean;
  LOTSIZE: number;
  TIMETABLE: string;
  DELIVERYTYPE: string;
  FRSTTRADE: Date;
  LSTTRADE: Date;
  LSTDELDATE: Date;
  ASSETCODE: string;
  EXECTYPE: string;
  CONTRACTNAME: string;
  GROUPTYPE: string;
  UNIT: string;
  EXPIRATION_TYPE: string;
  EXPIRATION_TIME: string;
  SETTLETYPE: string;
  OPTIONTYPE: string;
  STRIKE: number;
  MARGINSTYLE: string;
  UNDERLYINGASSET: string;
  SERIES_NAME: string;
  DEPOSITARY_ORG_NAME: string;
  SHARESPERRECEIPT: number;
  HIGHRISK: boolean;
  SECSUBTYPE: string;
  SUBORDBOND: boolean;
  PROGRAMREGISTRYNUMBER: string;
  STRUCTBOND: boolean;
};

function parseValue(value: string, type: string) {
  switch (type) {
    case "number":
      return Number(value);
    case "boolean":
      return value === "1";
    case "date":
      return new Date(value);
    default:
      return value;
  }
}

export async function getMoexSecurityDescription(id: string): Promise<MoexSecurityDescription> {
  const response = await fetch(getMoexResource(`/securities/${id}.json`, "description"));
  const { description } = await response.json();
  const nameIndex = description.columns.indexOf("name");
  const valueIndex = description.columns.indexOf("value");
  const typeIndex = description.columns.indexOf("type");
  const result: Record<string, string | number | boolean | Date> = {};

  for (const row of description.data) {
    result[row[nameIndex]] = parseValue(row[valueIndex], row[typeIndex]);
  }

  return result as MoexSecurityDescription;
}
