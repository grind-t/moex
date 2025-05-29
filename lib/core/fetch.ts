import { getMoexResource } from "./getResource";
import { parseMoexBlock } from "./parseBlock";

export async function moexFetch<T extends Record<string, unknown>>(
  path: string,
  block: string,
  params: Record<string, string | number | undefined> = {}
) {
  const response = await fetch(getMoexResource(path, block, params));
  const data = await response.json();

  return parseMoexBlock<T>(data[block]);
}
