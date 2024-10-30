import { IPic } from "./picinterface";

export interface IGirl {
  id?: number;
  name: string;
  description: boolean;
  day: Date;
  selected: boolean;
  createdAt?: Date;
  updatedAt: Date;
  pics: [IPic];
}
