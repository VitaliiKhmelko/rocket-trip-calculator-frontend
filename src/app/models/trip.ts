import { Attender } from "./attender";

/**
 * Represents one trip
 */
export interface Trip {
  name: string,
  description?: string,
  uuid: string,
  attenders: Attender[],
}