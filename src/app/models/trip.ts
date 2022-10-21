import { Participator } from "./participator";

/**
 * Represents one trip
 */
export interface Trip {
  name: string,
  isFinished: boolean,
  description?: string,
  uuid: string,
  participators: Participator[],
}