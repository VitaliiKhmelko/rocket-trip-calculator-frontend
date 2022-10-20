import { Attender } from "./attender";

/**
 * Represents one trip
 */
export interface Trip {
  name: string,
  isFinished: boolean,
  description?: string,
  uuid: string,
  attenders: Attender[],
}