import { Participator } from "./participator";

/**
 * Represents one trip
 */
export interface Trip {
  name: string,
  isFinished: boolean,
  description?: string,
  id: string,
  participators: { [key: string]: Participator },
}